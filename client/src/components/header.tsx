export default function Header() {
	return (
		<header className="flex flex-col text-center mt-8">
			<h1 className="text-4xl tracking-[50%] text-mint">
				cartdash
				<span className="hidden sm:inline-flex">🧺</span>
			</h1>
			<span className="italic text-[13px] ml-14">simplifying your grocery shopping experience...</span>
		</header>
	);
}