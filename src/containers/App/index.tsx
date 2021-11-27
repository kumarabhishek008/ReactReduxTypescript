import React from 'react';
import Todos from '../Todos';

interface Props{

}

const App = (props:Props) => {
    return (
        <div>
            <Todos {...props}/>
        </div>
    )
}

export default App
