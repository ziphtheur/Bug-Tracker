import {React, useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { finalLogin } from '../../actions'
import './login.css'

const Login = ({ loginReducer }) => {
    const [login, setLogin] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const buttonClick = (e, name) => {
        e.preventDefault();
        setLogin(name)

    }

    const formSubmit = (event) => {
        event.preventDefault();
        dispatch(finalLogin(login))
        history.push('/dashboard')
    }

    return (
        <div className="login-page">
            <form className="login-container">
                <button className="admin-button" onClick={(event) => buttonClick(event, 'Admin')}>Admin</button>
                <button className="developer-button" onClick={(event) => buttonClick(event, 'Developer')}>Developer</button>
                <button className="project-manager-button" onClick={(event) => buttonClick(event, 'Project Manager')}>Project Manager</button>
                <button className="team-member-button" onClick={(event) => buttonClick(event, 'Team Member')}>Team Member</button>
            </form>
            <button className="login-submit" type="submit" onClick={formSubmit}>Login</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loginReducer: state.login
    }
}

export default connect(mapStateToProps, { finalLogin })(Login);