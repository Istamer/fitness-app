import './App.css';
import Home from "./pages/home/home";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import appRoutes from './appRoutes';
import { useSelector } from 'react-redux';

function App() {

    const user = useSelector(state=>state.appUser.user);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {user ?
                        <>
                            <Route path={appRoutes.home.path} element={appRoutes.home.element} />
                        </>
                        :
                        <>
                            <Route path={appRoutes.login.path} index element={appRoutes.login.element} />
                            <Route path={appRoutes.registration.path} element={appRoutes.registration.element} />
                        </>
                    }

                    <Route path={appRoutes.noPage.path} element={appRoutes.noPage.element} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
