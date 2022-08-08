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


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

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
                                        label="User Name" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        errorMessages={['this field is required']}/>
                                    <TextValidator
                                        label="Date" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        errorMessages={['this field is required']}/>

                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <TextValidator
                                        label="Product Tittle" variant="outlined"
                                        size="small" color="primary"
                                        validators={['required',]}
                                        errorMessages={['this field is required']}/>
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
