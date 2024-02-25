import './searchResults.scss';

export default function SearchResults({ children }) {
    return (
        <ul className='search-results'>
            {children}
        </ul>
    )
}
