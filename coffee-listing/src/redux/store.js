import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./listSlice";

const store = configureStore({
	reducer: {
		list: dataReducer,
	},
});

export default store;
