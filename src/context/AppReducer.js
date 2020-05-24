export default (state, action) => {
	switch (action.type) {
		case 'USER_LOGIN':
			return {
				...state,
				user: action.payload
			}
		case 'USER_LOGOUT':
			return {
				...state,
				user: ''
			}
		case 'SET_FLASH':
			return {
				...state,
				flash: {
					type: action.payload.type,
					text: action.payload.text
				}
			}
		default:
			return state
	}
}
