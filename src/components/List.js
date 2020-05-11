import moment from 'moment'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import mongoHelper from '../helpers/mongoHelper'
const { getList } = mongoHelper

const List = () => {
	const [name, setName] = useState('')
	// const [ID, setID] = useState('')
	const [games, setGames] = useState([])
	const [createdAt, setCreatedAt] = useState('')

	const { id } = useParams()

	useEffect(() => {
		const getListOnRender = async () => {
			const list = await getList(id)
			setName(list.name)
			// setID(list._id)
			setGames(list.gamesArray)
			setCreatedAt(moment(list.createdAt).format('YYYY-MM-DD'))
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
					games.map(game => <li>{game.name}</li>)
				) : (
					<li>Du har inte lagt till några spel ännu... :&lt;</li>
				)}
			</ul>
		</div>
	)
}

export default List
