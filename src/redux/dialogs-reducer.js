const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Aleksandr'},
        {id: 2, name: 'Katya'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Olga'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Ho'},
        {id: 3, message: 'Yo'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body } ]
            };
        default: return state;

    }

}

export const sendMessageCreator = () => {return {type: SEND_MESSAGE} }
export const updateNewMessageBodyCreator = (body) => { return {type: UPDATE_NEW_MESSAGE_BODY, body: body }}

export default dialogsReducer;
