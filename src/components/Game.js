import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import { Redirect } from 'react-router-dom'
import { GameContext } from '../context/GameState'

import mongoHelper from '../helpers/mongoHelper'
const { getLists, saveGame } = mongoHelper

const Game = () => {
	const [lists, setLists] = useState([])
	const [selectedOption, setSelectedOption] = useState()
	const { game } = useContext(GameContext)

	useEffect(() => {
		const getListsOnRender = async () => {
			const listsData = await getLists()
			setLists(listsData)
		}
		getListsOnRender()
	}, [])

	const options = lists.map(list => {
		return {
			value: list._id,
			label: list.name
		}
	})

	if (!game) {
		return <Redirect to="/"></Redirect>
	}

	const handleChange = selectedOption => {
		setSelectedOption(selectedOption)
	}

	const handleClick = async () => {
		if (selectedOption) {
			const response = await saveGame(game, selectedOption.value)
			console.log(response)
		}
	}

	return (
		<div>
			{game.name}
			<Select
				placeholder="Select list..."
				value={selectedOption}
				onChange={handleChange}
				options={options}
			/>
			<button className="btn" onClick={handleClick}>
				Add game to list
			</button>
		</div>
	)
}

export default Game
