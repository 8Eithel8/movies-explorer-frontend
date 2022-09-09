import './App.css';
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import {Route, Switch} from "react-router-dom";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Profile from "../Profile/Profile.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";

function App() {
  return (
    <div className="App">

        <Switch>
            <Route path="/signup">
                <Register/>
            </Route>

            <Route path="/signin">
                <Login/>
            </Route>

            <Route path="*">

                <Header/>

                <Switch>
                    <Route path="/profile">
                        <Profile/>
                    </Route>

                    <Route path="*">
                        <Switch>
                            <Route  exact path="/">
                                <Main/>
                            </Route>

                            <Route path="/movies">
                                <Movies/>
                            </Route>

                            <Route path="/saved-movies">
                                <SavedMovies/>
                            </Route>
                        </Switch>
                        <Footer/>
                    </Route>
                </Switch>

            </Route>
        </Switch>
    </div>
  );
}

export default App;
