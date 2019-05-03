import {ADD_SEARCHED} from "../actions/types"

const INITIAL_STATE: {searchResults: []} = {
    searchResults: []
}

const reducer = (state=INITIAL_STATE, action: any) => {
    switch(action.type) {
        case ADD_SEARCHED:
            return action.payload
        default:
            return state
    }
};

export default reducer
