import React, {Component} from 'react';
import './styles.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ChipInput from 'material-ui-chip-input'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) =>
        this.setState(...this.state, {[event.target.name]: event.target.value});

    onChangeTags = (tags) => {
        this.setState(...this.state, {tags: tags});
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log('thihs.state', this.state);
        this.props.registerUser(this.state);
    };

    render() {
        return (
            <div className="registration__container">
                <div className="registration__side"></div>
                <div className="registration__form">
                    <h1>Sign up</h1>
                    <form>
                        <TextField
                            hintText="Email"
                            floatingLabelText="Email"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            fullWidth={true}
                        />
                        <TextField
                            hintText="Password"
                            floatingLabelText="Password"
                            type="Password"
                            onChange={this.onChange}
                            name="password"
                            fullWidth={true}
                        />
                        <TextField
                            hintText="Firstname"
                            floatingLabelText="Firstname"
                            type="text"
                            onChange={this.onChange}
                            name="firstName"
                            fullWidth={true}
                        />
                        <TextField
                            hintText="Lastname"
                            floatingLabelText="Lastname"
                            type="text"
                            onChange={this.onChange}
                            name="lastName"
                            fullWidth={true}
                        />
                        <ChipInput
                            fullWidth={true}
                            hintText="Press enter after typing"
                            floatingLabelText="Tags"
                            onChange={this.onChangeTags}
                        />
                        <p />
                        <RaisedButton label="Register"
                                      onClick={this.onSubmit}
                                      className="m-t-sm"
                                      type="submit"/>
                    </form>
                </div>
            </div>
        );
    }
}


export default Registration;
