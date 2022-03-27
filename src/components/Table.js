import React from "react";
import TableDataList from "./TableDataList";
const Table = ({data}) =>{
    return(
        <>
            {/*<br/>*/}
            <TableDataList data={data}/>
        </>
    );
};
export default Table