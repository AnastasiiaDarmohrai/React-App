import React from "react";
import TriggerDataList from "./TriggerDataList";
const TriggerBlock = ({data}) => {
    console.log("TriggerBlock",data)
    return (
        <div className="wrapper">
            <div className="elipswrap">
            <TriggerDataList data={data}/>
            </div>
        </div>
    );
};
export default TriggerBlock