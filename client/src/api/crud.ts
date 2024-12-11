import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { urlString } from '../util/constants.ts';
import { Grocery } from '../util/types.ts';

const fetchGrocery = async (setGroceries: Dispatch<SetStateAction<Grocery[]>>) => {
	try {
		const { data } = await axios.get(`${urlString}`, {
			headers: { 'Content-Type': 'application/json' }
		});
		setGroceries(data.groceries);
	} catch (err) {
		console.error(`Error fetching items: ${err}`);
	}
}

const addGrocery = async (newItem: string, setNewItem: Dispatch<SetStateAction<string>>) => {
	if (!newItem) return;  // if input is an empty string

	try {
		await axios.post(`${urlString}/add`, {
			'latter': newItem
			}, {
			headers: { 'Content-Type': 'application/json' }
		});
		setNewItem(''); // clear the input field after successful addition
	} catch (err) {
		console.error(`Error adding item: ${err}`);
	}
}

const updateGrocery = async (former: string, latter: string) => {
	try {
		await axios.put(`${urlString}/update`, {
			'former': former, 'latter': latter
		}, {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error(`Error updating items: ${err}`);
	}
}

const deleteGrocery = async (former: string) => {
	try {
		await axios.delete(`${urlString}/delete/${former}`, {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error(`Error deleting items: ${err}`);
	}
}

export { fetchGrocery, addGrocery, updateGrocery, deleteGrocery };
