import React from 'react';

const Notification = ({message, displayType}) => {
    if (message === "") {
        return null
    }

    return (
        <div className={displayType}>
            {message}
        </div>
    )
}

export default Notification