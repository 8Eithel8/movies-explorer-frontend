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
import {authorize, getData, register} from "../../utils/MainApi.js";
import React, {useEffect} from "react";

import {
    CONFLICT_ERR_CODE,
    LOGIN_ERR_MSG,
    SERVER_ERR_MSG,
    UNAUTH_ERR_CODE,
    USER_EXISTS_ERR_MSG
} from "../../utils/constants.js";

function App() {
    const history = useHistory()

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    // регистрация пользователя
    function onSignUp(userData, setErrorSubmit){
        register(userData).then((res) => {
            return onSignIn(userData, setErrorSubmit);
        }).catch((errCode) => {
            if (errCode === CONFLICT_ERR_CODE) {
                setErrorSubmit(USER_EXISTS_ERR_MSG)
            } else {
                setErrorSubmit(SERVER_ERR_MSG);
            }
        });
    }

    //вход пользователя
    function onSignIn(userData, setErrorSubmit) {
        authorize(userData)
            .then((data) => {
                    localStorage.setItem('jwt', data.token);
                    setIsLoggedIn(true);
                    history.push('/movies');
                }
            )
            .catch((errCode) => {
                if (errCode === UNAUTH_ERR_CODE) {
                    setErrorSubmit(LOGIN_ERR_MSG)
                } else {
                    setErrorSubmit(SERVER_ERR_MSG);
                }
            });
    }

    useEffect( () => {
        // если у пользователя есть токен в localStorage,
        // эта функция проверит валидность токена
        const jwt = localStorage.getItem('jwt');
        if (jwt){
            // проверим токен
            getData(jwt).then((res) => {
                if (res){
                    // авторизуем пользователя
                    setIsLoggedIn(true);
                    // setUserLogin(res.email);
                    history.push('/');
                }
                else {
                    setIsLoggedIn(false);
                    // setUserLogin('');
                }
            }).catch(
                (err) => console.log('Error: ', err)
            );
        }
    }, [])

    //выход из аккаунта
    function onSignOut(){
        setIsLoggedIn(false);
        localStorage.removeItem('jwt');
        history.push('/');
    }

  return (
    <div className="App">

        <Switch>
            <Route path="/signup">
                <Register onSubmit={onSignUp}/>
            </Route>

            <Route path="/signin">
                <Login onSubmit={onSignIn}/>
            </Route>

            <Route path="*">

                <Header isLoggedIn={isLoggedIn}/>

                <Switch>
                    <Route path="/profile">
                        <Profile onSignout={onSignOut}/>
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
