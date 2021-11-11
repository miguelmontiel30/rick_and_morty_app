import React, { useEffect } from 'react';
// import PaginationNumbers from './PaginationNumbers';

const enablePrev = (prev_exists) => {
    if (prev_exists != null) {
        return '';
    } else {
        return 'disabled';
    }
}

const enableNext = (next_exists) => {
    if (next_exists != null) {
        return '';
    } else {
        return 'disabled';
    }
}

// const getNumbering = (no_pages) => {
//     let pageNumbers = [];
//     for (let index = 0; index < no_pages; index++) {
//         pageNumbers.push(index + 1)
//     }
//     return pageNumbers;
// }

const Pagination = ({ paginationInfo, setUrl_page }) => {

    // let enable_prev = 'disabled';

    // BUTTONS TO ENABLE PREV AND NEXT ITEMS
    let enable_prev = enablePrev(paginationInfo.prev);
    let enable_next = enableNext(paginationInfo.next);

    // let pageNumbers = [];
    // let no_pages = 1;

    // for (let index = 0; index < paginationInfo.pages; index++) {
    //     pageNumbers.push(index + 1)
    // }

    // let actual_page = '';
    // pageNumbers = getNumbering(paginationInfo.pages);
    
    enable_prev = (paginationInfo.prev == null) ? 'disabled' : '';
    enable_next = (paginationInfo.next == null) ? 'disabled' : '';

    useEffect(() => {
        // actual_page = paginationInfo.next;
        // actual_page = actual_page.slice(-1);
        console.log(paginationInfo.next);
        // console.log(pageNumbers);

    }, [paginationInfo])

    return (
        <div className='mt-3 d-flex' style={{}}>
            <nav style={{ margin: '0 auto' }} aria-label="Page navigation example">
                <ul className="pagination pagination-circle pg-blue">

                    {/* FIRST AND PREVIOUS ITEMS */}
                    {/* <li className={"page-item " + enable_prev}>
                        <button className="page-link">First</button>
                    </li> */}
                    <li className={"page-item " + enable_prev}>
                        <button
                            className="page-link"
                            onClick={() => setUrl_page(paginationInfo.prev)}
                            aria-label="Previous">
                            <span aria-hidden="true">&laquo; Previous</span>
                            <span className="sr-only">Previous</span>
                        </button>
                    </li>


                    {/* MOSTRAMOS EL NUMERO DE PAGINAS */}
                    {
                        // pageNumbers.map((value, index) => {
                        //     return <PaginationNumbers no_page={index} actual_page={value} />
                        // })
                    }


                    {/* NEXT AND LAST ITEMS */}
                    <li className={"page-item " + enable_next}>
                        <button className="page-link"
                            onClick={() => setUrl_page(paginationInfo.next)}
                            aria-label="Next">
                            <span>Next &raquo;</span>
                            <span className="sr-only">Next</span>
                        </button>
                    </li>
                    {/* <li className={"page-item " + enable_next}>
                        <button className="page-link">Last</button>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;
