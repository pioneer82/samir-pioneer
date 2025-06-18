const initialState = {
    language: 'English',
};

export default function languageReducer(state = initialState, action) {
    switch (action.type) {
        case 'LANGUAGECHANGE':
            return {
                ...state,
                language: action.payload.currentLanguage === 'English' ? 'Japanese' : 'English',
            };
        default:
            return state;
    }
}