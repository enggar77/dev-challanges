import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("list/fetchData", async function () {
	const data = await fetch(
		"https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json",
	);
	return await data.json();
});

const listSlice = createSlice({
	name: "list",
	initialState: {
		status: "idle",
		data: [],
		error: "",
		tab: "All Products",
	},
	reducers: {
		setActiveTab(state, action) {
			state.tab = action.payload;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchData.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = "idle";
			})
			.addCase(fetchData.rejected, (state) => {
				state.status = "error";
				state.error = "There was a problem getting the coffee list.";
			}),
});

export const { setActiveTab } = listSlice.actions;
export default listSlice.reducer;

export const selectFilteredData = (state) => {
	const { data, tab } = state.list;
	if (tab === "Available Now") return data.filter((item) => item.available);
	return data;
};
