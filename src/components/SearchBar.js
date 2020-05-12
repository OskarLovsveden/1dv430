import React, { useState } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'

const SearchBar = ({ value, loading, placeholder }) => {
	const [input, setInput] = useState(null)

	const handleSubmit = async event => {
		event.preventDefault()
		loading(true)
		try {
			const response = await axios(`/igdb/games/${input}`)
			loading(false)
			value(response.data)
		} catch (error) {
			console.error(error.message)
			loading(false)
		}
	}

	const handleChange = event => {
		setInput(event.target.value)
	}

	const handleKeypress = event => {
		if (event.key === 'Enter') {
			event.target.value = ''
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onKeyPress={handleKeypress}
				onChange={handleChange}
				placeholder={placeholder}
			></input>
		</form>
	)
}

// Proptypes
SearchBar.propTypes = {
	value: PropTypes.func.isRequired,
	loading: PropTypes.func.isRequired,
	placeholder: PropTypes.string
}

// Exports
export default SearchBar
