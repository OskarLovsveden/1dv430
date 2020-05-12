import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { GameContext } from '../context/GameState'

import mongoHelper from '../helpers/mongoHelper'
const { getLists } = mongoHelper

const Game = () => {
	const [lists, setLists] = useState([])
	const { game } = useContext(GameContext)

	useEffect(() => {
		const getListsOnRender = async () => {
			const listsData = await getLists()
			setLists(listsData)
		}
		getListsOnRender()
	}, [])

	if (!game) {
		return <Redirect to="/"></Redirect>
	}

	return (
		<div>
			{game.name}
			<button>Add To List</button>
		</div>
	)
}

export default Game
