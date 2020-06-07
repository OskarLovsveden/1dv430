import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useHistory } from 'react-router-dom'

const Home = () => {
	const history = useHistory()
	const { user } = useContext(GlobalContext)

	return (
		<div className="w-responsive m-auto text-center">
			<h1 className="text-default mt-2">Mint</h1>
			<div className="row row-cols-1 row-cols-md-2 mt-2">
				{!user ? (
					<div className="card m-auto" style={{ maxWidth: '20rem' }}>
						<div className="card-body">
							<h3 className="card-title">Get Started!</h3>
							<p className="card-text text-default">
								Click a button to log into your account or register a new one!
							</p>
							<h5>Happy collecting!</h5>
							<button
								onClick={() => history.push('/login')}
								type="button"
								className="btn btn-outline-default btn-md"
							>
								Login
							</button>
							<button
								onClick={() => history.push('/register')}
								type="button"
								className="btn  btn-outline-default btn-md"
							>
								Register
							</button>
						</div>
					</div>
				) : (
					<div className="card m-auto" style={{ maxWidth: '20rem' }}>
						<div className="card-body">
							<h3 className="card-title">Welcome {user}!</h3>
							<p className="card-text text-default">
								Click a button below to start searching for games or to create a
								list!
							</p>
							<h5>Happy collecting!</h5>
							<button
								onClick={() => history.push('/search')}
								type="button"
								className="btn btn-outline-default btn-md"
							>
								Search
							</button>
							<button
								onClick={() => history.push('/lists')}
								type="button"
								className="btn btn-outline-default btn-md"
							>
								Lists
							</button>
						</div>
					</div>
				)}
			</div>
			<h3 className="mt-3">About</h3>
			<h5 className="mx-3">
				<span className="text-default">Mint</span> is an application for anyone
				who has played a game and likes to be organized. Whether it's a video
				game, a computer game or a game on your mobile, this app lets you
				catalog your gaming experience. Create a list for games you have in your
				collection, games you have yet to play, games you wish for getting your
				hands on. The choice is yours!
			</h5>
			<h3 className="mt-3">Background</h3>
			<h5>
				The name <span className="text-default">Mint</span> comes from the
				expression "<span className="text-default">Mint</span> condition". This
				is an expression used to denote the quality of a pre-owned good as
				displaying virtually no imperfections and being in pristine condition
				relative to its original production state. Originally, the phrase
				related to the way collectors described the condition of coins. As the
				name given to a coin factory is a "
				<span className="text-default">mint</span>", then{' '}
				<span className="text-default">mint</span> condition is the condition a
				coin is in when it leaves the <span className="text-default">mint</span>
				.
			</h5>
		</div>
	)
}

export default Home
