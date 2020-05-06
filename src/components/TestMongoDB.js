import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TestMongoDB = () => {
	const [testData, setTestData] = useState([])
	const [error, setError] = useState(null)

	const postTestData = async () => {
		try {
			const response = await axios.post('/mongo/test-post')
			setTestData([...testData, response.data])
		} catch (err) {
			const error = err.message
			setError(error)
		}
	}

	const removeAll = () => {
		try {
			axios.post('/mongo/test-remove')
			setTestData([])
		} catch (err) {
			const error = err.message
			setError(error)
		}
	}

	useEffect(() => {
		console.log('useEffect')
		const getTestData = async () => {
			try {
				const response = await axios.get('/mongo/test-get')
				setTestData(response.data)
			} catch (err) {
				const error = err.message
				setError(error)
			}
		}
		getTestData()
	}, [])

	return (
		<div>
			<button onClick={postTestData} className="btn btn-lg secondary-color">
				Create Testdata
			</button>
			<button onClick={removeAll} className="btn btn-lg danger-color">
				Remove Testdata
			</button>
			{testData ? (
				<ul>
					{testData.map(test => (
						<li key={test._id}>{test.testdata}</li>
					))}
				</ul>
			) : (
				<h1>{error}</h1>
			)}
		</div>
	)
}

export default TestMongoDB
