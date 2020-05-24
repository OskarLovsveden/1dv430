import React, { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import moment from 'moment'

const List = () => {
	const { id } = useParams()
	const { user } = useContext(GlobalContext)

	const [list, setList] = useState(null)
	const [editable, isEditable] = useState(false)

	useEffect(() => {
		const getListOnRender = async () => {
			try {
				const response = await axios(`/mongo/list/${id}`)
				const data = response.data
				setList(data)
				isEditable(data.author === user)
			} catch (error) {
				console.error(error.message)
			}
		}
		getListOnRender()
	}, [id, user])

	return (
		list && (
			<div>
				<h5>{list.name}</h5>
				<p className="text-muted">
					Created at: {moment(list.createdAt).format('YYYY-MM-DD')}
				</p>
				<ul className="list-group">
					{list.games.length ? (
						list.games.map(game => (
							<li className="list-group-item" key={game.id}>
								{game.name}
								{editable && (
									<>
										<button className="btn btn-sm mr2">Edit</button>
										<button className="btn btn-sm mr2">Delete</button>
									</>
								)}
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
