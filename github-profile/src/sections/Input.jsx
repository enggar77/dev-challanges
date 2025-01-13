import { useEffect, useState } from "react";
import ProfileSearchResult from "../components/ProfileSearchResult";
import { getProfile } from "../services";

function Input() {
	const [searchProfile, setSearchProfile] = useState("");
	const [profileData, setProfileData] = useState(null);
	const [debouncedSearch, setDebouncedSearch] = useState(searchProfile);

	// Debounce logic to delay fetching
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(searchProfile);
		}, 500);

		return () => {
			clearTimeout(handler);
		};
	}, [searchProfile]);

	// Fetch profile data
	useEffect(() => {
		const fetchProfile = async (searchProfile) => {
			try {
				const result = await getProfile(searchProfile);
				setProfileData(result);
			} catch (err) {
				setProfileData(null);
				console.log(err.message);
			}
		};

		if (debouncedSearch) {
			fetchProfile(debouncedSearch);
		} else {
			setProfileData(null);
		}
	}, [debouncedSearch]);

	return (
		<div className="bg-[url('/hero-image-github-profile-sm.jpg')] lg:bg-[url('/hero-image-github-profile.jpg')] h-48 bg-cover bg-right lg:h-60">
			<div className="mx-4">
				<form className="max-w-[500px] mx-auto top-6 lg:top-10 relative">
					<div className="relative px-3 gap-3 bg-grey-300 rounded-lg flex items-center overflow-hidden lg:px-4">
						<span className="py-3">
							<img src="/Search.svg" alt="Search icon" className="w-5 lg:w-8" />
						</span>
						<input
							type="text"
							placeholder="Search GitHub username"
							className="bg-grey-300 w-full h-full focus:outline-none placeholder:text-grey-50"
							value={searchProfile}
							onChange={(e) => {
								setSearchProfile(e.target.value);
							}}
						/>
					</div>

					{debouncedSearch && (
						<ProfileSearchResult profileData={profileData} setSearchProfile={setSearchProfile} />
					)}
				</form>
			</div>
		</div>
	);
}

export default Input;
