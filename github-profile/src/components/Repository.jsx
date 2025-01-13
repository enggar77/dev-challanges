/* eslint-disable react/prop-types */

function formatTimeDifference(timestamp) {
	const lastUpdate = new Date(timestamp);
	const now = new Date();
	const differenceInSeconds = Math.floor((now - lastUpdate) / 1000);

	const timeUnits = [
		{ unit: "year", seconds: 365 * 24 * 60 * 60 },
		{ unit: "month", seconds: 30 * 24 * 60 * 60 },
		{ unit: "week", seconds: 7 * 24 * 60 * 60 },
		{ unit: "day", seconds: 24 * 60 * 60 },
		{ unit: "hour", seconds: 60 * 60 },
		{ unit: "minute", seconds: 60 },
		{ unit: "second", seconds: 1 },
	];

	for (const { unit, seconds } of timeUnits) {
		const interval = Math.floor(differenceInSeconds / seconds);
		if (interval > 0) {
			return `updated ${interval} ${unit}${interval > 1 ? "s" : ""} ago`;
		}
	}

	return "updated just now";
}

function Repository({ repo }) {
	const { name, description, license, forks, stargazers_count, html_url, updated_at } = repo;

	return (
		<a
			className="p-5 flex flex-col gap-8 justify-between rounded-xl text-start bg-gradient-to-r from-dark to-accent-blue curs"
			title={html_url}
			href={html_url}
			target="_blank"
		>
			<div className="space-y-3">
				<h1 className="text-[18px] lg:text-title font-medium">{name}</h1>
				<p className="text-grey-100">{description}</p>
			</div>
			<div className="flex gap-3 flex-wrap items-center text-grey-100">
				{license && (
					<span className="flex gap-1 items-center">
						<img src="/Chield_alt.svg" alt="License" className="w-6" />
						<p>{license.spdx_id}</p>
					</span>
				)}

				<span className="flex gap-1 items-center">
					<img src="/Nesting.svg" alt="fork" className="w-6" />
					<p>{forks}</p>
				</span>

				<span className="flex gap-1 items-center">
					<img src="/Star.svg" alt="star" className="w-6" />
					<p>{stargazers_count}</p>
				</span>

				<span className="text-small grow text-end">{formatTimeDifference(updated_at)}</span>
			</div>
		</a>
	);
}

export default Repository;
