export default (state, action) => {
	switch (action.type) {
		case 'SHOW_FLASH':
			return {
				flash: {
					type: action.payload.type,
					text: action.payload.text,
					visible: true
				}
			}
		case 'HIDE_FLASH':
			return {
				flash: {
					type: '',
					text: '',
					visible: false
				}
			}
		default:
			return state
	}
}
