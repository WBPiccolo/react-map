import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AnagraficaManager = ({onSave}) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(name, surname,  email);
        if(!email || !name || !surname) {
            alert('Per Favore inserisci tutti i campi');
            return;
        } 
        onSave({ name, surname, email })
    }

    return(
        <Row>
            <Col>
                <Card className="text-center">
                <Card.Body>
                    <Card.Title>Inserisci i tuoi dati</Card.Title>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
                            <Form.Label>Cognome</Form.Label>
                            <Form.Control type="text" placeholder="Cognome" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                        <Button variant="primary" type="submit" onClick={onSubmit}>Avanti</Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default AnagraficaManager;
