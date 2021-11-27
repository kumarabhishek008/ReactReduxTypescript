import React, { useState } from 'react'

interface Props{
    name?:any,
    age?: number
}


const Header = (props : Props) => {
    const { name } = props;
    console.log(name);
    const [value, setvalue] = useState('Abhishek');
    return (
        <div>
            { value }
            {
                name?.c?.d?.e
            }
        </div>
    ) 
}

export default Header
