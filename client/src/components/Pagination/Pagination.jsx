import "../Pagination/Pagination.css";
import React from "react";

const Pagination = ({ dogsPerPage, dogs, pagination }) => {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(dogs/dogsPerPage); i++) {
        pageNumbers.push(i + 1)
    }
    return(
        <nav>
            <ul className="pagination">
                {pageNumbers && pageNumbers.map(number => {
                    return(
                    <li className="number" key={number}>
                    <button onClick={() => pagination(number)}>{number}</button>
                    </li>
                    )
                    })}
            </ul>
        </nav>
    )
};

export default Pagination;