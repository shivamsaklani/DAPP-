import { Outlet } from "react-router-dom";
import { CustomHeader } from "./Header";
import '../App.css';
import { CurrentAmount } from "./Amount";
export function Layout(){
    return(
        <>
         <CustomHeader/>
         <CurrentAmount/>
         <div id="pagelayout">
           <Outlet  />
       </div>
        </>
       
    );
}