import React from 'react'
import GameCard from './GameCard'

const SearchResult = ({ gameData }) => {
	return (
		<div>
			{gameData
				? gameData.map(game => <GameCard key={game.id} game={game}></GameCard>)
				: null}
		</div>
	)
}

export default SearchResult
