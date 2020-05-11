import axios from 'axios'

const mongoHelper = {
	newList: async () => {
		const response = await axios.post('mongo/lists/new')
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
	saveGame: async (id, name) => {
		const response = await axios()
		return response.data
	}
}

export default mongoHelper
