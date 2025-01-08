/* eslint-disable react/prop-types */
function CardItem({ item }) {
	return (
		<div>
			<div className="relative">
				<img src={item.image} alt="coffee" className="w-full rounded-xl" />
				{item.popular && (
					<span className="absolute top-2 left-2 text-small py-1 px-3 bg-accent-yellow text-dark-1 rounded-xl font-semibold">
						Popular
					</span>
				)}
			</div>
			<div className="flex justify-between mt-3 items-center">
				<h2 className="">{item.name}</h2>
				<span className="py-0.5 px-1.5 rounded-md bg-accent-green text-price text-dark-1 font-semibold ">
					{item.price}
				</span>
			</div>
			<div className="flex justify-between items-center mt-1.5">
				<div className="flex items-center gap-1">
					<span className="">
						{item.votes > 0 ? (
							<img src="/Star_fill.svg" alt="star filled" />
						) : (
							<img src="/Star.svg" alt="star empty" />
						)}
					</span>
					<span className="text-label">{item.rating}</span>
					<span className="text-grey-1 text-label">{item.votes > 0 ? `(${item.votes} votes)` : `No ratings`}</span>
				</div>
				{!item.available && <span className="text-accent-red text-label">Sold Out</span>}
			</div>
		</div>
	);
}

export default CardItem;
