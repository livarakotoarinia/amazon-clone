import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase.js';
import "./Login.css"

function Login() {
    // we setup the redirection
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = event => {
        // stop the refresh
        event.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                // logged Inn redirect to homepage
                history.push("/")
            })
            .catch(e => alert(e.message))
    };

    const register = event => {
        // stop the refresh
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // create a user and logged in, redirect to homepage
                history.push("/")
            })
            .catch(e => alert(e.message))
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login__container">
                <h1>S'identifier</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Mot de passe</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Continuer</button>
                </form>

                <p>En continuant, vous acceptez les conditions d'utilisation et la notice Protection de vos informations personnelles d'Amazon</p>
                <button onClick={register} className="login__registerButton">Créer votre compte</button>
            </div>
        </div>
    )
}

export default Login
