import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from "react";
import * as React from 'react';
import './list.css'


export default function List() {

    const [characters, setCharacters] = useState(0);
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then((res) => res.json())
                .then((res) => {setCharacters(res.results)})
    }, [page])

    if(!characters) {
        return (
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
        )
    }

    function paginationHandler(action) {
        switch (action) {
            case 'first':
                setPage(1)
                break;
            case 'previous':
                if(page === 1) {
                    break
                }
                setPage(page - 1)
                break;
            case 'next':
                setPage(page + 1)
                break;
            case 'last':
                setPage(42) //išsiaiškinti kaip gauti page count iš 'res.info.pages'
                break;
            default:
                break;
        }
    }

    function renderTable(characters) {
        return (
            characters.map((character) => (
                <tr>
                    <td>
                        <img src={character.image} alt="" srcset="" />
                    </td>
                    <td>{character.id}</td>
                    <td>{character.name}</td>
                    <td>{character.status}</td>
                    <td>{character.species}</td>
                    <td>{character.type}</td>
                    <td>{character.gender}</td>
                    <td>{character.origin.name}</td>
                    <td>{character.location.name}</td>
                </tr>
            ))
        )
    }

    // function filterTable() {

    // }

    return (
        <div className="listMain">
            <div className="filters">
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Image" id='filterImg'/>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="ID" id='filterId'/>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Name" id='filterName'/>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Status" id='filterStatus'/>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Species" id='filterSpecies'/>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Type" id='filterType'/>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Gender" id='filterGender'/>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Origin" id='filterOrigin'/>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Location" id='filterLocation'/>
                </FormGroup>
            </div>
            <div className="listContent">
                <table className="listTable centered highlight responsive-table">
                    <thead className="tableHead">
                        <tr>
                            <th>Image</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Species</th>
                            <th>Type</th>
                            <th>Gender</th>
                            <th>Origin</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable(characters)}
                    </tbody>
                </table>
                <div className="pagination">
                    <div className="button firstPage" onClick={(e) => paginationHandler('first')}> first</div>
                    <div className="button prevPage" onClick={(e) => paginationHandler('previous')}> previous</div>
                    <div className="pageDisplay">{page}</div>
                    <div className="button nextPage" onClick={(e) => paginationHandler('next')}> next</div>
                    <div className="button lastPage" onClick={(e) => paginationHandler('last')}> last</div>
                </div>
            </div>
        </div>
    )
}