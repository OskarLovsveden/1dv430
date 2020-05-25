import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'

const ListEdit = ({ list }) => {
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

	const saveUpdates = async () => {
		const response = await axios({
			method: 'post',
			url: `/mongo/list/update/${listState._id}`,
			data: listState
		})
		if (response.data.type === 'success') {
			history.push({ pathname: '/lists', state: response.data })
		} else {
			console.log(response.data)
		}
	}

	return (
		<form className="form-inline p-2">
			<input
				type="text"
				className="form-control mb-2 mr-sm-2"
				placeholder="List title..."
				defaultValue={listState.name}
				onChange={handleChange}
			></input>
			{listState.games.map(game => (
				<div key={game.id} className="form-check mb-2 mr-sm-2">
					{game.name}
					<br></br>
					<input
						onChange={handleCheck}
						className="form-check-input"
						type="checkbox"
						id={`collected${game.id}`}
						data-reference={game.id}
						name="collected"
						checked={game.checked}
					></input>
					<label className="form-check-label" htmlFor={`collected${game.id}`}>
						Collected
					</label>
					<br></br>
					<input
						onChange={handleCheck}
						className="form-check-input"
						type="checkbox"
						id={`completed${game.id}`}
						data-reference={game.id}
						name="completed"
						checked={game.completed}
					></input>
					<label className="form-check-label" htmlFor={`completed${game.id}`}>
						Completed
					</label>
				</div>
			))}

			<button
				onClick={saveUpdates}
				type="button"
				className="btn btn-outline-default btn-md mt-0"
			>
				Save List
			</button>
		</form>
	)
}

export default ListEdit
