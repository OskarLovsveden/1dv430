import React, { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { FlashContext } from '../../context/FlashState'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Lists = () => {
	const history = useHistory()
	const { user } = useContext(GlobalContext)
	const { showFlash } = useContext(FlashContext)
	const [lists, setLists] = useState([])

	useEffect(() => {
		const getListsOnRender = async () => {
			try {
				const response = await axios(`/mongo/lists/${user}`)
				setLists(response.data)
			} catch (error) {
				console.error(error.message)
			}
		}
		getListsOnRender()
	}, [user])

	const addNewList = async () => {
		try {
			const response = await axios({
				method: 'post',
				url: 'mongo/list/new'
			})
			if (response.data.message.type === 'success') {
				setLists([...lists, response.data.list])
			}
			showFlash(response.data.message)
		} catch (error) {
			console.error(error.message)
		}
	}

	const redirectToList = list => {
		history.push({ pathname: '/list', state: list._id })
	}

	return user ? (
		<div>
			<button onClick={addNewList} className="btn btn-m btn-outline-default">
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
	) : (
		<div className="text-center mt-5">
			<h3>Login to view your lists</h3>
			<button
				onClick={() => history.push('/login')}
				className="btn btn-lg btn-outline-default"
			>
				Login
			</button>
		</div>
	)
}

export default Lists
