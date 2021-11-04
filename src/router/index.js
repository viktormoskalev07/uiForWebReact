import Login from "../pages/Login";
import Create from "../pages/Create";
import Home from "../pages/Home";
import Events from "../pages/Events";
import Distributor from "../pages/Distributor";

export const routes = [
    {patch: '/login', component: Login, exact: true},
    {patch: '/create', component: Create, exact: true},
    {patch: '/home', component: Home, exact: true},
    {patch: '/events', component: Events, exact: true},
    {patch: '/distributor', component: Distributor, exact: true},
]