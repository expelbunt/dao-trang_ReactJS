import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
            showHidePwd: false,
        }
    }

    handleUserEmail = (event) => {
        this.setState({
            userEmail: event.target.value
        })
    }
    handleUserPassword = (event) => {
        this.setState({
            userPassword: event.target.value
        })
    }
    handleLogin = () => {
        alert(`${this.state.userEmail}`)
        alert(`${this.state.userPassword}`)
    }

    handleShowHidePwd = () => {
        this.setState({
            showHidePwd: !this.state.showHidePwd
        })
    }
    render() {

        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 login-text">Đăng Nhập</div>
                        <div className="col-12 form-group .login-input" >
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email đăng nhập"
                                // value={this.state.userEmail}
                                onChange={(event) => this.handleUserEmail(event)}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password</label>
                            <div className="custom-input-password">
                                <input
                                    type={!this.state.showHidePwd ? "password" : "text"}
                                    className="form-control"
                                    placeholder="Mật khẩu"
                                    onChange={(event) => this.handleUserPassword(event)}
                                />
                                <span
                                    onClick={() => this.handleShowHidePwd()}
                                >
                                    <i class={!this.state.showHidePwd ? "fas fa-eye-slash" : "fas fa-eye"}></i>

                                </span>

                            </div>

                        </div>
                        <div className="col-12">
                            <button
                                className="btn-login"
                                onClick={() => this.handleLogin()}
                            >
                                Đăng Nhập
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
