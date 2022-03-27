import React from 'react';
import photo from "../asserts/photo.png";
import TableItem from "./TableItem";

const TableDataList = ({data}) => {
    // const item;
    return (
        <>
            {
                data.map(obj => {
                return(

                    <div key={obj.id} className="tableblock">
                        <div className="innerblock">
                            <img src={photo} alt={photo} height="170" width="300"/>
                        </div>
                        <div className="innerblock">
                            <TableItem caption={obj.caption} text={obj.text} />
                        </div>
                    </div>

                )
                // console.log("TableDataList", obj)
            }
            )
            }


        </>
    );
};

export default TableDataList;