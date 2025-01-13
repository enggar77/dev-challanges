import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProfile, fetchRepos } from "./thunk";

// Utility function to save data to local storage
const saveToLocalStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const fetchProfileData = createAsyncThunk("user/fetchProfileData", async (username, { dispatch }) => {
	try {
		const profile = await dispatch(fetchProfile(username)).unwrap();
		if (profile) {
			await dispatch(fetchRepos(username)).unwrap();
		}
		return profile;
	} catch (error) {
		console.log("Error fetching profile data:", error.message);
		throw error;
	}
});

const initialState = {
	username: localStorage.getItem("last_username") || "github",
	profile: {},
	repo: [],
	showAll: false,
	status: "idle",
	error: "",
};

const profileSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		changeUsername(state, action) {
			state.username = action.payload;
			state.showAll = false;
			localStorage.setItem("last_username", action.payload);
		},
		setShowAll(state, action) {
			state.showAll = action.payload;
		},
		setProfile(state, action) {
			state.profile = action.payload;
		},
		setRepo(state, action) {
			state.repo = action.payload;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchProfile.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchProfile.fulfilled, (state, action) => {
				state.status = "idle";
				state.profile = action.payload;
				saveToLocalStorage(`profile_${state.username}`, action.payload);
			})
			.addCase(fetchProfile.rejected, (state) => {
				state.status = "error";
			})
			.addCase(fetchRepos.fulfilled, (state, action) => {
				state.repo = action.payload;
				saveToLocalStorage(`repo_${state.username}`, action.payload);
			}),
});

export const { changeUsername, setProfile, setRepo, setShowAll } = profileSlice.actions;
export default profileSlice.reducer;
