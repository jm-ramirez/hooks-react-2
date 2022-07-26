export const reducerGame = (state = [], action) => {
    switch (action.type) {
        case 'create':
            return [...state, action.payload]

        default:
            return state;
    }
}
