import { Dispatch, SetStateAction } from 'react';

import { apiClient } from '../util/axiosConfig.ts';
import { Grocery } from '../util/types.ts';

const fetchGrocery = async (
	setGroceries: Dispatch<SetStateAction<Grocery[]>>
) => {
	try {
		const { data } = await apiClient.get('');
		setGroceries(data.groceries);
	} catch (err) {
		console.error(`Error fetching items: ${err}`);
	}
};

const addGrocery = async (
	newItem: string,
	setNewItem: Dispatch<SetStateAction<string>>
) => {
	try {
		const { data } = await apiClient.post('/add', {
			'item': newItem.trim().toLowerCase()
		});
		setNewItem(''); // clear the input field after successful addition
		return data.message;
	} catch (err) {
		console.error(`Error adding item: ${err}`);
	}
};

const updateGrocery = async (
	former: string,
	latter: string
) => {
	if (latter.trim().toLowerCase() === former.trim().toLowerCase()) return 'No changes made.';
	
	try {
		const { data } = await apiClient.put('/update', {
			'prev': former.trim().toLowerCase(),
			'next': latter.trim().toLowerCase()
		});
		return data.message;
	} catch (err) {
		console.error(`Error updating items: ${err}`);
	}
};

const deleteGrocery = async (
	former: string
) => {
	try {
		await apiClient.delete(`/delete/${former.trim()}`);
	} catch (err) {
		console.error(`Error deleting items: ${err}`);
	}
};

export { fetchGrocery, addGrocery, updateGrocery, deleteGrocery };