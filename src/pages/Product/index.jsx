import {Component} from "react";
import {
    Avatar,
    Chip,
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


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFile: undefined,
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
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Price" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="Category" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Description" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
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
                                    <TableCell align="left">Tittle</TableCell>
                                    <TableCell align="left">Image</TableCell>
                                    <TableCell align="left">Price</TableCell>
                                    <TableCell align="left">Category</TableCell>
                                    <TableCell align="left">Description</TableCell>
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

export default Product
