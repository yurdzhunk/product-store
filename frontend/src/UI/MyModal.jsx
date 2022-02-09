import React from 'react';
import classes from '../styles/MyModal.modules.css'

const MyModal = ({children, setVisible}) => {
    return (
        <div className={classes.myModal} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;