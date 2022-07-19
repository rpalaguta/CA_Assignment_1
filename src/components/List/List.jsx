import React, { useEffect, useState } from "react";
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
        return ' Loading...'
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

    return (
        <div className="listMain">
            {/* <div className="listHeader">
            <label className="filter">
                <input type="checkbox" id='filterImg' name='filterImg' value='image'/>
                <span>Image</span>
                <div> | </div>
                <input type="checkbox" id='filterId' name='filterId' value='id'/>
                <span>ID</span>
                <input type="checkbox" id='filterName' name='filterName' value='name'/>
                <span>Name</span>
                <input type="checkbox" id='filterStatus' name='filterStatus' value='status'/>
                <span>Status</span>
                <input type="checkbox" id='filterSpecies' name='filterSpecies' value='species'/>
                <span>Species</span>
                <input type="checkbox" id='filterType' name='filterType' value='type'/>
                <span>Type</span>
                <input type="checkbox" id='filterGender' name='filterGender' value='gender'/>
                <span>Gender</span>
                <input type="checkbox" id='filterOrigin' name='filterOrigin' value='origin'/>
                <span>Origin</span>
                <input type="checkbox" id='filterLocation' name='filterLocation' value='location'/>
                <span>Location</span>
            </label>
            </div> */}
            <div className="listContent">
                <table className="listTable highlight responsive-table">
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