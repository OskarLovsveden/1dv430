import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import { Redirect } from 'react-router-dom'
import { GameContext } from '../context/GameState'
import axios from 'axios'

const Game = () => {
	const [lists, setLists] = useState([])
	const [selectedOption, setSelectedOption] = useState()
	const { game } = useContext(GameContext)

	useEffect(() => {
		const getListsOnRender = async () => {
			try {
				const response = await axios('/mongo/lists')
				const data = response.data
				setLists(data)
			} catch (error) {
				console.error(error.message)
			}
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
			const listID = selectedOption.value
			try {
				const response = await axios({
					method: 'post',
					url: `/mongo/save/${listID}`,
					data: game
				})
				console.log(response.data)
			} catch (error) {
				console.error(error)
			}
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
