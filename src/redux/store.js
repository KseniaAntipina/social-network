import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi. How are you?', likesCount: 10},
                {id: 2, message: 'Its my first post', likesCount: 14}
            ],
            newPostText: 'балблабла'
        },
        dialogsPage: {
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
        },
    },
    getState () {
        return this._state;
    },
    _callSubscriber() {
        console.log('state change')
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}


export default store;