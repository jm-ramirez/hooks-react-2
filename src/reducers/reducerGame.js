export const reducerGame = (state = [], action) => {
    switch (action.type) {
        case 'create':
            return [...state, action.payload];

        case 'delete':
            return state.filter(game => game.id !== action.payload);

        case 'edit':
            let index = state.findIndex(game => game.id === action.payload.id);
            state[index] = action.payload;
            return [...state];

        default:
            return state;
    }
}
