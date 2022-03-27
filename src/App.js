import Header from "./components/Header";
import WelcomeBlock from "./components/WelcomeBlock";
import TriggerBlock from "./components/TriggerBlock";
import Table from "./components/Table";
import Footer from "./components/Footer";
import TriggerData from "./data/TriggerData";
import {useState} from "react";
import TableData from "./data/TableData";
import Introduction from "./components/Introduction";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import BasicModal from "./components/ModalWindow";

function App() {
    const [data,setdata] = useState(TriggerData)
    const[tabledata,settabledata] = useState(TableData)
    console.log("App",data)
  return (
     <BrowserRouter>
         <Header/>
         <Routes>
             <Route path="/" element={
                 <>
                 <WelcomeBlock/>
                 <Introduction/>
                 <TriggerBlock data={data}/>
                 <Table data={tabledata}/>
                 <Footer/>
                 </>
             }/>
             <Route path="/aboutus" element={<AboutUs />}/>
             <Route path="/services" element={<Services />}/>
             <Route path="/contact" element={<Contact />}/>
             <Route path="/services" element={<Services />}/>
             <Route path="/login" element={<Login />}/>
             {/*<BasicModal/>*/}

         </Routes>



      {/* <br/>
         <div className="wrapper">
           <p align="center" className="zagol">Lorem Ipsum is simply dummy </p>
           <p align="center" className="zagol2">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
             industry's
             <br/>standard dummy text ever since the 1500s, when an unknow.
           </p>
           <br/>
             <br/>

               <div className="elipswrap">
                 <div className="parent"><img src="Ellipse1.png" className="elips"/>
                   <div className="child">
                     <img src="tickets.png" className="iconsize"/>
                       <h2 className="hicon">Tickets</h2>
                   </div>
                   <div className="block">
                     <t>Lorem Ipsum is simply dummy text of the printing and nice
                       Lorem Ipsum is simply dummy text of the printing and nice,
                       printing and nice
                     </t>

                   </div>
                 </div>


                 <div className="parent"><img src="Ellipse%2022.png" className="elips"/>
                   <div className="child">
                     <img src="camera.png" className="iconsize"/>
                       <h2 className="hicon">Camera</h2>
                   </div>
                   <div className="block">
                     <t>Lorem Ipsum is simply dummy text of the printing and nice
                       Lorem Ipsum is simply dummy text of the printing and nice,
                       printing and nice
                     </t>

                   </div>
                 </div>
                 <div className="parent"><img src="Ellipse%2023.png" className="elips"/>
                   <div className="child">
                     <img src="beermug%20(Cheers_).png" className="iconsize"/>
                       <h2 className="hicon">Beer</h2>
                   </div>
                   <div className="block">
                     <t>Lorem Ipsum is simply dummy text of the printing and nice
                       Lorem Ipsum is simply dummy text of the printing and nice,
                       printing and nice
                     </t>
                   </div>
                 </div>

                 <div className="parent"><img src="Ellipse%2024.png" className="elips"/>
                   <div className="child">
                     <img src="iPad%20potrait%20&%20landscape%202.png" className="iconsize"/>
                       <h2 className="hicon">Devices</h2>
                   </div>
                   <div className="block">
                     <t>Lorem Ipsum is simply dummy text of the printing and nice
                       Lorem Ipsum is simply dummy text of the printing and nice,
                       printing and nice
                     </t>
                   </div>
                 </div>

               </div>

               <div>
                 <br/>
                   <br/>
                     <br/> <br/>
                       <table border="0" align="center">
                         <tr>
                           <td>
                             <img src="photo.png" height="170" width="300"/>
                           </td>
                           <td>
                             <h3 style="font-weight: bolder ; size: 27px; ">Lorem ipsum is simply</h3>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                             exercitation ullamco
                             laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                             voluptate velit
                             esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                             proident, sunt in culpa
                             qui officia deserunt mollit anim id est laborum
                           </td>
                         </tr>
                         <tr>
                           <td>
                             <img src="photo.png" height="170" width="300"/>
                           </td>
                           <td>
                             <h3 style="font-weight: bolder ; size: 27px; ">Lorem ipsum is simply</h3>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                             exercitation ullamco
                             laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                             voluptate velit
                             esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                             proident, sunt in culpa
                             qui officia deserunt mollit anim id est laborum
                           </td>
                         </tr>
                         <tr>
                           <td>
                             <img src="photo.png" height="170" width="300"/>
                           </td>
                           <td>
                             <h3 style="font-weight: bolder ; size: 27px; ">Lorem ipsum is simply</h3>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                             exercitation ullamco
                             laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                             voluptate velit
                             esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                             proident, sunt in culpa
                             qui officia deserunt mollit anim id est laborum
                           </td>
                         </tr>
                       </table>
               </div>


         </div>
         <br/>
           <br/>
             <footer className="footer-wrap">
               <div className="wrap-footermenu">
                 <div className="menuitem">
                   <h3>Sub menu</h3>
                   <div>
                     Android
                     <br/>
                       Apps
                       <br/>
                         Articles
                         <br/>
                           Backgrounds
                           <br/>
                             Blogger
                             <br/>
                               Books
                               <br/>
                                 Coding
                   </div>
                 </div>
                 <div className="menuitem">
                   <h3>Sub menu</h3>
                   <div>
                     Android
                     <br/>
                       Apps
                       <br/>
                         Articles
                         <br/>
                           Backgrounds
                           <br/>
                             Blogger
                             <br/>
                               Books
                               <br/>
                                 Coding
                   </div>
                 </div>
                 <div className="menuitem">
                   <h3>Sub menu</h3>
                   <div>
                     Android
                     <br/>
                       Apps
                       <br/>
                         Articles
                         <br/>
                           Backgrounds
                           <br/>
                             Blogger
                             <br/>
                               Books
                               <br/>
                                 Coding
                   </div>
                 </div>
                 <div className="menuitem">
                   <h3>Sub menu</h3>
                   <div>
                     Android
                     <br/>
                       Apps
                       <br/>
                         Articles
                         <br/>
                           Backgrounds
                           <br/>
                             Blogger
                             <br/>
                               Books
                               <br/>
                                 Coding
                   </div>
                 </div>
               </div>
               <div className="menuitem">
                 <div className="sots">
                   <img src="icons8-facebook-новый.svg"/>
                     <img src="icons8-facebook-новый.svg"/>
                       <img src="icons8-facebook-новый.svg"/>
                         <img src="icons8-facebook-новый.svg"/>

                 </div>
                 Copyright © 2009–2013
               </div>

             </footer>*/}
     </BrowserRouter>
  );
}

export default App;
