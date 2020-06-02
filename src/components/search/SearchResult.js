import React from 'react'
import PropTypes from 'prop-types'
import GameCard from './GameCard'

const SearchResult = ({ gameData }) => {
	return (
		<div className="mb-5">
			{gameData &&
				gameData.map(game => <GameCard key={game.id} game={game}></GameCard>)}
		</div>
	)
}

SearchResult.propTypes = {
	gameData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default SearchResult
