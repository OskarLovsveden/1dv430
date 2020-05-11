import React from 'react'
import PropTypes from 'prop-types'

const GameCard = ({ gameID, gameName }) => {
	return (
		<div className="card">
			<div className="card-body">
				<button className="btn btn-sm">Add Game</button>
				{gameName}
			</div>
		</div>
	)
}

GameCard.propTypes = {
	gameID: PropTypes.number.isRequired,
	gameName: PropTypes.string.isRequired
}

export default GameCard
