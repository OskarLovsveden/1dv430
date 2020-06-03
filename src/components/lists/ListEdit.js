import React, { useState, useContext } from 'react'
import { FlashContext } from '../../context/FlashState'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'

const ListEdit = () => {
	const { showFlash } = useContext(FlashContext)
	const history = useHistory()
	const location = useLocation()
	const [listState, updateListState] = useState(location.state)

	const handleChange = event => {
		updateListState({
			...listState,
			name: event.target.value
		})
	}

	const handleCheck = event => {
		updateListState({
			...listState,
			games: listState.games.map(game =>
				game.id === parseInt(event.target.dataset.reference, 10)
					? { ...game, [event.target.name]: event.target.checked }
					: game
			)
		})
	}

	const handleClick = async event => {
		updateListState({
			...listState,
			games: [
				...listState.games.filter(game => game.name !== event.target.name)
			]
		})
	}

	const saveUpdates = async () => {
		const response = await axios({
			method: 'post',
			url: `/mongo/list/update/${listState._id}`,
			data: listState
		})
		if (response.data.type === 'success') {
			history.push({ pathname: '/list', state: listState._id })
			showFlash(response.data)
		} else {
			showFlash(response.data)
		}
	}

	return (
		<div className="p-2">
			<h5>Enter list name:</h5>
			<input
				type="text"
				className="form-control mb-2 mr-sm-2"
				placeholder="List title..."
				defaultValue={listState.name}
				onChange={handleChange}
			></input>
			<hr></hr>
			<ul className="list-group mb-2">
				{listState.games.map(game => (
					<li className="list-group-item" key={game.id}>
						<h5>{game.name}</h5>
						<button
							name={game.name}
							onClick={handleClick}
							className="btn btn-sm btn-outline-danger float-right"
						>
							Delete
						</button>
						<div>
							<input
								onChange={handleCheck}
								type="checkbox"
								id={`collected${game.id}`}
								data-reference={game.id}
								name="collected"
								defaultChecked={game.collected}
							></input>{' '}
							Collected
							<br></br>
							<input
								onChange={handleCheck}
								type="checkbox"
								id={`completed${game.id}`}
								data-reference={game.id}
								name="completed"
								defaultChecked={game.completed}
							></input>{' '}
							Completed
						</div>
					</li>
				))}
			</ul>
			<button
				onClick={saveUpdates}
				type="button"
				className="btn btn-outline-default btn-md mt-0"
			>
				Save
			</button>
		</div>
	)
}

export default ListEdit
