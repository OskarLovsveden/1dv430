import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { useHistory, useLocation } from 'react-router-dom'
import DeleteListModal from './DeleteListModal'

import moment from 'moment'
import axios from 'axios'

const List = () => {
	const history = useHistory()
	const location = useLocation()
	const [list, setList] = useState()
	const { user } = useContext(GlobalContext)

	useEffect(() => {
		const getList = async () => {
			const response = await axios(`mongo/list/${location.state}`)
			setList(response.data)
		}
		getList()
	}, [location.state])

	const editList = () => {
		if (list.author === user) {
			history.push({ pathname: '/list-edit', state: list })
		}
	}

	return list ? (
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
							<i className="fas fa-edit"></i>
						</button>
						<DeleteListModal listID={list._id} />
					</>
				)}
			</div>
			<p className="text-muted m-0">Author: {list.author}</p>
			<p className="text-muted m-0">
				Created at: {moment(list.createdAt).format('YYYY-MM-DD')}
			</p>

			<ul className="list-group">
				{list.games.length ? (
					list.games.map(game => (
						<li className="list-group-item" key={game.id}>
							<h5>{game.name}</h5>
							<div>
								<input
									type="checkbox"
									checked={game.collected}
									disabled
								></input>{' '}
								Collected
								<br></br>
								<input
									type="checkbox"
									checked={game.completed}
									disabled
								></input>{' '}
								Completed
							</div>
						</li>
					))
				) : (
					<li className="list-group-item">No games here... :&lt;</li>
				)}
			</ul>
		</div>
	) : (
		<></>
	)
}

export default List
