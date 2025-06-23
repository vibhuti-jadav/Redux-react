import { ADD_TODO, DELETE_TODO,HANDLE_EDIT,SET_EDIT_TEXT,TOGGLE_EDIT_MODE,UPDATE_STATUS } from "./Action";

export const reducerTodo = (store=[], action ) => {
    switch(action.type)
    {
        case ADD_TODO :
                            let obj = {
                                id: store.length == 0 ? 0 : store[store.length-1].id+1,
                                text:action.payload.to,
                                status:false
                            }
                            store.push(obj)
                            break;
        
        case UPDATE_STATUS :  
                                store = store.map((ele)=> ele.id == action.payload.id ? {...ele, status:!ele.status } : ele)
                                break;

        case DELETE_TODO : 
                            store = store.filter((ele)=> ele.id != action.payload.id)
                            break;
                            
 case TOGGLE_EDIT_MODE:
      return store.map((ele) =>
        ele.id === action.payload.id
          ? { ...ele, isEditing: !ele.isEditing, editText: ele.text }
          : ele
      );

    case SET_EDIT_TEXT:
      return store.map((ele) =>
        ele.id === action.payload.id
          ? { ...ele, editText: action.payload.text }
          : ele
      );

    case HANDLE_EDIT:
      return store.map((ele) =>
        ele.id === action.payload.id
          ? { ...ele, text: ele.editText, isEditing: false, editText: "" }
          : ele
      );

        default : 
                store;
    }

    return [...store]
}