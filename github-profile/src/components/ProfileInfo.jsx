// eslint-disable-next-line react/prop-types
function ProfileInfo({ name, value }) {
	return (
		<>
			<button className="py-1.5 px-4 bg-dark rounded-lg flex gap-3 items-center text-small lg:text-[14px] lg:gap-5 lg:py-2 lg:px-6 cursor-default">
				<span>{name}</span>
				<div className="w-[1px] h-6 lg:h-8 bg-grey-200"></div>
				<span>{value}</span>
			</button>
		</>
	);
}

export default ProfileInfo;
