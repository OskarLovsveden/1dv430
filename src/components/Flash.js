import React from 'react'
import PropTypes from 'prop-types'

const Flash = props => {
	const { type, text } = props
	return (
		<div className={`alert alert-${type}`} role="alert">
			{text}
		</div>
	)
}

Flash.propTypes = {
	props: PropTypes.shape({
		type: PropTypes.string,
		text: PropTypes.string
	}).isRequired
}
