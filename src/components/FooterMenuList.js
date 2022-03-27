import React from 'react';
import FooterItem from "./FooterItem";

const FooterMenuList = ({data}) => {
    return (
            <>
                {
                    data.map(obj => {
                            return(

                                <footer className="footer-wrap">
                                    <div className="wrap-footermenu">
                                     <FooterItem/>
                                    </div>
                                    </footer>

                            )
                            // console.log("TableDataList", obj)
                        }
                    )
                }

            </>

    );
};

export default FooterMenuList;
// import React, {Component} from 'react';
// import FooterItem from "./FooterItem";
//
//
// class FooterMenuList extends Component {
//     return({data})
//     {
//         data.map(obj =>
//
//             return(
//                 <>
//                     {
//                         <footer className="footer-wrap">
//                             <div className="wrap-footermenu">
//                                 <FooterItem/>
//                             </div>
//                         </footer>
//                     }
//                 </>
//             );
//
//     };
// export default FooterMenuList;