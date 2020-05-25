import React, { useState } from 'react'

const ListEdit = ({ list }) => {
	const [listState, updateListState] = useState(list)

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

	const saveUpdates = () => {
		console.log(listState)
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
					></input>
					<label className="form-check-label" htmlFor={`completed${game.id}`}>
						Completed
					</label>
				</div>
			))}

			<button
				onClick={saveUpdates}
				type="button"
				className="btn btn-primary btn-md mt-0"
			>
				Save List
			</button>
		</form>
	)
}

export default ListEdit
