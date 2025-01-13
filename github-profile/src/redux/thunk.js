import { getProfile, getRepos } from "../services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfile = createAsyncThunk("user/fetchProfile", async (username) => {
	return getProfile(username);
});
export const fetchRepos = createAsyncThunk("user/fetchRepos", async (username) => {
	return getRepos(username);
});
