import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { FlashContext } from '../../context/FlashState'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Logout = () => {
	const { userLogout } = useContext(GlobalContext)
	const { showFlash } = useContext(FlashContext)
	const history = useHistory()

	const logoutUser = async event => {
		event.preventDefault()
		try {
			const response = await axios({ method: 'post', url: 'user/logout' })
			if (response.data.type === 'success') {
				userLogout()
				showFlash(response.data)
			}
			history.push('/')
		} catch (error) {
			console.error(error.message)
		}
	}

	const doNotLogoutUser = () => {
		history.push('/')
	}

	return (
		<div className="d-flex flex-column justify-content-center p-5">
			<div className="text-center">
				<p className="h4 mb-4">Logout</p>
				<p className="h5 mb-4">Are you sure you want to logout?</p>
				<button className="btn btn-outline-default" onClick={logoutUser}>
					Yes
				</button>
				<button className="btn btn-outline-danger" onClick={doNotLogoutUser}>
					No
				</button>
			</div>
		</div>
	)
}

export default Logout
