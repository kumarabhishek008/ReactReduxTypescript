
const initialState = {
    todo : null
}

interface reducerData{
    type ?: any,
    payload ?: any
}

const TodoReducer = (state:any = initialState, {type, payload}:reducerData) => {
    switch (type) {
        case 'app/todos/all' :{
            console.log(payload);
            initialState.todo = payload;
            break;
        }
        case 'app/settodos/all' :{
            break;
        }
        default : {
            break;
        }
    }
    return initialState;
}
export default TodoReducer;