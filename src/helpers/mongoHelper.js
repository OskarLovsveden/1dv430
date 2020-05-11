import axios from 'axios'

const mongoHelper = {
	newList: async (req, res) => {
		const response = await axios.post('mongo/lists/new')
		console.log(response)
	},
	getLists: async (req, res) => {
		const response = await axios('/mongo/lists')
		return response.data
	},
	getList: async id => {
		const response = await axios(`/mongo/list/${id}`)
		return response.data
	}
}

export default mongoHelper
