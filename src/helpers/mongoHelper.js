import axios from 'axios'

const mongoHelper = {
	newList: async () => {
		try {
			const response = await axios({
				method: 'post',
				url: 'mongo/list/new'
			})
			return response.data
		} catch (error) {
			console.error(error)
		}
	},
	getLists: async () => {
		try {
			const response = await axios('/mongo/lists')
			return response.data
		} catch (error) {
			console.error(error.message)
		}
	},
	getList: async id => {
		try {
			const response = await axios(`/mongo/list/${id}`)
			return response.data
		} catch (error) {
			console.error(error.message)
		}
	},
	saveGame: async (game, listID) => {
		try {
			const response = await axios({
				method: 'post',
				url: `/mongo/save/${listID}`,
				data: game
			})
			return response.data
		} catch (error) {
			console.error(error)
		}
	},
	login: async (username, password) => {
		try {
			const response = await axios({
				method: 'post',
				url: 'user/login',
				data: {
					username: username,
					password: password
				}
			})
			return response.data
		} catch (error) {
			console.error(error.message)
		}
	}
}

export default mongoHelper
