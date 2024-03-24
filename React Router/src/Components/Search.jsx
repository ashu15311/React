import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchHandler = (e) => {
        e.preventDefault();
        const data = searchParams.get('q')
        alert(data);
    }
    return (
        <div>
            <form onSubmit={searchHandler} className='src'>
                <label htmlFor="Search"></label>
                <input type="text" placeholder='Search...' onChange={(e) => setSearchParams({ q: e.target.value })} />
                <input type="submit" value="Search" />
                <input type="button" value="Reset" onClick={() => setSearchParams({})} />
            </form>
        </div>
    )
}

export default Search