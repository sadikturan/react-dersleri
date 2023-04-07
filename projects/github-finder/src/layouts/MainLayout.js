import { Outlet } from "react-router-dom";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import UserList from "../components/UserList";

export const MainLayout = () => {
    return (
        <div className="main-layout">
            <header>
                <Navbar />
                <Search />
            </header>
            <main className="container">
                <Outlet/>
                <Alert />
                <UserList />
            </main>
        </div>
    );
}