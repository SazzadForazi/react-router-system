import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Employee = () => {

    const [employees, setEmployees] = useState([])
    const [matchedEmployees, setMatchedEmployees] = useState([])

    //input box e change receive korar handlers

    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase()
        const matchedEmployee = employees.filter(employee => Employee.name.toLowerCase().includes(searchValue))
        setMatchedEmployees(matchedEmployee)
    }

    useEffect(() => {
        fetch('/employeeData.json')
            .then(res => res.json())
            .then(data => {
                setEmployees(data)
                setMatchedEmployees(data)

            });
    }, [])

    return (
        <Container className="my-5">
            <Form style={{ width: '40%' }} className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleSearch}
                />
            </Form>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Table heading</th>

                    </tr>
                </thead>
                <tbody>
                    {

                        matchedEmployees.map(employee => (
                            <tr>
                                <td>{employee?.id}</td>
                                <td>image</td>
                                <td>{employee?.name}</td>
                                <td>{employee?.designation}</td>
                                <td>
                                    <NavLink
                                        to={`/employee/${employee?.id}`}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                    >
                                        Details
                                    </NavLink>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table></Container>
    );
};

export default Employee;