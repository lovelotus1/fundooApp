import React, { useState } from "react";
//import './notetwostyle.css';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Button from '@mui/material/Button';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { postNotes } from "../../services/dataService";
import ColorPopper from "../ColorPopper/ColorPopper"





function TakeNote2(props) {
    // Declare a new state variable, which we'll call "inputFields"
    const [inputFields, setInputFields] = useState({ title: '', description: '', color: '', isArchived: false, isDeleted: false })

    const openNoteOne = () => {
        props.listenToNote2()
        postNotes(inputFields).then((response) => {
            console.log(response);

        }).catch((error) => { console.log(error) })

    }
    const takingTitle = (event) => {
        setInputFields(prevState => ({
            ...prevState,//useState does not merge the state automatically.
            //We have to do it manually with the help of spread operator.
            title: event.target.value //event source of the callback.
        }))
        console.log(event.target.value)
    }
    const takingDes = (event) => {
        setInputFields(prevState => ({
            ...prevState,
            description: event.target.value
        }))
        console.log(event.target.value)
    }
    const listenToColorPopper = (colour) => {
        setInputFields(prevState => ({
            ...prevState,
            color: colour
        }))
    }
    const archiveUpdate = () => {
        setInputFields(prevState => ({
            ...prevState,
            isArchived: true
        }))
        console.log("Note Archived")
    }
    return (
        <Box sx={{
            border: '0px solid red',
            width: '49vw',
            height: '18vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'relative',
        }}>
            <Paper elevation={4} style={{ backgroundColor: inputFields.color }} sx={{
                width: '100%',
                height: '120%',
                border: '0px solid #cecdcd',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                left: '450px',
                top: '25px',
            }}>
                <Box sx={{
                    width: '95%',
                    height: '60%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    color: '#202124',
                    fontWeight: '400',
                }}>
                    <Box sx={{
                        width: '100%',
                        height: '35%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            width: '50%',
                            height: '100%',
                            textAlign: 'start',
                        }}>
                            <InputBase placeholder='Title' onChange={takingTitle} />
                        </Box>
                        <Box sx={{
                            width: '7%',
                            border: '0px solid red'
                        }}>
                            <PushPinOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "6px", borderRadius: "50%" } }} />
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        height: '30%',
                        textAlign: 'start',
                    }}>
                        <InputBase placeholder='Take a note...' onChange={takingDes} />
                    </Box>
                </Box>
                <Box sx={{
                    width: '97%',
                    height: '30%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        width: '65%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '0px solid red'
                    }}>
                        <Box sx={{ width: '11%', border: '0px solid red' }}><AddAlertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '11%', border: '0px solid red' }}><PersonAddAltOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '11%', border: '0px solid red' }}><ColorPopper listenToColorPopper={listenToColorPopper} action="create" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '11%', border: '0px solid red' }}><ImageOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '11%' }}><ArchiveOutlinedIcon onClick={archiveUpdate} fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '11%' }}><MoreVertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '11%' }}><UndoOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '11%' }}><RedoOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    </Box>
                    <Box sx={{ width: '15%' }}><Button variant="Close" style={{ textTransform: 'capitalize' }} fullWidth="true" onClick={openNoteOne}>Close</Button></Box>
                </Box>
            </Paper >
        </Box >
    )
}

export default TakeNote2 