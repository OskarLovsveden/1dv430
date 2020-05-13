import axios from 'axios'

const mongoHelper = {
	newList: async () => {
		const response = await axios({
			method: 'post',
			url: 'mongo/list/new'
		})
		return response.data.list
	},
	getLists: async () => {
		const response = await axios('/mongo/lists')
		return response.data
	},
	getList: async id => {
		const response = await axios(`/mongo/list/${id}`)
		return response.data
	},
	saveGame: async (game, listID) => {
		const response = await axios({
			method: 'post',
			url: `/mongo/save/${listID}`,
			data: game
		})
		return response.data
	}
}

export default mongoHelper
