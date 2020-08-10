const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, message: 'Hi. How are you?', likesCount: 10},
        {id: 2, message: 'Its my first post', likesCount: 14}
    ],
    newPostText: 'кулхацкер'
}

 const profileReducer = (state = initialState, action) => {

     switch (action.type) {
         case ADD_POST: {
             let newPost = {
                 id: 5,
                 message: state.newPostText,
                 likesCount: 0
             };
             return {
                 ...state,
                 posts: [...state.posts, newPost],
                 newPostText: ''
             };
         }
         case UPDATE_NEW_POST_TEXT: {
             return  {
                 ...state,
                 newPostText: action.newText
             };
         }
         default:
             return state;
     }


}

export const addPostActionCreator = () => {return {type: 'ADD-POST'} }
export const updateNewPostTextActionCreator = (text) => {
    return { type: 'UPDATE-NEW-POST-TEXT' , newText: text }
}

export default profileReducer;
