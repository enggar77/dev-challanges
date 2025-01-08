import { setActiveTab } from "../redux/listSlice";
import { useDispatch, useSelector } from "react-redux";

function Tab() {
	const activeTab = useSelector((state) => state.list.tab);
	const dispatch = useDispatch();

	return (
		<nav className="text-center z-10 relative">
			{["All Products", "Available Now"].map((tab) => (
				<button
					key={tab}
					onClick={() => dispatch(setActiveTab(tab))}
					className={`py-1 px-3 text-[14px] lg:text-body ${activeTab === tab ? "bg-grey-2 rounded-lg" : ""}`}
				>
					{tab}
				</button>
			))}
		</nav>
	);
}

export default Tab;
