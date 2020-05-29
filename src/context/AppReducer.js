export default (state, action) => {
	switch (action.type) {
		case 'USER_LOGIN':
			return {
				user: action.payload
			}
		case 'USER_LOGOUT':
			return {
				user: null
			}
		default:
			return state
	}
}
