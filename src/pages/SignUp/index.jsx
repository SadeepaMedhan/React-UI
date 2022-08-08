import {Component} from "react";
import {
    Divider,
    Paper,
    Stack,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import Button from "@mui/material/Button";
import swal from "sweetalert";
import UsersService from "../../services/UsersService";


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: '',
            email: '',
            userName: '',
            password: '',
            city: '',
            street: '',
            streetNo: '',
            zipCode: '',
            latValue: '',
            longValue: '',
            mobileNo: '',

            usersList:[],
        }
    }
    componentDidMount() {
        this.loadUsersData();
    }


    loadUsersData = async () => {
        const res = await UsersService.fetchUsers();
        if (res.status === 200) {
            console.log(res.data.length)
            console.log(res.data)
            this.setState({usersList:res.data})
        } else {
            console.log("fetching error: " + res)
        }
    }

    render() {
        const submit = () => {
            swal("Sign Up Successful!", "", "success");
            window.location.assign('/home');
        };

        return (
            <div>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}
                       divider={<Divider orientation="vertical" flexItem/>}
                >
                    <ValidatorForm onSubmit={submit} onError={errors => console.log(errors)}>

                        <Stack direction="column" spacing={4} sx={{padding: '20px'}}>
                            <Stack direction="column" spacing={2}>

                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="First Name" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.fName}
                                        onChange={(e) => {
                                            this.setState({fName:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Last Name" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.lName}
                                        onChange={(e) => {
                                            this.setState({lName:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="E mail" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.email}
                                        onChange={(e) => {
                                            this.setState({email:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="User Name" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.userName}
                                        onChange={(e) => {
                                            this.setState({userName:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="Password" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.password}
                                        onChange={(e) => {
                                            this.setState({password:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="City" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.city}
                                        onChange={(e) => {
                                            this.setState({city:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="Street" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.street}
                                        onChange={(e) => {
                                            this.setState({street:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Street No" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.streetNo}
                                        onChange={(e) => {
                                            this.setState({streetNo:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="Zip Code" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.zipCode}
                                        onChange={(e) => {
                                            this.setState({zipCode:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Lat Value" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.latValue}
                                        onChange={(e) => {
                                            this.setState({latValue:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="Long Value" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.longValue}
                                        onChange={(e) => {
                                            this.setState({longValue:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Mobile No" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.mobileNo}
                                        onChange={(e) => {
                                            this.setState({mobileNo:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>

                            <Stack direction="row" justifyContent="flex-end"
                                   alignItems="center"
                                   spacing={1}>
                                <Button color="info" variant="contained"
                                        style={{
                                            fontWeight: 'bold',
                                            width: '95px',
                                            borderRadius: 15
                                        }}>
                                    Clear
                                </Button>
                                <Button type="submit" color="primary" variant="contained"
                                        style={{
                                            fontWeight: 'bold',
                                            width: '95px',
                                            borderRadius: 15
                                        }}>
                                    Save
                                </Button>
                            </Stack>
                            </Stack>
                        </Stack>
                    </ValidatorForm>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="user table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">E mail</TableCell>
                                    <TableCell align="left">UserName</TableCell>
                                    <TableCell align="left">Address</TableCell>
                                    <TableCell align="left">Mobile No</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.usersList.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.name.firstname+" "+row.name.lastname}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.username}</TableCell>
                                            <TableCell align="left">
                                                <p>{row.address.number}, {row.address.street},</p>
                                                <p>{row.address.city}</p>
                                                <p>{row.address.zipcode}</p>
                                            </TableCell>
                                            <TableCell align="left">{row.phone}</TableCell>
                                            <TableCell align="left">{row.phone}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
            </div>
        )
    }
}

export default SignUp
