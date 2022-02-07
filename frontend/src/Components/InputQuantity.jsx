import React from 'react';

const InputQuantity = ({id}) => {
    let ref = React.createRef(id)
    return <input ref={ref} type='text' style={{width: '30px', textAlign: 'center', margin: '3px'}} value={1} disabled></input>
};

export default InputQuantity;