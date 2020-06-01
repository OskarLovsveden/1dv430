import React, { useEffect, useState, useContext } from 'react'
import { FlashContext } from '../context/FlashState'
import Select from 'react-select'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'

const Game = () => {
	const { showFlash } = useContext(FlashContext)
	const history = useHistory()
	const location = useLocation()
	const [game] = useState(location.state)
	const [lists, setLists] = useState([])
	const [selectedOption, setSelectedOption] = useState()

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

	if (!game) history.push('/')

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
				showFlash(response.data)
			} catch (error) {
				console.error(error)
			}
		}
	}

	const options = lists.map(list => {
		return {
			value: list._id,
			label: list.name
		}
	})

	return (
		<div className="p-2">
			{location.state && console.log(location.state)}
			{game.name}
			<Select
				placeholder="Select list..."
				value={selectedOption}
				onChange={handleChange}
				options={options}
			/>
			<button className="btn btn-outline-default" onClick={handleClick}>
				Add game to list
			</button>
		</div>
	)
}

export default Game
