import React, { useState /*useEffect*/ } from 'react'
import axios from 'axios'

const TestIGDB = () => {
	const [testData, setTestData] = useState('')
	const [loading, setLoading] = useState()
	const [error, setError] = useState(null)
	const [url] = useState('/igdb/test')

	const getTestData = async () => {
		setLoading(true)
		try {
			const response = await axios.get(url)
			setTestData(response.data)
			setLoading(false)
		} catch (err) {
			const error = err.message
			setError(error)
			setLoading(false)
		}
	}

	// useEffect(() => {
	// 	getTestData()
	// }, [url])

	// if (loading) {
	// 	return (
	// 		<div className="spinner-border" role="status">
	// 			<span className="sr-only">Loading...</span>
	// 		</div>
	// 	)
	// }

	return (
		<div className="text-center">
			<button onClick={getTestData} className="btn btn-lg secondary-color">
				{url}
			</button>
			<span>
				{loading ? (
					<span>
						<span className="spinner-border" role="status">
							<span className="sr-only">Loading...</span>
						</span>
					</span>
				) : (
					<span>Press button to ping IGDB!</span>
				)}
			</span>
			<p>
				{error ? (
					<span>Data: {error} | Not a valid url...</span>
				) : (
					<span>Data: {testData}</span>
				)}
			</p>
		</div>
	)
}

export default TestIGDB
