import React, { useCallback, useEffect } from 'react';
import { onGetplayerData, onPostPlayerScore } from "../../action"
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import PlayerCarousel from '../components/playerCarousel';
import './PlayerStyle.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import PlayerCard from '../components/playerCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Player = () => {
    
    const dispatch = useDispatch();
    
    const [name, setName] = React.useState('');
    const [score, setScore] = React.useState('');
    const [sport, setSport] = React.useState('');
    const [remark, setRemark] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [nameErr, setNameErr] = React.useState('');
    const [sportErr, setSportErr] = React.useState('');

    const playerData = useSelector((state) => state.playerData);

    // const getData = useCallback(() => {
    //     return useSelector((state) => state.playerData)
    // },[]);

    useEffect(() => {
        dispatch(onGetplayerData());
    },[])


    const handleClose = () => setOpen(false);
    const handleChange = (e) => {

        if (e.target.id === "name") {
            validateName(e.target.value);
        }
        if (e.target.id === "score") {
            validateScore(e.target.value);
        }
        if (e.target.id === "sport") {
            validateSport(e.target.value);
        }
        if (e.target.id === "remark") {
            validateRemark(e.target.value);
        }
    }

    const validateName = (name) => {
        let pattern = /^[a-zA-Z ]*$/;

        if(!pattern.test(name)){
            setNameErr('Invalid Name');
        }else{
            setNameErr('');
            setName(name);
        }
    
        return nameErr;
    }
    const validateScore = (score) => {
        let pattern = /^[0-9]*$/;

        if(!pattern.test(score)){
            setSportErr('Invalid Score');
        }else{
            setSportErr('');
            setScore(score);
        }
       
      
        return true;
    }
    const validateSport = (sport) => {
        setSport(sport);
      
        return true;
    }
    const validateRemark = (remark) => {
        setRemark(remark);
      
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (
            validateScore(name) && 
            validateScore(score) && 
            validateScore(sport) && 
            validateScore(remark)
        ) {
            setOpen(true);
            dispatch(onPostPlayerScore(name, sport, score, remark))
        }
      
    }

    return (
        <div>
            <PlayerCarousel />
            <div style={{ width: '90%', margin: 'auto', marginTop: '5%' }}>
                <br></br>
                <div className='row'>
                    <PlayerCard playerData={playerData} />
                </div>
                <br></br>
                <h3 style={{ textAlign: 'center' }}>Scoring Form</h3>
                <br />
                
                <form>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-control'>
                                <TextField
                                    required
                                    id="name"
                                    label="Name"
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    onChange={handleChange}
                                />
                                 
                            </div>
                            <p style={{color:'red'}}>{nameErr}</p>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-control'>
                                <TextField
                                    required
                                    id="sport"
                                    label="Sport"
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    onChange={handleChange}
                                />
                                <p style={{color:'red'}}>{sportErr}</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-control'>
                                <TextField
                                    
                                    id="score"
                                    label="Score"
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-control'>
                                <TextField
                                    
                                    id="remark"
                                    label="Remarks"
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                    </div>
                    <Button variant="contained" id="submit" style={{ float: 'right' }} onClick={handleSubmit}>Submit</Button>
                </form>

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                       Success!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Score is Successfully added!
                    </Typography>
                </Box>
            </Modal>
        </div >
    );
};

export default Player;