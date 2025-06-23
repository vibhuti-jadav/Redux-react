
export const ADD_TODO = "ADD_TODO"
export const UPDATE_STATUS = "UPDATE_STATUS"
export const DELETE_TODO = "DELETE_TODO"
export const HANDLE_EDIT = "HANDLE_EDIT";
export const TOGGLE_EDIT_MODE = "TOGGLE_EDIT_MODE";
export const SET_EDIT_TEXT = "SET_EDIT_TEXT";



export function handleAdd(to){
    return {
        type:ADD_TODO,
        payload:{
            to,
        }
    }
}

export function handleStatus(id){
    return {
        type:UPDATE_STATUS,
        payload:{
            id
        }
    }
}

export function handleDelete(id){
    return {
        type:DELETE_TODO,
        payload:{
            id
        }
    }
}


export const toggleEditMode = (id) => ({
    type: TOGGLE_EDIT_MODE,
    payload: { id },
});

export const setEditText = (id, text) => ({
    type: SET_EDIT_TEXT,
    payload: { id, text },
});

export const handleEdit = (id) => ({
    type: HANDLE_EDIT,
    payload: { id },
});