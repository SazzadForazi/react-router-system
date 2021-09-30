import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Card from 'react-bootstrap/Card'
import { Col, Row } from 'react-bootstrap';
const SingleEmployee = () => {
    let { id } = useParams()
    const [employeesDetails, setEmployeesDetails] = useState([])

    //data lowr jonne
    useEffect(() => {
        fetch('/employeeDetails.json')
            .then(res => res.json())
            .then(data => setEmployeesDetails(data.employee))
    }, [])

    const [singleEmployee, setSingleEmployee] = useState([])
    //data load hoiye jokhn state e set hobe
    useEffect(() => {
        const foundEmployee = employeesDetails.find(employee => employee.login.id === id)
        setSingleEmployee(foundEmployee);
    }, [employeesDetails])

    return (
        <div>
            <Row xs={5} md={4} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={singleEmployee?.picture?.thumbnail} />
                            <Card.Body>
                                <Card.Title>{singleEmployee?.name}</Card.Title>
                                <Card.Text>
                                    <b>Email:{singleEmployee?.email}</b>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default SingleEmployee;