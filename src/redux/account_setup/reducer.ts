import * as actions from "./actions";

const initialState: UserState = {
    user: null
}

const reducer = (state: UserState = initialState, action: UserAction) => {
    switch (action.type) {
        case actions.ADD_USER:
            return {
                user: action.user
            }
    }
    return state;
}

export default reducer;