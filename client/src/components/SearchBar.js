import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Apicalypse
import apicalypseHelpers from '../apicalypseHelpers'

const SearchBar = ({ passUp, placeholder }) => {
	const [input, setInput] = useState(null)

	const onSubmitForm = async event => {
		event.preventDefault()
		const data = await apicalypseHelpers.getGames(input)
		passUp(data)
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
	passUp: PropTypes.func.isRequired,
	placeholder: PropTypes.string
}

// Exports
export default SearchBar
