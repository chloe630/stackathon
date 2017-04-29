import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    render() {
        return (
            <div className="signin-container">
                <div className="buffer local">
                    <form onSubmit={this.onLoginSubmit}>
                        <div className="form-group">
                            <label>email</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-block btn-primary">Log in!</button>
                    </form>
                </div>
            </div>
        );
    }

    onLoginSubmit(event) {
        event.preventDefault();
        const credentials = {
            email: event.target.email.value,
            password: event.target.password.value
        };
        axios.get(`/user/${id}`);
    }
}

