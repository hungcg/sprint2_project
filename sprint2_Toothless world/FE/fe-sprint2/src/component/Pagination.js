import React, {useState, useEffect} from 'react';
import "../css/pagination.css"

const Pagination = ({page, totalPages, onPageChange}) => {
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        createPagination();
    }, [page, totalPages, onPageChange]);

    const createPagination = () => {
        const tempPagination = [];


        tempPagination.push(
            <button className="btn  btn-outline-secondary "
                    key="prev"
                    disabled={page <= 0}
                    onClick={() => onPageChange(page - 1)}>
                &laquo;
            </button>
        );

        tempPagination.push(
            <button className={`btn  btn-outline-secondary  ${page === 0 ? "active" : ""}`} key={0}
                    onClick={() => onPageChange(0)}>
                1
            </button>
        );

        if (totalPages <= 7||!totalPages) {
            for (let i = 1; i <= totalPages - 2; i++) {
                tempPagination.push(
                    <button className={`btn  btn-outline-secondary  ${page === i ? "active" : ""}`} key={i}
                            onClick={() => onPageChange(i)}>
                        {i + 1}
                    </button>
                );
            }
        } else {
            if (page <= 2) {
                for (let i = 1; i <= 4; i++) {
                    tempPagination.push(
                        <button className={`btn  btn-outline-secondary  ${page === i ? "active" : ""}`}
                                key={i} onClick={() => onPageChange(i)}>
                            {i + 1}
                        </button>
                    );
                }
                tempPagination.push(<span className="btn  btn-outline-secondary " key="ellipsis2">...</span>);
            } else if (page <= totalPages - 5) {
                tempPagination.push(<span className="btn  btn-outline-secondary " key="ellipsis1">...</span>);
                for (let i = page - 1; i <= page + 1; i++) {
                    if (i > 1 && i < totalPages - 1) {
                        tempPagination.push(
                            <button className={`btn  btn-outline-secondary  ${page === i ? "active" : ""}`}
                                    key={i} onClick={() => onPageChange(i)}>
                                {i + 1}
                            </button>
                        );
                    }
                }
                tempPagination.push(<span className="btn  btn-outline-secondary "
                                          key="ellipsis2">...</span>);
            } else {
                tempPagination.push(<span className="btn  btn-outline-secondary " key="ellipsis1">...</span>);
                for (let i = totalPages-5; i <= totalPages - 2; i++) {
                    tempPagination.push(
                        <button
                            className={`btn  btn-outline-secondary  ${page === i ? "active" : ""}`}
                            key={i} onClick={() => onPageChange(i)}>
                            {i+1}
                        </button>
                    );
                }
            }
        }

        if(totalPages>1){
            tempPagination.push(
                <button className={`btn  btn-outline-secondary  ${page === totalPages-1? "active" : ""}`}
                        key={totalPages}
                        onClick={() => onPageChange(totalPages - 1)}>
                    {totalPages}
                </button>
            );
        }

        tempPagination.push(
            <button className="btn  btn-outline-secondary "
                    key="next"
                    disabled={page >= totalPages - 1}
                    onClick={() => onPageChange(page + 1)}>
                &raquo;
            </button>
        );

        setPagination(tempPagination);
    }

    return (
        <div id="pagination" className="text-center">
            {pagination}
        </div>
    );
};

export default Pagination;