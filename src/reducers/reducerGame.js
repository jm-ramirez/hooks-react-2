export const reducerGame = (state = [], action) => {
    switch (action.type) {
        case 'create':
            return [...state, action.payload];

        case 'delete':
            return state.filter(game => game.id !== action.payload);

        default:
            return state;
    }
}
