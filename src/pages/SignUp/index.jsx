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
            id:'',
            email: '',
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            lat: '',
            long: '',
            city: '',
            street: '',
            number: '',
            zipcode: '',
            phone: '',
            __v:'',

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
            this.setState({
                    id:data.id,
                    email:data.email,
                    username: data.username,
                    password: data.password,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    lat:data.lat,
                    long: data.long,
                    city: data.city,
                    street: data.street,
                    number: data.number,
                    zipcode: data.zipcode,
                    phone: data.phone,
                    __v:data.__v,
                })
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
                                        value={this.state.firstname}
                                        onChange={(e) => {
                                            this.setState({firstname:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Last Name" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.lastname}
                                        onChange={(e) => {
                                            this.setState({lastname:e.target.value})
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
                                        value={this.state.username}
                                        onChange={(e) => {
                                            this.setState({username:e.target.value})
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
                                        value={this.state.number}
                                        onChange={(e) => {
                                            this.setState({number:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="Zip Code" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.zipcode}
                                        onChange={(e) => {
                                            this.setState({zipcode:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Lat Value" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.lat}
                                        onChange={(e) => {
                                            this.setState({lat:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="Long Value" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.long}
                                        onChange={(e) => {
                                            this.setState({long:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Mobile No" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.phone}
                                        onChange={(e) => {
                                            this.setState({phone:e.target.value})
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
