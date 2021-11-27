import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {getTodos} from '../../Store/actions'

interface Props{
    getTodos?:any,
    todos?:any,
}

const Todos = (props:Props) => {
    props.getTodos('Abhishek');
    console.log(props.todos);
    return (
        <div>
            HI this is my app
        </div>
    )
}

const mapStateToProps = (state: any) =>({
    todos : state.todos
})
export default connect(mapStateToProps, {getTodos: getTodos})(Todos)
