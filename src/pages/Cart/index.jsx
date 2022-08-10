import {Component} from "react";
import {
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField
} from "@mui/material";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import Button from "@mui/material/Button";
import ProductService from "../../services/ProductService";
import UsersService from "../../services/UsersService";
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectName: '',
            selectProduct: '',
            qty: '',
            date: new Date(),
            usersList: [],
            productList: [],
            cart: [],
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
            this.setState({usersList: res.data})
        } else {
            console.log("fetching error: " + res)
        }
    }
    loadProductsData = async () => {
        const res = await ProductService.fetchProducts();
        if (res.status === 200) {
            this.setState({productList: res.data})
        } else {
            console.log("fetching error: " + res)
        }
    }

    render() {
        const userNameChange = (event) => {
            this.setState({selectName: event.target.value});
        };
        const productChange = (event) => {
            console.log(event.target.value)
            this.setState({selectProduct: event.target.value});
        };
        const addCart = () => {
            let cart = this.state.cart;
            cart.push({
                product: this.state.selectProduct,
                qty: this.state.qty
            })
            this.setState({cart: cart});
        };
        return (
            <div>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}
                       divider={<Divider orientation="vertical" flexItem/>}
                >
                    <ValidatorForm onSubmit={addCart} onError={errors => console.log(errors)}>

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
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DesktopDatePicker
                                            sx={{m: 1, minWidth: 220}}
                                            label="Date"
                                            inputFormat="yyyy/MM/dd"
                                            value={this.state.date}
                                            onChange={(date) => {
                                                this.setState({date: date})
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Stack>
                                <Stack direction="row" spacing={4}>

                                    <FormControl sx={{minWidth: 222}}>
                                        <InputLabel id="lblName">Product Tittle</InputLabel>
                                        <Select
                                            labelId="lblName"
                                            id="demo-simple-select"
                                            value={this.state.selectProduct.title}
                                            label="Vehicle Type"
                                            onChange={productChange}
                                        >
                                            <MenuItem value="None">None</MenuItem>
                                            {this.state.productList.map((product) => (
                                                <MenuItem value={product}>{product.title}</MenuItem>
                                            ))
                                            }
                                        </Select>
                                    </FormControl>
                                    <TextValidator
                                        label="Qty" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required','minNumber:1', 'maxNumber:255',]}
                                        errorMessages={['this field is required']}
                                        value={this.state.qty}
                                        onChange={(e) => {
                                            this.setState({qty: e.target.value})
                                        }}/>

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
                                    Add
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
                                {this.state.cart.map((item) => (
                                    <TableRow>
                                        <TableCell align="left">{item.product.title}</TableCell>
                                        <TableCell align="left">{item.product.price}</TableCell>
                                        <TableCell align="left">{item.qty}</TableCell>
                                        <TableCell align="left">Action</TableCell>
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

export default Cart
