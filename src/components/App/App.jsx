import './App.css';
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Profile from "../Profile/Profile.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import {authorize, getData, getSavedMovies, postMovie, register, removeMovie, updateData} from "../../utils/MainApi.js";
import React from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import {
    BAD_REQ_ERR_CODE,
    CONFLICT_ERR_CODE, FIELDS_ERR_MSG, JWT_LS_KEY,
    LOGIN_ERR_MSG, SEARCH_PARAMS_LS_KEY,
    SERVER_ERR_MSG, SUCCESS_UPDATE_MSG,
    UNAUTH_ERR_CODE,
    USER_EXISTS_ERR_MSG
} from "../../utils/constants.js";
import { getMovies } from "../../utils/MoviesApi.js";

function App() {
    const history = useHistory();
    const location = useLocation();

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [currentUser, setCurrentUser ] = React.useState({});
    const [savedMovies, setSavedMovies ] = React.useState([]);

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
            .then(() => onSignIn(userData, setErrorSubmit, setIsFieldDisabled))
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
                    localStorage.setItem(JWT_LS_KEY, data.token);
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
        const jwt = localStorage.getItem(JWT_LS_KEY);
        if (jwt){
            // проверим токен
            getData(jwt).then((user) => {
                if (user){
                    // авторизуем пользователя
                    setIsLoggedIn(true);
                    setCurrentUser(user);
                    const path = location.pathname;
                    path === '/signin' || path === '/signup'
                        ? history.push('/movies')
                        : history.push(path);
                }
                else {
                    setIsLoggedIn(false);
                }
            }).catch(
                (err) => console.log('Error: ', err)
            );
        }
    }, [])

    //выход из аккаунта
    function onSignOut(){
        setIsLoggedIn(false);
        localStorage.removeItem(JWT_LS_KEY);
        localStorage.removeItem(SEARCH_PARAMS_LS_KEY);
        history.push('/');
    }

    function updateUserInfo(values, setMessage, setIsError, setIsFieldDisabled) {
        setIsFieldDisabled(true);
        updateData(values)
            .then((data) => {
                setCurrentUser(data);
                setIsError(false);
                setMessage(SUCCESS_UPDATE_MSG)
                setIsFieldDisabled(false)
                }
            )
            .catch(() => {
                setIsError(true);
                setMessage(SERVER_ERR_MSG)
                setIsFieldDisabled(false)
            });
    }

    function searchMovies(text, isShorts, actions, state) {
        actions.prepare();
        if (state.get.length === 0) {
            getMovies()
                .then(movies => {
                    state.set(movies);
                    actions.search(movies, text, isShorts)
                })
                .catch(() => {
                    actions.handleError();
                })
        } else {
            actions.search(state.get, text, isShorts)
        }
    }

    //полчаем список сохраненных фильмов пользователя
    React.useEffect(
        () => {
            if (isLoggedIn) {
                getSavedMovies()
                    .then((movies) => {
                        setSavedMovies(movies)
                    })
                    .catch(
                        (err) => console.log('Error: ', err)
                    );
            } else {
                setSavedMovies([]);
            }
        },
        [isLoggedIn]
    )

    //добавляем фильмы в избранное
    function handleAddMovie (movie) {
        postMovie(movie)
            .then((movie) => {
                setSavedMovies([
                    movie,
                    ...savedMovies,
                ])
            })
            .catch(
                (err) => console.log('Error: ', err)
            );
    }

    //удаляем фильм из избранного
    function handleRemoveMovie  (movie) {
        // Отправляем запрос в API и получаем обновлённые данные карточки
        removeMovie(movie._id).then(() => {
            setSavedMovies((state) => state.filter((c) => c._id !== movie._id));
        })
            .catch(
                (err) => console.log('Error: ', err)
            );
    }

  return (
    <div className="App">
        <CurrentUserContext.Provider value={currentUser}>
            <Switch>
                <Route path="/signup">
                    <Register
                        onSubmit={onSignUp}
                    />
                </Route>

                <Route path="/signin">
                    <Login
                        onSubmit={onSignIn}
                    />
                </Route>

                <Route path="*">
                    <Header isLoggedIn={isLoggedIn}/>

                    <Switch>
                        <ProtectedRoute
                            path="/profile"
                            component={Profile}
                            onSubmit={updateUserInfo}
                            onSignout={onSignOut}
                            isLoggedIn={isLoggedIn}
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
                                    searchMovies={searchMovies}
                                    handleAddMovie={handleAddMovie}
                                    handleRemoveMovie={handleRemoveMovie}
                                    savedMovies={savedMovies}
                                />

                                <ProtectedRoute
                                    path="/saved-movies"
                                    component={SavedMovies}
                                    isLoggedIn={isLoggedIn}
                                    handleRemoveMovie={handleRemoveMovie}
                                    savedMovies={savedMovies}
                                />
                                <Route path="*">
                                    <ErrorMessage
                                        history={history}
                                        isLoggedIn={isLoggedIn}
                                    />
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
