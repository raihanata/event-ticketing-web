import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const SearchEvent = () => {


    const eventList = [
        {
            label: 'first event',
            year: 1111
        },
        {
            label: 'second event',
            year: 1111
        },
        {
            label: 'third event',
            year: 1111
        },

    ]

    const eventplace = [
        {
            label: 'india'

        },
        {
            label: 'Qatar'
        },
         {
            label: 'Indonesia'
        }
    ]
     const eventdate = [
        {
            label: 'india'

        },
        {
            label: 'Qatar'
        },
         {
            label: 'Indonesia'
        }
    ]
    return (
        <div className="container searchdiv">
            <div >
                <h6>Search Event</h6>
                <Autocomplete
                    disablePortal
                    options={eventList}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label=" Search Event" style={{ backgroundColor:'white' }} />}
                />
            </div>
            <div>
                <h6>Place</h6>
                <Autocomplete
                    disablePortal
                    options={eventplace}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label=" Search Place" style={{backgroundColor:'white'  }} />}
                />
            </div>
            <div>
                <h6>Time</h6>
                <Autocomplete
                    disablePortal
                    options={eventdate}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Date" style={{backgroundColor:'white'  }} />}
                />
            </div>
        </div>
    )
}

export default SearchEvent