import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const API_URL = "https://zara-zeta.vercel.app/";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isLoading: false,
  message: null,
 

  register: async (username, email, individualNumber) => {

    set({ isLoading: true });

    try {
      const response = await fetch(`${API_URL}/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          individualNumber,
        }),
      });

      const data = await response.json();
      console.log(data)
      if(!data){
        console.log("Can't get data now, try again later...")
        return {success:false}
      }
     
      if (!response.ok) throw new Error(data.message | "Somthing went wrong!");
       
      await AsyncStorage.setItem("user", JSON.stringify(data.user));
      set({ user: data.user, isLoading: false });

      return { success: true };
    } catch (error) {
      console.log("Error", error);
      set({ isLoading: false });
      return { success: false, error: data.message };
    }
  },

  checkAuth: async () => {
    try {
      const userJson = await AsyncStorage.getItem("user");
      const user = userJson ? JSON.parse(userJson) : null;
      set({ user });
    } catch (error) {
      console.log("error fetching user from async", error);
    }
  },
  login: async (username, individualNumber) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`${API_URL}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          individualNumber,
        }),
      });
      const data = await response.json();

      await AsyncStorage.removeItem("user", JSON.stringify(data.user));
      await AsyncStorage.removeItem("token", data.token);

      set({ user: data?.user, isLoading: false, token: data?.token });
      set({ isLoading: false });
      return { success: true };
    } catch (error) {
      console.log("Error", error);
      set({ isLoading: false, token: null, user: null });
    }
  },
  verify: async (code) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`${API_URL}/api/user/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({otp:code}),
      });

      

      const data = await response.json();
      //console.log(data)
      if (!response.ok) throw new Error(data.message || "something went wrong");
      console.log(data);
      set({ message: data.message });
      console.log(message)

      return { success: true };
    } catch (error) {
      console.log("Error", error);
      set({ isLoading: false, user: null, message: null });
      return { success: false };
    }
  },

  isAuthenticated:async()=>{
    set({isLoading:false})
    try {
      const response=await fetch(`${API_URL}/api/user/`);

      const data = await response.json()
      AsyncStorage.setItem("user",JSON.parse(data.user))

    } catch (error) {
      console.log("Error",error)
     
    }
  }
}));



export default useAuthStore;
