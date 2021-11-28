import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {getTodos} from '../../Store/actions';
import TodoComponent from '../../component/Todo/Todo';

interface Props{
    getTodos?:any,
    todos?:any,
}

const Todos = (props:Props) => {
    props.getTodos('Abhishek');
    console.log(props.todos);
    return (
        <>
         <TodoComponent {...props}/>
        </>
    )
}

const mapStateToProps = (state: any) =>({
    todos : state.todos
})
export default connect(mapStateToProps, {getTodos: getTodos})(Todos)
