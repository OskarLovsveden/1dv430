import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Apicalypse
import apicalypseHelpers from '../apicalypseHelpers'

const SearchBar = ({ submit, placeholder }) => {
	const [input, setInput] = useState(null)

	const onSubmitForm = async event => {
		event.preventDefault()
		const data = await apicalypseHelpers.getGames(input)
		console.log(data)
		// console.log(event.target)
		// console.log('Submitting Input: ', input)
		// submit(input)
	}

	const onWriteInput = event => {
		console.log('Writing Input: ', event.target.value)
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
	submit: PropTypes.func,
	placeholder: PropTypes.string
}

// Exports
export default SearchBar
