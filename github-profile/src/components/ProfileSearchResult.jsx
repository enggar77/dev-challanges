/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { changeUsername } from "../redux/profileSlice";

function ProfileSearchResult({ profileData, setSearchProfile }) {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!profileData) return;

		dispatch(changeUsername(profileData.login));
		setSearchProfile("");
	};

	if (!profileData) return;

	if (profileData.avatar_url) {
		return (
			<button
				className="absolute top-[120%] left-0 w-full min-h-20 rounded-lg flex items-center text-start gap-4 p-2 shadow-md bg-grey-300 hover:bg-gradient-to-r from-dark to-accent-blue"
				onClick={handleSubmit}
			>
				<img src={profileData.avatar_url} alt={`${profileData.login} avatar`} className="rounded-lg w-16" />
				<div className="flex flex-col gap-1">
					<span>{profileData.name || profileData.login}</span>
					<span className="text-small text-grey-100">{profileData.bio || profileData.location || ""}</span>
				</div>
			</button>
		);
	} else {
		return (
			<div className="absolute top-[120%] left-0 w-full min-h-20 bg-grey-300 rounded-lg p-4">
				<p className="text-center text-grey-100">no profile to display</p>
			</div>
		);
	}
}

export default ProfileSearchResult;
