import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./profileSlice";

const store = configureStore({
	reducer: {
		user: userReducer,
	},
});

export default store;
