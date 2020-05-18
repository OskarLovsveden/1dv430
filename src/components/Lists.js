import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Lists = () => {
	const [lists, setLists] = useState([])

	useEffect(() => {
		const getListsOnRender = async () => {
			try {
				const response = await axios('/mongo/lists')
				setLists(response.data)
			} catch (error) {
				console.error(error.message)
			}
		}
		getListsOnRender()
	}, [])

	const addNewList = async () => {
		try {
			const response = await axios({
				method: 'post',
				url: 'mongo/list/new'
			})
			const data = response.data
			setLists([...lists, data.list])
		} catch (error) {
			console.error(error.message)
		}
	}

	return (
		<div>
			<button onClick={addNewList} className="btn btn-sm">
				Add new list
			</button>
			<ul>
				{lists.length
					? lists.map(list => (
							<li key={list._id}>
								<a href={`/list/${list._id}`}>{list.name}</a>
							</li>
					  ))
					: null}
			</ul>
		</div>
	)
}

export default Lists
