import './App.css';
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Profile from "../Profile/Profile.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import {authorize, getData, register} from "../../utils/MainApi.js";
import React, {useEffect} from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

import {
    BAD_REQ_ERR_CODE,
    CONFLICT_ERR_CODE, FIELDS_ERR_MSG,
    LOGIN_ERR_MSG,
    SERVER_ERR_MSG,
    UNAUTH_ERR_CODE,
    USER_EXISTS_ERR_MSG
} from "../../utils/constants.js";

function App() {
    const history = useHistory()

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    function authErrorHandler(errCode, setErrorSubmit) {
        switch (errCode) {
            case CONFLICT_ERR_CODE:
                setErrorSubmit(USER_EXISTS_ERR_MSG);
                break;
            case BAD_REQ_ERR_CODE:
                setErrorSubmit(FIELDS_ERR_MSG);
                break;
            case UNAUTH_ERR_CODE:
                setErrorSubmit(LOGIN_ERR_MSG);
                break;
            default:
                setErrorSubmit(SERVER_ERR_MSG);
        }
    }

    // регистрация пользователя
    function onSignUp(userData, setErrorSubmit, setIsFieldDisabled){
        setIsFieldDisabled(true);
        register(userData)
            .then((res) => onSignIn(userData, setErrorSubmit))
            .catch((errCode) => {
                authErrorHandler(errCode, setErrorSubmit);
                setIsFieldDisabled(false);
            });
    }

    //вход пользователя
    function onSignIn(userData, setErrorSubmit, setIsFieldDisabled) {
        setIsFieldDisabled(true);
        authorize(userData)
            .then((data) => {
                    localStorage.setItem('jwt', data.token);
                    setIsLoggedIn(true);
                    history.push('/movies');
                }
            )
            .catch((errCode) => {
                authErrorHandler(errCode, setErrorSubmit);
                setIsFieldDisabled(false)
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
            <ProtectedRoute
                path="/signup"
                component={Register}
                onSubmit={onSignUp}
                isLoggedIn={isLoggedIn}
                allowed={!isLoggedIn}
            />
            <ProtectedRoute
                path="/signin"
                component={Login}
                onSubmit={onSignIn}
                isLoggedIn={isLoggedIn}
                allowed={!isLoggedIn}
            />

            <Route path="*">
                <Header isLoggedIn={isLoggedIn}/>

                <Switch>
                    <ProtectedRoute
                        path="/profile"
                        component={Profile}
                        onSignout={onSignOut}
                        allowed={isLoggedIn}
                    />

                    <Route path="*">
                        <Switch>
                            <Route  exact path="/">
                                <Main/>
                            </Route>

                            <ProtectedRoute
                                path="/movies"
                                component={Movies}
                                isLoggedIn={isLoggedIn}
                                allowed={isLoggedIn}
                            />

                            <ProtectedRoute
                                path="/saved-movies"
                                component={SavedMovies}
                                isLoggedIn={isLoggedIn}
                                allowed={isLoggedIn}
                            />
                            <Route path="*">
                                <ErrorMessage history={history}/>
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
