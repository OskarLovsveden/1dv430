import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import moment from 'moment'

const List = () => {
	const [name, setName] = useState('')
	const [games, setGames] = useState([])
	const [createdAt, setCreatedAt] = useState('')

	const { id } = useParams()

	useEffect(() => {
		const getListOnRender = async () => {
			try {
				const response = await axios(`/mongo/list/${id}`)
				const data = response.data
				setName(data.name)
				setGames(data.games)
				setCreatedAt(moment(data.createdAt).format('YYYY-MM-DD'))
			} catch (error) {
				console.error(error.message)
			}
		}
		getListOnRender()
	}, [id])

	return (
		<div>
			<h5>Name: {name}</h5>
			<h5>Created at: {createdAt}</h5>
			<hr></hr>
			<h5>Spel:</h5>
			<ul>
				{games.length ? (
					games.map(game => <li key={game.id}>{game.name}</li>)
				) : (
					<li>Du har inte lagt till några spel ännu... :&lt;</li>
				)}
			</ul>
		</div>
	)
}

export default List
