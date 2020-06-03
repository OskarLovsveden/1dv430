import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const GameCard = ({ game }) => {
	const history = useHistory()

	const handleClick = () => {
		history.push({ pathname: '/game', state: game })
	}

	return (
		<div className="card mb-1">
			<div className="card-body">
				{game.name}
				<br></br>
				<button
					className="btn btn-sm btn-outline-default"
					onClick={handleClick}
				>
					View Game
				</button>
			</div>
		</div>
	)
}

GameCard.propTypes = {
	game: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired
	}).isRequired
}

export default GameCard
