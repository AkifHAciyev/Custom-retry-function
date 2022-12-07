const fetchData = () => fetch('https://northwind.vercel.app/api/product');

// creating a new function that will retry automatically

async function addRetries(data, num) {
	try {
		return await axios.get(data);
	} catch (err) {
		if (num === 1) {
			throw err;
		}
		return await addRetries(data, num - 1);
	}
}

const fetchWithRetries = addRetries(fetchData, 4);

fetchWithRetries();
