import React from 'react'

const Pagination = () => {
    return (
        <div className='mt-3 d-flex' style={{}}>
        <nav style={{margin: '0 auto'}} aria-label="Page navigation example">
            <ul className="pagination pagination-circle pg-blue">
                <li className="page-item disabled"><button className="page-link">First</button></li>
                <li className="page-item disabled">
                    <button className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </button>
                </li>
                <li className="page-item active"><button className="page-link">1</button></li>
                <li className="page-item"><button className="page-link">2</button></li>
                <li className="page-item"><button className="page-link">3</button></li>
                <li className="page-item"><button className="page-link">4</button></li>
                <li className="page-item"><button className="page-link">5</button></li>
                <li className="page-item">
                    <button className="page-link" aria-label="Next">
                        <span>&raquo;</span>
                        <span className="sr-only">Next</span>
                    </button>
                </li>
                <li className="page-item"><button className="page-link">Last</button></li>
            </ul>
        </nav>
        </div>
    )
}

export default Pagination;
