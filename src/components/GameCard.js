import React, { useContext } from 'react'
import { GameContext } from '../context/GameState'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const GameCard = ({ game }) => {
	const { setGame } = useContext(GameContext)
	const history = useHistory()

	const handleClick = () => {
		setGame(game)
		history.push('/game')
	}

	return (
		<div className="card">
			<div className="card-body">
				{game.name}
				<br></br>
				<button className="btn btn-sm" onClick={handleClick}>
					View Game
				</button>
			</div>
		</div>
	)
}

// Proptypes
GameCard.propTypes = {
	game: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired
	}).isRequired
}

// Exports
export default GameCard
