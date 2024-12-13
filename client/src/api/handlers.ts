import { Dispatch, SetStateAction } from 'react';

import { apiClient } from '../util/axiosConfig.ts';
import { Grocery } from '../util/types.ts';

const fetchGrocery = async (
	setGroceries: Dispatch<SetStateAction<Grocery[]>>
) => {
	try {
		const { data } = await apiClient.get('/');
		setGroceries(data.groceries);
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
		const { data } = await apiClient.post('/add', {
			'item': newItem.trim()
		});
		setNewItem(''); // clear the input field after successful addition
		return data.message;
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
		const { data } = await apiClient.put('/update', {
			'prev': former.trim(),
			'next': latter.trim()
		});
		return data.message;
	} catch (err) {
		console.error(`Error updating items: ${err}`);
	}
}

const deleteGrocery = async (
	former: string
) => {
	try {
		await apiClient.delete(`/delete/${former.trim()}`);
	} catch (err) {
		console.error(`Error deleting items: ${err}`);
	}
}

export { fetchGrocery, addGrocery, updateGrocery, deleteGrocery };