import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TestServer = () => {
	const [testData, setTestData] = useState('')
	const [loading, setLoading] = useState()
	const [error, setError] = useState(null)
	const [url] = useState('/test')

	const fetchTestData = async () => {
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

	useEffect(() => {
		fetchTestData()
	}, [])

	if (loading) {
		return <h1>Fetching data...</h1>
	}

	return (
		<div>
			<h1>{url}</h1>
			{error ? <p>{error} | Not a valid url...</p> : <p>{testData}</p>}
		</div>
	)
}

export default TestServer
