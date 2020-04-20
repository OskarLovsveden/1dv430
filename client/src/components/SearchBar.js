import React, { useState } from 'react'
// import PropTypes from 'prop-types'

const SearchBar = ({ submit, placeholder }) => {
	const [state, setState] = useState()

	const onSubmit = event => {
		event.preventDefault()

		console.log('Submitting Input: ', state.input)
		submit(state.input)
	}

	const onWrite = event => {
		console.log('Writing Input: ', event.target.value)
		setState({ input: event.target.value })
	}

	return (
		<form onSubmit={onSubmit}>
			<input type="text" onChange={onWrite} placeholder={placeholder}></input>
		</form>
	)
}

export default SearchBar
