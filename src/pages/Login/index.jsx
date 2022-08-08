import {Component} from "react";
import {IconButton, InputAdornment, Stack} from "@mui/material";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import Button from "@mui/material/Button";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import swal from 'sweetalert';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            password:'',
            showPassword:false,
        }
    }

    render() {
        const handleChangePassword = (prop) => (event) => {
            this.setState({password:event.target.value});
        };


        const handleClickShowPassword = () => {
            this.setState({showPassword:!this.state.showPassword})
        };

        const handleMouseDownPassword = (event) => {
            event.preventDefault();
        };
        const submit = () => {
            swal("Sign In Successful!", "", "success");
             //window.location.assign('/home',{state:{user:'abc'}});
            this.props.setUser(this.state.userName);
        };
        return (
            <div style={{position:'absolute', width: '100vw',
                background: 'white',
                zIndex: 10}}>
                <ValidatorForm  onSubmit={submit} onError={errors => console.log(errors)}>

                    <Stack sx={{right: 0,
                        margin: 'auto',
                        left: 0,
                        height: '100vh',
                        bottom: 0,}} direction="column" justifyContent="center" alignItems="center" spacing={1}
                           width={{xs: '300px', md: '450px'}} >


                        <Stack>
                            <TextValidator label="User Name" variant="outlined" helperText="User name" size="small"
                                           color="primary"
                                           errorMessages="Incorrect entry !"
                                           value={this.state.userName}
                                           onChange={(e) => {
                                               this.setState({userName:e.target.value})
                                           }} validators={['required',]}
                            />
                        </Stack>
                        <Stack>
                            <TextValidator label="Password" variant="outlined"
                                           type={this.state.showPassword ? "text" : "password"} size="small"
                                           onChange={handleChangePassword('password')}
                                           value={this.state.password}
                                           errorMessages="Incorrect Password !"
                                           endAdornment={
                                               <InputAdornment position="end">
                                                   <IconButton aria-label="toggle password visibility"
                                                               onClick={handleClickShowPassword}
                                                               onMouseDown={handleMouseDownPassword} edge="end">
                                                       {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                   </IconButton>
                                               </InputAdornment>
                                           } validators={['required',]}
                            />
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                            <Stack>
                                <span>Create new user account</span>
                            </Stack>
                            <Button autoFocus type="submit"
                                    style={{fontWeight: 'bold', width: '95px', borderRadius: 15}} color="info"
                                    variant="contained">Sign In</Button>
                        </Stack>

                    </Stack>
                </ValidatorForm>
            </div>
        )
    }
}

export default Login

