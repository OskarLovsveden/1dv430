import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Lists = () => {
	const history = useHistory()
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

	const redirectToList = list => {
		history.push({ pathname: '/list', state: list })
	}

	return (
		<div>
			<button onClick={addNewList} className="btn btn-m">
				Add new list
			</button>
			<div className="list-group">
				{lists.length
					? lists.map(list => (
							<button
								type="button"
								className="list-group-item list-group-item-action"
								key={list._id}
								onClick={() => redirectToList(list)}
							>
								{list.name}
							</button>
					  ))
					: null}
			</div>
		</div>
	)
}

export default Lists
