import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import About from "./pages/about/about";
import NoPage from "./pages/noPage/NoPage";

const appRoutes = {
    login: {
        path: "/login",
        element: <Login />,
    },
    registration: {
        path: "/registration",
        element: <Registration />,
    },
    home: {
        path: "/",
        element: <Home />
    },

    about: {
        path: "/about",
        element: <About />
    },

    noPage: {
        path: "*",
        element: <NoPage/>
    }
}

export default appRoutes;
