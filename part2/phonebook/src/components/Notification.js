const Notification = ({message}) => {
    if (message === "") {
        console.log("nuasdad")
        return null
    }

    return (
        <div className="displayMessage">
            {message}
        </div>
    )
}

export default Notification