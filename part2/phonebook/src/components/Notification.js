const Notification = ({message}) => {
    if (message === "") {
        return null
    }

    return (
        <div className="displayMessage">
            {message}
        </div>
    )
}

export default Notification