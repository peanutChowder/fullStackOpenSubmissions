const Searchbar = ({setSearched}) => {
    const handleSearchChange = (event) => {
        setSearched(event.target.value)
    }
    return (
        <div>
            find countries <input onChange={handleSearchChange}></input>
        </div>
    )
}

export default Searchbar