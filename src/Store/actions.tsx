export const getTodos = (data:any) =>({
    type : 'app/todos/all',
    payload : data
})
export const setTodos = (data:any) =>({
    type : 'app/settodos/all',
    payload : data
})