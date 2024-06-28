import React from 'react';
import './PaginationPage.css';

function Pagination() {
    return (
        <div className='pagination-container'>
            {/* Add your circle buttons here */}
            <button className='circle-button'>1</button>
            <button className='circle-button'>2</button>
            <button className='circle-button'>3</button>
            {/* Add more buttons if needed for additional pages */}
        </div>
    );
}

export default Pagination;
