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

    function paginationHandler(page, action) {
        switch (action) {
            case 'first':
                setPage(1)
                break;
            case 'previous':
                if(page == 1) {
                    break
                }
                setPage(page - 1)
                break;
            case 'next':
                setPage(page + 1)
                break;
            case 'last':
                // setPage(characters.info.pages)
                break
            
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
            <div className="listHeader"></div>
            <div className="listContent">
                <table className="listTable highlight responsive-table sticky-header">
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
                    <div className="button firstPage" onClick={(e) => paginationHandler(page, 'first')}> first</div>
                    <div className="button prevPage" onClick={(e) => paginationHandler(page, 'previous')}> previous</div>
                    <div className="button nextPage" onClick={(e) => paginationHandler(page, 'next')}> next</div>
                    <div className="button lastPage"> last</div>
                </div>
            </div>
        </div>
    )
}