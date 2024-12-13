import Header from './components/header.tsx';
import InputBar from './components/input-bar.tsx';
import GroceryList from './components/grocery-list.tsx';
import Footer from './components/footer.tsx';

export default function App() {
	return (
		<div className="m-0 p-2 box-border font-newsreader">
			<Header />
			<InputBar />
			<GroceryList />
			<Footer />
		</div>
	);
}