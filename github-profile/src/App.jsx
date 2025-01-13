import { fetchProfileData } from "./redux/profileSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile, setRepo } from "./redux/profileSlice";

import Header from "./sections/Header";
import Content from "./sections/Content";
import Input from "./sections/Input";

function App() {
	const dispatch = useDispatch();
	const username = useSelector((state) => state.user.username);

	useEffect(() => {
		const storedProfile = JSON.parse(localStorage.getItem(`profile_${username}`));
		const storedRepo = JSON.parse(localStorage.getItem(`repo_${username}`));

		if (storedProfile) dispatch(setProfile(storedProfile));
		if (storedRepo) dispatch(setRepo(storedRepo));

		if (!storedProfile || !storedRepo) {
			dispatch(fetchProfileData(username));
		}
	}, [username, dispatch]);

	return (
		<div className="min-h-screen text-grey-50 bg-grey-300 text-[14px] font-normal lg:text-body">
			<Input />
			<Header />
			<Content />
		</div>
	);
}

export default App;
