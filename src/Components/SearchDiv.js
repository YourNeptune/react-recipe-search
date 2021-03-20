import 'font-awesome/css/font-awesome.min.css';

const SearchDiv = ({onChange, input, onSubmit}) => {
    return (
        <div className='search'>
            <form onSubmit={onSubmit}>
                <div className='search-bar'>
                    <input type="text" placeholder="&#xF002;  Search" value={input} onChange={onChange}/>
                    <button type='submit'>Search</button>
                </div>
                
            </form>
        </div>
    )
}

export default SearchDiv
