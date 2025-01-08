import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectFilteredData } from "./redux/listSlice";

import Header from "./components/Header";
import Tab from "./components/Tab";
import CardItem from "./components/CardItem";

function App() {
	const { status, data, error } = useSelector((state) => state.list);
	const dispatch = useDispatch();
	const availableData = useSelector(selectFilteredData);
	const activeTab = useSelector((state) => state.list.tab);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<div className="bg-dark-1 min-h-screen flex justify-center text-white relative">
			<div className="absolute left-0 right-0 top-0 w-full bg-cover h-48 bg-[url('/bg-cafe-sm.jpg')] lg:h-64 lg:bg-[url('/bg-cafe-lg.jpg')] xl:h-80 xl:bg-[url('/bg-cafe.jpg')]"></div>
			<div className="mx-6 my-24 bg-dark-2 z-10 rounded-xl p-12 relative overflow-hidden lg:my-40 xl:px-32">
				<div className="absolute top-2 left-1/2 w-60 lg:top-7">
					<img src="/vector.svg" alt="vector svg" className="w-full h-full" />
				</div>
				<Header />
				<Tab />
				{status === "loading" && <p className="text-center mt-32">Loading...</p>}
				{status === "idle" && (
					<main className="pt-10 grid gap-8 justify-center md:grid-cols-2 lg:grid-cols-3">
						{activeTab === "All Products" && data.map((item) => <CardItem key={item.id} item={item} />)}
						{activeTab === "Available Now" && availableData.map((item) => <CardItem key={item.id} item={item} />)}
					</main>
				)}
				{status === "error" && <p className="text-center mt-32 text-accent-red">{error}</p>}
			</div>
		</div>
	);
}

export default App;
