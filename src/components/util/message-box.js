import React, {useEffect, useState} from 'react';
import {Button} from "reactstrap";

const MessageBox = (props) => {

    useEffect(() => {
        if (props.errorDialogData) {
            setErrorDialogData(Object.assign({}, props.errorDialogData));
        } else {
            props.toggle();
        }
    }, []);

    const [errorDialogData, setErrorDialogData] = useState({
        title: '',
        message: '',
    });

    const handleClick = () => {
        props.toggle();
    };

    return (
        <div className="ts-modal-error">
            <div className="ts-modal-error-content">
                <h4>{errorDialogData.title}</h4>
                <p>{errorDialogData.message}</p>
                <div className={"action-buttons"}>
                <Button color="secondary" onClick={handleClick}>Ок</Button>
                </div>
            </div>
        </div>
    );

}

export default MessageBox;