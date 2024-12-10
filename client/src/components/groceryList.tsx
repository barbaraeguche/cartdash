import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pencil, Trash2 } from 'lucide-react';
import { urlString } from '../util/constants.ts';

type Grocery = {
	item: string;
	hasPurchased: boolean;
}

export default function GroceryList() {
	const [groceries, setGroceries] = useState<Grocery[]>([]);
	
	useEffect(() => {
		const fetchGrocery = async () => {
			try {
				const { data } = await axios.get(`${urlString}`,
					{ headers: { 'Content-Type': 'application/json' } }
				);
				setGroceries(data.groceries);
			} catch (err) {
				console.error(`Error fetching items: ${err}`);
			}
		}
		fetchGrocery().then();
	}, []);
	
	// const updateGrocery = async () => {
	// 	try {
	// 		//
	// 	} catch (err) {
	// 		console.error(`Error updating items: ${err}`);
	// 	}
	// }
	// const deleteGrocery = async () => {
	// 	try {
	// 		//
	// 	} catch (err) {
	// 		console.error(`Error deleting items: ${err}`);
	// 	}
	// }
	
	// const items = ['bananas', 'apples', 'milk', 'bread', 'peanut butter', 'ranch sauce', 'sweet potatoes'];
	
	return (
		<div className="">
			{groceries.length > 0 && (
				<h3 className="">Grocery List</h3>
			)}
			
			{groceries && (
				groceries.map((grocery, index) => (
          <div key={index} className="flex gap-2 items-center py-2">
            <input type="checkbox" checked={grocery.hasPurchased} disabled/>
            <span>{grocery.item}</span>
            {/* edit functionalities */}
            <div>
              <Pencil className="h-5 w-5 text-gray-700"/>
              <Trash2 className="h-5 w-5 text-red-500"/>
            </div>
          </div>
        ))
			)}
		</div>
	);
}