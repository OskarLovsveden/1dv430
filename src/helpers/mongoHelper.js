import axios from 'axios'

const mongoHelper = {
	newList: async (req, res, name) => {
		const response = await axios.post('mongo/lists/new', { name: name })
		console.log(response)
	},
	getLists: async (req, res) => {
		const response = await axios('/mongo/lists')
		return response.data
	}
}

export default mongoHelper
