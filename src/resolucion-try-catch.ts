const GOLD_API_BASE_URL = new URL('https://www.goldapi.io/api/XAU/USD/654654');
const USD_API_BASE_URL = new URL('https://dolarapi.com/v1/dolares/blue');

interface RequestOptions {
	method: string;
	headers: Headers;
}

class NetworkError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'NetworkError';
	}
}

const headers = new Headers({
	'x-access-token': 'goldapi-1i8ou3jrllfl9nwh-io',
	'Content-Type': 'application/json',
});

const requestOptions = {
	method: 'GET',
	headers: headers,
};

async function fetchData(url: URL, requestOptions?: RequestOptions) {
	try {
		if (requestOptions) {
			const response = await fetch(url, requestOptions);

			if (!response.ok) {
				throw new NetworkError(`Request failed with status ${response.status}`);
			}

			const data = await response.json();
			return data.price;
		}

		const response = await fetch(url);

		if (!response.ok) {
			throw new NetworkError(`Request failed with status ${response.status}`);
		}

		const data = await response.json();
		return data.venta;
	} catch (error) {
		if (error instanceof NetworkError) {
			console.error('Network Error:', error.message);
			return null;
		} else {
			console.error('Error:', error);
			return null;
		}
	}
}

async function getPrice() {
	const usdPrice = await fetchData(USD_API_BASE_URL);
	const goldPrice = await fetchData(GOLD_API_BASE_URL, requestOptions);

	console.log('USD -->', usdPrice);
	console.log('GOLD -->', goldPrice);

	if (usdPrice === null || goldPrice === null) {
		console.error(
			'Can not get result because of error while gathering data...'
		);
		return;
	}

	const result = goldPrice * usdPrice;
	return console.log(result);
}

getPrice();
