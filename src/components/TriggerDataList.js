import React from 'react';
import TriggerItem from "./TriggerItem";

// function getPng(image)
// {
//     if (image==='ipad') return iPad
//     if (image==='beer') return beermug
//     if (image==='camera') return camera
//     if (image==='tickets') return tickets
//     return beermug
// }
const TriggerDataList = ({data}) => {
    console.log("TriggerDataList",data)
    return (
        <>
            {
                data.map(obj => {
                    return(

                        <div className="parent" key={obj.id}>
                            {/*<img src={Ellipse24} alt={Ellipse24} className="elips"/>*/}
                            <img src={obj.color} alt={'color'} className="elips"/>
                            <div className="child">
                                <img src={obj.image} alt={'image1'} className="iconsize"/>

                                <h2 className="hicon">{obj.title}</h2>
                            </div>
                            <TriggerItem text={obj.text}/>
                        </div>

                    )
                    }
                )
            }
        </>
    );
};

export default TriggerDataList;