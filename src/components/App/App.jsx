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
import React from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";

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
    const [currentUser , setCurrentUser ] = React.useState({});

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
                    getData(data.token).then((user) => {
                        if (user) {
                            setCurrentUser(user);
                        }
                    })
                }
            )
            .catch((errCode) => {
                authErrorHandler(errCode, setErrorSubmit);
                setIsFieldDisabled(false)
            });
    }

    React.useEffect( () => {
        // если у пользователя есть токен в localStorage,
        // эта функция проверит валидность токена
        const jwt = localStorage.getItem('jwt');
        if (jwt){
            // проверим токен
            getData(jwt).then((user) => {
                if (user){
                    // авторизуем пользователя
                    setIsLoggedIn(true);
                    setCurrentUser(user);
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
        <CurrentUserContext.Provider value={currentUser}>
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
        </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
