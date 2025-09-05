import { account } from "@/Services/appwrite";
import type { User } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk<User, void>(
  "auth/loginUser",
  async (_, { rejectWithValue }) => {
    try {
      const session = await account.get();
      if (!session) {
        throw Error("Session not found");
      }
      console.log(session);
      return session;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message || "Failed to fetch session.");
      } else {
        return rejectWithValue(error || "Failed to fetch session.");
      }
    }
  }
);

export const logoutUser = createAsyncThunk<boolean, void>(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await account.deleteSession({
        sessionId: "current",
      });
      return true;
    } catch (error: unknown) {
      return rejectWithValue(error || "Failed to log out.");
    }
  }
);
