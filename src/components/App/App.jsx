import './App.css';
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import {Route, Switch, useHistory} from "react-router-dom";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Profile from "../Profile/Profile.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import {register} from "../../utils/MainApi.js";
import {CONFLICT_ERR_CODE, SERVER_ERR_MSG, USER_EXISTS_ERR_MSG} from "../../utils/constants.js";

function App() {
    const history = useHistory()

    // регистрация пользователя
    function onSignUp(userData, setErrorSubmit){
        register(userData).then((res) => {
            console.log('Вы успешно зарегистрировались!');
            history.push('/signin');
        }).catch((err) => {
            if (err === CONFLICT_ERR_CODE) {
                setErrorSubmit(USER_EXISTS_ERR_MSG)
            } else {
                setErrorSubmit(SERVER_ERR_MSG);
            }
        });
    }

  return (
    <div className="App">

        <Switch>
            <Route path="/signup">
                <Register onSubmit={onSignUp}/>
            </Route>

            <Route path="/signin">
                <Login/>
            </Route>

            <Route path="*">

                <Header isLoggedIn={true}/>

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
