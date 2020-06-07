import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'

const GameCard = ({ game }) => {
	const history = useHistory()

	const handleClick = () => {
		history.push({ pathname: '/game', state: game })
	}

	return (
		<div className="card mb-1">
			<div className="card-body d-flex align-items">
				<div>
					<img
						className="mr-2"
						src={`https:${game.coverUrl}`}
						alt={`${game.slug}-cover`}
					></img>
				</div>
				<div>
					<div className="card-title">{game.name}</div>
					<div className="card-text">{game.summary}</div>
					<div className="card-text mt-2">
						First released at:{' '}
						{game.first_release_date
							? moment.unix(game.first_release_date).format('YYYY-MM-DD')
							: 'Unknown'}
					</div>
				</div>
			</div>
			<div className="card-footer">
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
