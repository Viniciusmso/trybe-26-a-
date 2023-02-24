import React from "react";
 
const array = ['My first program in React', 'This list was created with an HOFS']
class list extends React.Component {
    render() {
        return (
            array.map((item) => <li className='item'>{item}</li>)
        )
    }
}

export default list;