import React, { useState } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'

const SearchBar = ({ data, loading, placeholder }) => {
	const [input, setInput] = useState(null)

	const onSubmitForm = async event => {
		event.preventDefault()
		loading(true)
		try {
			const response = await axios(`/igdb/games/${input}`)
			loading(false)
			data(response.data)
		} catch (error) {
			console.error(error.message)
			loading(false)
		}
	}

	const onWriteInput = event => {
		setInput(event.target.value)
	}

	const handleKeypress = event => {
		if (event.key === 'Enter') {
			event.target.value = ''
		}
	}

	return (
		<form onSubmit={onSubmitForm}>
			<input
				type="text"
				onKeyPress={handleKeypress}
				onChange={onWriteInput}
				placeholder={placeholder}
			></input>
		</form>
	)
}

// Proptypes
SearchBar.propTypes = {
	data: PropTypes.func.isRequired,
	loading: PropTypes.func.isRequired,
	placeholder: PropTypes.string
}

// Exports
export default SearchBar
