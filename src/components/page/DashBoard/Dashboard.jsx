import { useState, useEffect } from 'react'
import { getNoteList } from '../../services/dataService'
import Header from '../Header/Header'
import TakeNote1 from '../TakeNote1/TakeNote1'
import TakeNote2 from '../TakeNote2/TakeNote2'
import TakeNote3 from '../TakeNote3/TakeNote3'

function Dashboard() {
    // Declare a new state variable, which we'll call "toggle"
    const [toggle, setToggle] = useState(false)
    // Declare a new state variable, which we'll call "noteList"
    const [noteList, setNoteList] = useState([])

    
    const listenToNote1 = () => {
        setToggle(true)
    }

    const listenToNote2 = () => {
        setToggle(false)
    }
    const getNote = () => {
        getNoteList().then((response) => {
            console.log(response)//trigger use effect hook
            setNoteList(response.data.data.data)//fetching data 

        })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getNote()
    }, [])//(fetch call only once)second argument to the useEffect hook function.

    return (

        <div>
            <Header />

            <div>
                {
                    toggle ? <TakeNote2 listenToNote2={listenToNote2} /> : <TakeNote1 listenToNote1={listenToNote1} />
                }
                <div style={{ display: 'flex', flexDirection: 'row', border: '0px solid red', flexWrap: 'wrap',justifyContent:'flex-end', width: '90vw', height: '150vh', marginLeft: '130px', marginTop: '60px' }}>
                    {
                        //saving the response into a local state variable 
                        noteList.map((note) => (<TakeNote3 note={note} getNote={getNote} />))
                    }
                </div>
            </div>

        </div>
    )
}

export default Dashboard