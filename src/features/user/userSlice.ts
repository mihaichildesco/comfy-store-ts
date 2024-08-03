import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "@/components/ui/use-toast";
import { log } from "console";

export type User = {
  username: string;
  // json web token
  jwt: string;
};

type UserState = {
  user: User | null;
};

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem("user");
  if (!user) return null;
  return JSON.parse(user);
};

const initialState: UserState = {
  user: getUserFromLocalStorage(),
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));

      if (user.username === "demo user") {
        toast({
          title: "Welcome Guest User",
        });
        return;
      }
      toast({
        title: "Logged in successfully",
      });
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast({
        title: "Logged out successfully",
      });
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
