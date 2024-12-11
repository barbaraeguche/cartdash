import Header from './components/header.tsx';
import InputBar from './components/inputBar.tsx';
import GroceryList from './components/groceryList.tsx';
import Footer from './components/footer.tsx';

export default function App() {
	return (
		<div className="m-0 p-2 box-border">
			<Header />
			<InputBar />
			<GroceryList />
			<Footer />
		</div>
	);
}