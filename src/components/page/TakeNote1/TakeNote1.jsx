import React from "react";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function TakeNote1(props) {

    const openNoteTwo = () => {
        props.listenToNote1()
    }

    return (
        <Box sx={{
            width: '49vw',
            height: '6vh',
            display: 'flex',

            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',

        }} >
            <Paper elevation={3} onClick={openNoteTwo} sx={{
                width: '200%',
                height: '120%',
                display: 'flex',
                flexDirection: 'row',
                borderRadius: '5px',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                left: '430px',
                top: '25px',

            }} >
                <Box sx={{
                    width: '95%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }} >
                    <Box sx={{
                        width: '40%',
                        height: '50%',
                        textAlign: 'start',
                        fontWeight: '400',
                        color: '#202124',
                    }} >
                        <span>Take a note...</span>
                    </Box>
                    <Box sx={{
                        width: '25%',
                        height: '50%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        textAlign: 'center',
                    }} >
                        <Box sx={{ width: '33%' }} ><CheckBoxOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '33%' }} ><BrushOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '33%' }}><ImageOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default TakeNote1