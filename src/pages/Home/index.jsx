import { Component } from "react";
import PropTypes from "prop-types";
import {Avatar, Box, Chip, Divider, IconButton, ListItemIcon, Menu, MenuItem, Stack, Tab, Tabs} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import CategoryIcon from '@mui/icons-material/Category';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorElNav:null,
            tabValue: 0,
            openLogin: false,
            signInIcon: null,
            user: null,

        }
    }

    render() {
        let {classes} = this.props;
        const navTabChange = (event, newValue) => {
            this.setState({tabValue: newValue});
        }
        const handleOpenNavMenu = (event) => {
            this.setState({anchorElNav: event.currentTarget});
        }

        const handleCloseNavMenu = () => {
            this.setState({anchorElNav: null});
        }
        const signInHandleMenu = (event) => {
            this.setState({signInIcon: event.currentTarget});
        }
        const signUpHandleClose = () => {
            this.setState({signInIcon: null});
        }

        return (
           <div>
               <div>
                   <div>

                       <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                           <Tabs value={this.state.tabValue} onChange={navTabChange}
                                 aria-label="basic tabs example">
                               <Tab label="Dashboard" {...a11yProps(0)} />
                               <Tab label="Product" {...a11yProps(1)} />
                               <Tab label="Cart" {...a11yProps(2)} />
                           </Tabs>
                       </Box>

                   </div>
                   <div>
                       <IconButton size="large"
                                   aria-label="account of current user"
                                   aria-controls="menu-appbar"
                                   aria-haspopup="true"
                                   onClick={handleOpenNavMenu}
                                   color="inherit"
                                   sx={{display: {xs: 'block', md: 'none'},}}>
                           <MenuIcon/>
                       </IconButton>

                       <Menu id="menu-appbar"
                             anchorEl={this.state.anchorElNav}
                             anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
                             keepMounted
                             transformOrigin={{vertical: 'top', horizontal: 'left',}}
                             open={Boolean(this.state.anchorElNav)}
                             onClose={handleCloseNavMenu}
                             sx={{display: {xs: 'fex', md: 'none'},}}>

                           <Tabs orientation="vertical" value={this.state.tabValue} onChange={navTabChange}
                                 aria-label="menu tabs">
                               <Tab label="Home" {...a11yProps(0)} />
                               <Tab label="Vehicles" {...a11yProps(1)} />
                               <Tab label="Service" {...a11yProps(2)} />
                               <Tab label="About" {...a11yProps(3)} />

                           </Tabs>
                       </Menu>
                       <div>

                           {this.state.user !== null && (
                               <Chip icon={<AccountCircleIcon/>} label={this.state.user.name}
                                     onClick={signInHandleMenu}/>)}
                           <Menu anchorEl={this.state.signInIcon}
                                 id="account-menu"
                                 open={Boolean(this.state.signInIcon)}
                                 onClose={signUpHandleClose}
                                 onClick={signUpHandleClose}
                                 PaperProps={{
                                     elevation: 0,
                                     sx: {
                                         overflow: 'visible',
                                         filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))', mt: 1.5,
                                         '& .MuiAvatar-root': {
                                             width: 32, height: 32, ml: -0.5, mr: 1,
                                         },
                                         '&:before': {
                                             content: '""',
                                             display: 'block', position: 'absolute',
                                             top: 0, right: 14, width: 10, height: 10,
                                             bgcolor: 'background.paper', zIndex: 0,
                                             transform: 'translateY(-50%) rotate(45deg)',
                                         },
                                     },
                                 }}
                                 transformOrigin={{horizontal: 'right', vertical: 'top'}}
                                 anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                           >
                               <MenuItem>
                                   <Avatar/> Profile
                               </MenuItem>
                               <MenuItem >
                                   <ShoppingCartIcon/> My Cart
                               </MenuItem>
                               <Divider/>
                               <MenuItem>
                                   <ListItemIcon>
                                       <PersonAddIcon fontSize="small"/>
                                   </ListItemIcon>
                                   Add another account
                               </MenuItem>
                               <MenuItem>
                                   <ListItemIcon>
                                       <SettingsIcon fontSize="small"/>
                                   </ListItemIcon>
                                   Settings
                               </MenuItem>
                               <MenuItem >
                                   <ListItemIcon>
                                       <LogoutIcon fontSize="small"/>
                                   </ListItemIcon>
                                   Logout
                               </MenuItem>
                           </Menu>
                       </div>
                   </div>
               </div>

               <TabPanel value={this.state.tabValue} index={0}>
                   <Stack sx={{marginTop:'50px'}} direction="row"
                           justifyContent="center"
                           alignItems="center"
                           spacing={2}>
                       <Stack className={classes.card_box}>
                           <div style={{backgroundColor: '#27ae60'}} className={classes.card_logo_box}>
                               <CategoryIcon style={{fontSize: '34px'}}
                                              className={classes.card_logo}/>
                           </div>
                           <Stack direction="column" justifyContent="flex-start" alignItems="flex-end" spacing={1}
                                  className={classes.card_mainAria}>
                               <h3>Products</h3>
                               <h2>{60}</h2>
                           </Stack><Divider/>
                           <Stack direction="row" justifyContent="flex-start" spacing={1}
                                  alignItems="center" style={{width: '100%', height: '40px'}}>

                           </Stack>
                       </Stack>
                       <Stack className={classes.card_box}>
                           <div style={{backgroundColor: '#27ae60'}} className={classes.card_logo_box}>
                               <ShoppingCartIcon style={{fontSize: '34px'}}
                                              className={classes.card_logo}/>
                           </div>
                           <Stack direction="column" justifyContent="flex-start" alignItems="flex-end" spacing={1}
                                  className={classes.card_mainAria}>
                               <h3>Cart</h3>
                               <h2>{12}</h2>
                           </Stack><Divider/>
                           <Stack direction="row" justifyContent="flex-start" spacing={1}
                                  alignItems="center" style={{width: '100%', height: '40px'}}>

                           </Stack>
                       </Stack>
                       <Stack className={classes.card_box}>
                           <div style={{backgroundColor: '#27ae60'}} className={classes.card_logo_box}>
                               <PeopleAltIcon style={{fontSize: '34px'}}
                                              className={classes.card_logo}/>
                           </div>
                           <Stack direction="column" justifyContent="flex-start" alignItems="flex-end" spacing={1}
                                  className={classes.card_mainAria}>
                               <h3>Users</h3>
                               <h2>{43}</h2>
                           </Stack><Divider/>
                           <Stack direction="row" justifyContent="flex-start" spacing={1}
                                  alignItems="center" style={{width: '100%', height: '40px'}}>

                           </Stack>
                       </Stack>

                   </Stack>
               </TabPanel>

           </div>
        )
    }
}

export default withStyles(styleSheet)(HomePage)


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div role="tabpanel" hidden={value !== index}
             id={`simple-tabpanel-${index}`}
             aria-labelledby={`simple-tab-${index}`}{...other}>
            {value === index && (
                <Box sx={{}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}