import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';

function Read() {
    const [result, setResult] = useState([]);

    function getData() {
        axios.get('https://66045d262ca9478ea17dde2f.mockapi.io/crud-app')
            .then((response) => {
                console.log(response.data)
                setResult(response.data);
            })
    }
    function handleDelete(id) {
        axios.delete(`https://66045d262ca9478ea17dde2f.mockapi.io/crud-app/${id}`)
            .then(() => {
                getData();
            })
    }
    function setStorage(id,name,email){
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);

    }
    // const navigate = useNavigate();
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <h2>Read</h2>
            <Table striped hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td><Link to='/edit'><Button variant="success" onClick={()=>setStorage(item.id,item.name,item.email)}>EDIT</Button>{' '}</Link></td>
                                        <td><Button variant="danger" onClick={() => {
                                            if (window.confirm('Do you want to Delete ?')) { handleDelete(item.id) }
                                        }}>DELETE</Button>{' '}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
            <div className="d-grid gap-2">
                <Link to={'/'}>
                <Button variant="primary" size="lg">+ Create</Button>
                </Link>
                
            </div>

        </div>
    )
}

export default Read