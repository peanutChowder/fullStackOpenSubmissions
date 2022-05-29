const Filter = ({
        setSearchTerm,
        searchTerm
        }) => {
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            filter shown with <input value={searchTerm} onChange={handleSearchChange}></input>
        </div>
    )
}

export default Filter