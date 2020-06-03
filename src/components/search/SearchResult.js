import React from 'react'
import PropTypes from 'prop-types'
import GameCard from './GameCard'

const SearchResult = ({ gameData }) => {
	return (
		<>
			{gameData &&
				gameData.map(game => <GameCard key={game.id} game={game}></GameCard>)}
		</>
	)
}

SearchResult.propTypes = {
	gameData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default SearchResult
