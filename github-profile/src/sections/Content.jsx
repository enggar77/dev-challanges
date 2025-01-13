import { useDispatch, useSelector } from "react-redux";
import Repository from "../components/Repository";
import { setShowAll } from "../redux/profileSlice";

function Content() {
	const dispatch = useDispatch();
	const { bio, name, login } = useSelector((state) => state.user.profile);
	const repos = useSelector((state) => state.user.repo);
	const showAll = useSelector((state) => state.user.showAll);

	const slicedRepos = repos?.slice(0, 5);
	return (
		<main className="mx-4 max-w-[1200px] md:mx-8 xl:mx-auto">
			<h1 className="text-[24px] lg:text-heading font-medium mb-1">{name || login}</h1>
			<p>{bio || ""}</p>

			<div className="grid gap-6 grid-cols-1 md:grid-cols-2 py-6 lg:gap-8">
				{!showAll && slicedRepos.map((repo) => <Repository key={repo.id} repo={repo} />)}
				{!showAll && (
					<div className="md:col-span-2 text-center mt-4 text-[14px] font-medium">
						<button onClick={() => dispatch(setShowAll(true))}>View all repositories</button>
					</div>
				)}

				{showAll && repos.map((repo) => <Repository key={repo.id} repo={repo} />)}
			</div>
		</main>
	);
}

export default Content;
