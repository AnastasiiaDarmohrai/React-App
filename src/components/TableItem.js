import React from 'react';
const TableItem = ({text, caption}) => {

    return (
        <div>
            <div>
                <h2>{caption}</h2>
            </div>
            <p>
                {text}
            </p>
        </div>
    );
};

export default TableItem;



// r+s+c+tab