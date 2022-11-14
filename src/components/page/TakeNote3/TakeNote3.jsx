import * as React from 'react';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import ColorPopper from '../ColorPopper/ColorPopper';
import { archiveNotes, deleteNotes } from '../../services/dataService';

export default function TakeNote3(props) {
    const listenToColorUpdate = () => {
        props.getNote()
    }
    const updateArchive = (id) => {
        let archiveObj = { noteIdList: [id], isArchived: true }
        archiveNotes(archiveObj).then((response) => {
            console.log(response)

        }).catch((error) => { console.log(error) })

    }
    const updateDelete = (id) => {
        let deleteObj = { noteIdList: [id], isDeleted: true }
        deleteNotes(deleteObj).then((response) => {
            console.log(response)

        }).catch((error) => { console.log(error) })

    }

    return (
        <Paper elevation={0}
            sx={{
                width: 280,
                height: 150,
                backgroundColor: 'white',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'centre',
                border: '0px solid red',
                top: '0px',
                position: 'relative',

            }}
        >
            <Box style={{ backgroundColor: props.note.color }} sx={{
                border: '1px solid #cecdcd',
                borderRadius: '10px',
                height: 150,
                width: 250,
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'coulmn',
                justifyContent: 'space-between',
            }}>
                <Box sx={{
                    width: '50%',
                    height: '20%',
                    textAlign: 'start',
                    border: '0px solid red',
                }}>
                    <h3>{props.note.title}</h3>
                </Box>
                <Box sx={{
                    width: '8%',
                    height: '10%',
                    border: '0px solid red',
                    textAlign: 'start',
                    border: '0px solid black',
                }}>
                    <PushPinOutlinedIcon color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "0px", borderRadius: "50%" } }} />
                </Box>
                <Box sx={{
                    width: '100%',
                    height: '20%',
                    textAlign: 'start',
                    border: 'px solid red',
                }}>
                    <h4>{props.note.description}</h4>
                </Box>
                <Box sx={{
                    width: '100%',
                    height: '40%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    border: '0px solid red'
                }}>
                    <Box sx={{ width: '13%', border: '0px solid red' }}><AddAlertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    <Box sx={{ width: '13%', border: '0px solid red' }}><PersonAddAltOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    <Box sx={{ width: '13%', border: '0px solid red' }}><ColorPopper id={props.note.id} action="update"
                        listenToColorUpdate={listenToColorUpdate} sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    <Box sx={{ width: '13%', border: '0px solid red' }}><DeleteIcon onClick={() => updateDelete(props.note.id)} fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    <Box sx={{ width: '13%' }}><ArchiveOutlinedIcon onClick={() => updateArchive(props.note.id)} fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    <Box sx={{ width: '8%', border: '0px solid red', }}><MoreVertOutlinedIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                </Box>
            </Box>
        </Paper>
    );
}