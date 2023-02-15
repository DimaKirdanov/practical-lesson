import Navigation from "components/Navigation/Navigation";
import { Outlet } from "react-router";
const LayOut = () => {
    return (
       <>
        <header>
<Navigation/>
        </header>

        <main>
<Outlet/>
        </main>
    </>  
    )
   
}

export default LayOut;