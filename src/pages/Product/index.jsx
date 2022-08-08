import {Component} from "react";
import {
    Avatar,
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


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFile: undefined,
            category: "None",
            tittle: '',
            price: '',
            description: '',
            categoriesList:[],
            productList:[],
        }
    }

    componentDidMount() {
        this.loadProductsData();
        this.loadCategories();
    }


    loadProductsData = async () => {
        const res = await ProductService.fetchProducts();
        if (res.status === 200) {
            console.log(res.data.length)
            console.log(res.data)
            this.setState({productList:res.data})
        } else {
            console.log("fetching error: " + res)
        }
    }
    loadCategories = async () => {
        const res = await ProductService.fetchCategories();
        if (res.status === 200) {
            this.setState({categoriesList:res.data})
        } else {
            console.log("fetching error: " + res)
        }
    }

    render() {
        const selectFile = (event) => {
            this.setState({currentFile: event.target.files[0]})
        };

        const uploadImage = async () => {
            var data = new FormData();
            let file = this.state.currentFile;
            let fileName = this.state.currentFile.name;
            data.append("myFile", file, fileName);

        }
        const categoryChange = (event) => {
            this.setState({category: event.target.value});
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
                                    <TextValidator
                                        label="Tittle" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.tittle}
                                        onChange={(e) => {
                                            this.setState({tittle:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Price" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.price}
                                        onChange={(e) => {
                                            this.setState({price:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <FormControl sx={{minWidth: 222}}>
                                        <InputLabel id="lblCategory">Category</InputLabel>
                                        <Select
                                            labelId="lblCategory"
                                            id="demo-simple-select"
                                            value={this.state.category}
                                            label="Vehicle Type"
                                            onChange={categoryChange}
                                        >
                                            <MenuItem value="None">None</MenuItem>
                                            {this.state.categoriesList.map((category) => (
                                                    <MenuItem value={category}>{category}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                    <TextValidator
                                        label="Description" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        value={this.state.description}
                                        onChange={(e) => {
                                            this.setState({description:e.target.value})
                                        }}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <label htmlFor="btn-upload">
                                        <input
                                            multiple
                                            id="btn-upload"
                                            name="btn-upload"
                                            style={{display: 'none'}}
                                            type="file"
                                            accept="image/*"
                                            onChange={selectFile}/>
                                        <Button
                                            className="btn-choose"
                                            variant="outlined"
                                            component="span">
                                            Choose Image
                                        </Button>
                                    </label>
                                    <div>
                                        {this.state.currentFile && (
                                            <img height="80px" className="preview my20"
                                                 src={URL.createObjectURL(this.state.currentFile)} alt=""/>
                                        )}
                                    </div>
                                    <Button
                                        className="btn-upload"
                                        color="primary"
                                        variant="contained"
                                        component="span"
                                        disabled={!this.state.currentFile}
                                        onClick={uploadImage}
                                    >
                                        Upload
                                    </Button>
                                </Stack>
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
                    </ValidatorForm>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="schedule table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Tittle</TableCell>
                                    <TableCell align="left">Image</TableCell>
                                    <TableCell align="left">Price</TableCell>
                                    <TableCell align="left">Category</TableCell>
                                    <TableCell align="left">Description</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.productList.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.title}</TableCell>
                                            <TableCell align="left">
                                                <Avatar alt="img" src={row.image}/>
                                            </TableCell>
                                            <TableCell align="left">{row.price}</TableCell>
                                            <TableCell align="left">{row.category}</TableCell>
                                            <TableCell align="left">{row.description}</TableCell>
                                            <TableCell align="left">{row.id}</TableCell>
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

export default Product
