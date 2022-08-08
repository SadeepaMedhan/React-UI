import {Component} from "react";
import {
    Divider, FormControl, InputLabel, MenuItem,
    Paper, Select,
    Stack,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import Button from "@mui/material/Button";
import ProductService from "../../services/ProductService";
import UsersService from "../../services/UsersService";


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectName:'',
            selectProduct:'',
            usersList:[],
            productList:[],
        }
    }
    componentDidMount() {
        this.loadProductsData();
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
    loadProductsData = async () => {
        const res = await ProductService.fetchProducts();
        if (res.status === 200) {
            this.setState({productList:res.data})
        } else {
            console.log("fetching error: " + res)
        }
    }
    render() {
        const userNameChange = (event) => {
            this.setState({selectName: event.target.value});
        };
        const productChange = (event) => {
            this.setState({selectProduct: event.target.value});
        };
        return (
            <div>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}
                       divider={<Divider orientation="vertical" flexItem/>}
                >
                    <ValidatorForm onError={errors => console.log(errors)}>

                        <Stack direction="column" spacing={4} sx={{padding: '20px'}}>
                            <Stack direction="column" spacing={2}>

                                <Stack direction="row" spacing={4}>

                                    <FormControl sx={{minWidth: 222}}>
                                        <InputLabel id="lblName">User Name</InputLabel>
                                        <Select
                                            labelId="lblName"
                                            id="demo-simple-select"
                                            value={this.state.selectName}
                                            label="Vehicle Type"
                                            onChange={userNameChange}
                                        >
                                            <MenuItem value="None">None</MenuItem>
                                            {this.state.usersList.map((user) => (
                                                <MenuItem value={user.username}>{user.username}</MenuItem>
                                            ))
                                            }
                                        </Select>
                                    </FormControl>
                                    <TextValidator type="date"
                                         variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>

                                    <FormControl sx={{minWidth: 222}}>
                                        <InputLabel id="lblName">Product Tittle</InputLabel>
                                        <Select
                                            labelId="lblName"
                                            id="demo-simple-select"
                                            value={this.state.selectProduct}
                                            label="Vehicle Type"
                                            onChange={productChange}
                                        >
                                            <MenuItem value="None">None</MenuItem>
                                            {this.state.productList.map((product) => (
                                                <MenuItem value={product.title}>{product.title}</MenuItem>
                                            ))
                                            }
                                        </Select>
                                    </FormControl>
                                    <TextValidator
                                        label="Qty" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        errorMessages={['this field is required']}/>

                                </Stack>

                            </Stack>
                            <Stack direction="row" justifyContent="center"
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
                    </ValidatorForm>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="schedule table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Product</TableCell>
                                    <TableCell align="left">Price</TableCell>
                                    <TableCell align="left">Qty</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
            </div>
        )
    }
}

export default Cart
