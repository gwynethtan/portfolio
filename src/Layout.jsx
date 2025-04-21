import NavigationBar from "./components/NavigationBar"
import {Outlet} from "react-router-dom"

export default function Layout(){
    return(
        <>
            <NavigationBar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}