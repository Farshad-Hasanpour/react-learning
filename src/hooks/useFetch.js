import {useEffect, useState} from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const controller = new AbortController();

		/* simulate api */
		setTimeout(function(){
			fetch(url, {signal: controller.signal }).then(response => {
				if(!response.ok){
					throw Error('could not fetch the data for that resource.');
				}
				return response.json()
			}).then(data => {
				setIsFetching(false);
				setError('');
				setData(data);
			}).catch(error => {
				// if fetch is not aborted
				if(error && error.name !== 'AbortError'){
					setIsFetching(false);
					setError(error.message);
				}
			})
		},1000);

		return function cleanup(){
			// abort fetch
			controller.abort();
		};
	}, [url]);

	return {
		state: [data, setData],
		isFetching,
		error
	};
};

export default useFetch;