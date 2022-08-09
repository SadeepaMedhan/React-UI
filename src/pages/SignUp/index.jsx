import {Component} from "react";
import {
    Divider, IconButton,
    Paper,
    Stack,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Tooltip
} from "@mui/material";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import Button from "@mui/material/Button";
import swal from "sweetalert";
import UsersService from "../../services/UsersService";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{
                id:'',
                email: '',
                username: '',
                password: '',
                name:{
                    firstname: '',
                    lastname: '',
                },
                address:{
                    geolocation:{
                        lat: '',
                        long: '',
                    },
                    city: '',
                    street: '',
                    number: '',
                    zipcode: '',
                },
                phone: '',
                __v:''
            },
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
        const deleteUser = (id) => {
            console.log(id)
        };
        const updateUser = (data) => {
            this.setState({user:data})
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
                                        value={this.state.user.name.firstname}
                                        onChange={(e) => {
                                            let data = this.state.user;
                                            data.name.firstname = e.target.value;
                                            this.setState({data})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Last Name" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.user.name.lastname}
                                        onChange={(e) => {
                                            let data = this.state.user;
                                            data.name.lastname = e.target.value;
                                            this.setState({data})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="E mail" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.user.email}
                                        onChange={(e) => {
                                            let data = this.state.user;
                                            data.email = e.target.value;
                                            this.setState({data})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="User Name" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.user.username}
                                        onChange={(e) => {
                                            let data = this.state.user;
                                            data.username = e.target.value;
                                            this.setState({data})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="Password" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.user.password}
                                        onChange={(e) => {
                                            let data = this.state.user;
                                            data.password = e.target.value;
                                            this.setState({data})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="City" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.user.address.city}
                                        onChange={(e) => {
                                            let data = this.state.user;
                                            data.address.city = e.target.value;
                                            this.setState({data})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="Street" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.user.address.street}
                                        onChange={(e) => {
                                            let data = this.state.user;
                                            data.address.street = e.target.value;
                                            this.setState({data})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Street No" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.user.address.number}
                                        onChange={(e) => {
                                            let data = this.state.user;
                                            data.address.number = e.target.value;
                                            this.setState({data})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="Zip Code" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.user.address.zipcode}
                                        onChange={(e) => {
                                            let data = this.state.user;
                                            data.address.zipcode = e.target.value;
                                            this.setState({data})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Lat Value" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.user.address.geolocation.lat}
                                        onChange={(e) => {
                                            let data = this.state.user;
                                            data.address.geolocation.lat = e.target.value;
                                            this.setState({data})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="Long Value" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.user.address.geolocation.long}
                                        onChange={(e) => {
                                            let data = this.state.user;
                                            data.address.geolocation.long = e.target.value;
                                            this.setState({data})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Mobile No" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.user.phone}
                                        onChange={(e) => {
                                            let data = this.state.user;
                                            data.phone = e.target.value;
                                            this.setState({data})
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
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                           updateUser(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary"/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            swal({
                                                                title: "Are you sure?",
                                                                text: "Once deleted, you will not be able to recover this imaginary file!",
                                                                icon: "warning",
                                                                buttons: true,
                                                                dangerMode: true,
                                                            })
                                                                .then((willDelete) => {
                                                                    if (willDelete) {
                                                                        deleteUser(row.id);
                                                                        swal("Poof! Your imaginary file has been deleted!", {
                                                                            icon: "success",
                                                                        });
                                                                    } else {
                                                                        swal("Your imaginary file is safe!");
                                                                    }
                                                                });
                                                        }}
                                                    >
                                                        <DeleteIcon color="error"/>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
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
