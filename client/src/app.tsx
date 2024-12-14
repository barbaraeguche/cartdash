import Header from './components/header.tsx';
import InputBar from './components/input-bar.tsx';
import GroceryList from './components/grocery-list.tsx';
import Footer from './components/footer.tsx';

export default function App() {
	return (
		<div className="h-screen m-0 p-2.5 box-border font-newsreader flex flex-col">
			<Header />
			<main className="flex-1">
				<InputBar />
				<GroceryList />
			</main>
			<Footer />
		</div>
	);
}