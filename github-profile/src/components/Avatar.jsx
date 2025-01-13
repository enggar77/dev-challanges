import { useSelector } from "react-redux";

function Avatar() {
	const photo = useSelector((state) => state.user.profile.avatar_url);
	return (
		<div className="-mt-8 lg:-mt-10 p-2.5 lg:p-3 bg-grey-300 border-grey-300 max-w-fit rounded-2xl">
			<div className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden bg-dark">
				<img src={photo} alt="profile picture" className="w-full h-full" />
			</div>
		</div>
	);
}

export default Avatar;
