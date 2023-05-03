import React from "react";

const Pagination = ({ dogsPerPage, dogs, pagination }) => {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(dogs/dogsPerPage); i++) {
        pageNumbers.push(i + 1)
    }
    return(
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(number => {
                    return(
                        <li key={number}>
                            <button onClick={() => pagination(number)}>
                                {number}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default Pagination;