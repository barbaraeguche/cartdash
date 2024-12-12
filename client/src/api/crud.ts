import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';

import { urlString } from '../util/constants.ts';
import { Grocery } from '../util/types.ts';

const fetchGrocery = async (
	setGroceries: Dispatch<SetStateAction<Grocery[]>>
) => {
	try {
		// get the list from the database
		const { data } = await axios.get(`${urlString}`, {
			headers: { 'Content-Type': 'application/json' }
		});
		return setGroceries(data.groceries);
	} catch (err) {
		console.error(`Error fetching items: ${err}`);
	}
}

const addGrocery = async (
	newItem: string,
	setNewItem: Dispatch<SetStateAction<string>>
) => {
	if (!newItem) return;  // if input is an empty string

	try {
		// add the item to the database
		await axios.post(`${urlString}/add`, {
			'item': newItem.trim()
		});
		setNewItem(''); // clear the input field after successful addition
	} catch (err) {
		console.error(`Error adding item: ${err}`);
	}
}

const updateGrocery = async (
	former: string,
	latter: string
) => {
	if (!latter) return;  // if input is an empty string
	
	try {
		// update the item in the database
		await axios.put(`${urlString}/update`, {
			'prev': former.trim(), 'next': latter.trim()
		}, {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error(`Error updating items: ${err}`);
	}
}

const deleteGrocery = async (
	former: string
) => {
	try {
		// delete the item from the database
		await axios.delete(`${urlString}/delete/${former.trim()}`, {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error(`Error deleting items: ${err}`);
	}
}

export { fetchGrocery, addGrocery, updateGrocery, deleteGrocery };