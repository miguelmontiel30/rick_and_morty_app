import React, { useEffect } from 'react'


// const getActiveItem = () => {

// }

const PaginationNumbers = ({ no_pages, actual_page }) => {

    let active_item = true;
    let actual_item = true;

    if (actual_page) {
        actual_page = true;
    }

    useEffect(() => {
        // pagination_numbers = getNumbering(no_pages);
        // console.log(pagination_numbers);
        console.log(no_pages);
        console.log(actual_page);
    }, [no_pages, actual_page])

    return (
        <>
            {
                <li className={"page-item " + active_item}>
                    <button className="page-link">
                        {actual_item}
                    </button>
                </li>
            }
        </>
    )
}

export default PaginationNumbers
