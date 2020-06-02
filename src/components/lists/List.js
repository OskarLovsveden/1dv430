import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { useHistory, useLocation } from 'react-router-dom'
import DeleteListModal from './DeleteListModal'

import moment from 'moment'

const List = () => {
	const history = useHistory()
	const location = useLocation()
	const [list] = useState(location.state)
	const { user } = useContext(GlobalContext)

	const editList = () => {
		if (list.author === user) {
			history.push({ pathname: '/list-edit', state: list })
		}
	}

	return (
		list && (
			<div className="p-2">
				<div>
					<span className="h4">{list.name}</span>
					{list.author === user && (
						<>
							<button
								onClick={editList}
								className="btn btn-sm btn-outline-default float-right"
								type="button"
							>
								<i className="fas fa-cog"></i>
							</button>
							<DeleteListModal listID={list._id} />
						</>
					)}
				</div>
				<p className="text-muted">
					Created at: {moment(list.createdAt).format('YYYY-MM-DD')}
				</p>

				<ul className="list-group">
					{list.games.length ? (
						list.games.map(game => (
							<li className="list-group-item" key={game.id}>
								<span className="h5">{game.name}</span>
								<br></br>
								<input type="checkbox" checked={game.checked} disabled></input>
								Collected
								<br></br>
								<input
									type="checkbox"
									checked={game.completed}
									disabled
								></input>
								Completed
							</li>
						))
					) : (
						<li className="list-group-item">No games here... :&lt;</li>
					)}
				</ul>
			</div>
		)
	)
}

export default List
