import { useSelector } from "react-redux";
import Avatar from "../components/Avatar";
import ProfileInfo from "../components/ProfileInfo";

function Header() {
	const { location, followers, following } = useSelector((state) => state.user.profile);

	const info = [
		{ name: "Followers", value: followers },
		{ name: "Following", value: following },
		{ name: "Location", value: location ? location : "Earth" },
	];

	return (
		<header className="mx-4 max-w-[1200px] md:mx-8 xl:mx-auto mb-8 flex gap-6 flex-col lg:flex-row lg:items-center">
			<Avatar />

			<div className="flex gap-4 flex-wrap">
				{info.map((item) => (
					<ProfileInfo key={item.name} name={item.name} value={item.value} />
				))}
			</div>
		</header>
	);
}

export default Header;
