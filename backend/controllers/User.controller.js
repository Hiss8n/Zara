import { User } from "../model/User.js";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "../config/email.js";

export const register = async (req, res) => {
  const { username, email, individualNumber } = req.body;
  try {
    if (!username || !email || !individualNumber)
      return res.status(400).json({ message: "All fields must be provided!" });

    if (username.length < 3)
      return res
        .status(400)
        .json({ message: "username must be atleast 3 characters" });

    if (individualNumber.length < 11)
      return res
        .status(400)
        .json({ message: "You have entered wrong credentials" });
    //console.log(individualNumber.length)

    const existUser = await User.findOne({ email });
    //hashing
    const salt = await bcrypt.genSalt(10);
    const hashIndividualNumber = await bcrypt.hash(individualNumber, salt);

    if (existUser)
      return res
        .status(400)
        .json({ message: "User with this details already exists" });

    const user = new User({
      username,
      email,
      individualNumber: hashIndividualNumber,
    });

    await user.save();

    res.status(201).json({
      success: true,
      user,
      message: "You have been registered successfully",
    });
  } catch (error) {
    console.log("Error", error);
    res
      .status(500)
      .json({ success: false, message: "Server error,can not register now" });
  }
};

export const login = async (req, res) => {
  const { username, individualNumber } = req.body;
  try {
    if (!username || !individualNumber)
      return res
        .status(400)
        .json({ success: false, message: "wrong credentials" });

    const user = await User.findOne({
      $or: [{ username }, { individualNumber }],
    });

    if (!user)
      return res
        .status(403)
        .json({ success: false, message: "User does not exist!!" });

    const decodeInd = await bcrypt.compare(
      individualNumber,
      user.individualNumber
    );

    if (!decodeInd)
      return res
        .status(403)
        .json({ success: false, message: "Wrong individual number" });

    const otp = Math.floor(100000 + Math.random() * 90000);

    const optExpiresAt = new Date( Date.now() + 15 * 60 * 1000);

    (user.verificationCode = otp),
      (user.verificationCodeExpiredAt = optExpiresAt),
      (user.isVerified = false);
    user.save();
    try {
      await sendVerificationEmail({
        from: "Zara <>hissentutu@gmail.com<>",
        to: user.email,
        subject: "Verification email",
        html: `
        <h1>ZARA APP</h1>
        <h2>This is your verification code ${otp}</h2>
        <p>This will expire after 15 minutes</p>
        `,
      });
    } catch (error) {
      console.error("Error", error);
      return res.status(500).json({ message: "Can not send email now" });
    }
    const token = await generatToken(user._id);

    return res.status(200).json({
      success: true,
      token,
      user,
      message: "Sent a verification mail to your inbox",
    });
  } catch (error) {
    console.log("Error", error);
    return res
      .status(500)
      .json({ success: false, message: "Sever error, could not login now." });
  }
};

export const verify = async (req, res) => {
  const { otp} = req.body;
   /* console.log(verificationCode) */
  try {
    if(!otp) return res.status(400).json({message:'Please enter verification code'})
    const user = await User.findOne({
      verificationCode:otp,
      verificationCodeExpiredAt: { $gt: new Date() },
    });
   
    if (!user) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Wrong verification code or expired",
        });
    }

    /* const expiredCode=await User.findOne({})
    if (!expiredCode){return res.status(40).json({ message: "Verification code Expired!" })
    }; */
    user.isVerified = true;
    user.verificationCode = undefined,
    user.verificationCodeExpiredAt = undefined;
    
     await user.save();

    res.status(200).json({
      success:true,
      message:"Verified seccesfully",
      user,
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Server error,can not verify token." });
  }
};
