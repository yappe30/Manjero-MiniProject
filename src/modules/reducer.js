import * as actions from "./actionType";

const initState = {
    playerData: [],
}

export const reducer = (state = initState, action) => {
    
    switch (action.type) {
        case actions.GET_PLAYER_DATA:
            return { ...state, playerData: action.payload.httpResponse }
        default:
            return state
    }
}

export default reducer;