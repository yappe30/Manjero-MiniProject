import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { textAlign } from '@mui/system';


const Contact = () => {
    return (
        <React.Fragment>

            <div className="col s12 m2" style={{ width: '70%', margin: 'auto', height: '50%' }}>
            <br />
            <br />
                <h1 id="aboutTitle" style={{ textAlign: 'center' }}>CONTACT</h1>
                <br />
                <br />
                <h4 style={{ textAlign: 'center' }}>We'd Love to help you</h4>
                <h6 style={{ textAlign: 'center' }}>Feel free to say hello!</h6>
                <br />
                <br />
                <div className='row'>
                    <div className='col-lg-6'>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '95%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                required
                                id="standard-required"
                                label="Name"
                                variant="standard"
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="Email"
                                variant="standard"
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="Subject"
                                variant="standard"
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                            />
                            <Button variant="contained" style={{ float: 'right' }}>Submit</Button>
                        </Box>
                    </div>
                    <div className='col-lg-6'>
                        <table style={{marginLeft: '50px'}}>
                        <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td><LocationOnIcon style={{fontSize: '30pt'}}/></td>
                                <td style={{width: '40%', textAlign: 'center'}}>     
                                    <p>ABC Company Inc.</p>
                                    <p>Philippines</p>
                                </td>
                            </tr>

                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td><PhoneIcon style={{fontSize: '30pt'}}/></td>
                                <td style={{width: '40%', textAlign: 'center'}}>     
                                    <p>0000000000</p>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td><MailIcon style={{fontSize: '30pt'}}/></td>
                                <td style={{width: '40%', textAlign: 'center'}}>     
                                    <p>abccompanyinc@gmail.com</p>
                                </td>
                            </tr>
                        </table>
                        <br />
                        <div style={{textAlign: 'center', borderTop: '1px solid black'}}>
                        <br />
                        <FacebookIcon style={{fontSize: '30pt'}}/>
                        <TwitterIcon style={{fontSize: '30pt'}}/>
                        <InstagramIcon style={{fontSize: '30pt'}}/>
                        <LinkedInIcon style={{fontSize: '30pt'}}/>
                        </div>
                    </div>
                    <div style={{ height: '100vh', width: '100%' , marginTop: '50px'}}>
                    <h3>Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988978.0410205247!2d120.54457531663103!3d12.483888738008917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sabc%20inc!5e0!3m2!1sen!2sph!4v1677200174429!5m2!1sen!2sph"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Contact;