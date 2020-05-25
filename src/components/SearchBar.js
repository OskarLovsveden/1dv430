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
		<div className="d-flex flex-row p-2 justify-content-center">
			<form className="form-inline" onSubmit={handleSubmit}>
				<input
					className="form-control"
					type="text"
					onKeyPress={handleKeypress}
					onChange={handleChange}
					placeholder={placeholder}
				></input>
				<button type="submit" className="btn btn-sm btn-outline-primary">
					Search
				</button>
			</form>
		</div>
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
