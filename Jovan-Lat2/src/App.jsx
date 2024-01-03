import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
  Form,
  Table,
} from "react-bootstrap";

const dataContact = [
  {
    id: 1,
    nama: "Jovan Hariono",
    nomorHp: "082339049510"
  },
  {
    id: 2,
    nama: "Yanwar",
    nomorHp: "082331231231"
  }
];

const ModelContact = {
  id: "",
  nama: "",
  nomorHp: "",
};

const App = () => {
  const [daftarContact, setDaftarContact] = useState(dataContact);
  const [contact, setContact] = useState(ModelContact);

  const handleChangeContact = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({ ...contact, [name]: value });
  };

  const onContactCreate = () => {
    setDaftarContact([...daftarContact, contact]);
    setContact(ModelContact)
  };

  const onContactSelected = (value) => {
    setContact(value);
  };

  const onContactUpdate = () => {
    let dataTemp = daftarContact.map((value) => {
      let temp = value;
      if (value.id === contact.id) {
        temp = { ...value, ...contact };
      }

      return temp;
    });

    setDaftarContact(dataTemp);
  };

  const generateID = () => {
    return (Math.floor((Math.random() * 1000) + 1))
  }

  const onContactRemove = (obj) => {
    const conf = window.confirm(`Yakin ingin menghapus data ${obj.nama}?`);

    if (conf) {
      const temp = daftarContact.filter((value) => value.id !== obj.id);
      setDaftarContact(temp);
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Form Products</Card.Title>
                <Form.Group className="mb-3">
                  <Form.Control
                    name={"id"}
                    value={generateID()}
                    onChange={handleChangeContact}
                    type="hidden"
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name={"nama"}
                    value={contact.nama || ""}
                    onChange={handleChangeContact}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Nomor Hp</Form.Label>
                  <Form.Control
                    name={"nomorHp"}
                    type={"number"}
                    value={contact.nomorHp || ""}
                    onChange={handleChangeContact}
                  ></Form.Control>
                </Form.Group>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-end">
                <div>
                  {contact.id ? (
                    <ButtonGroup>
                      <Button onClick={onContactUpdate}>Update</Button>
                      <Button
                        onClick={() => {
                          setContact(ModelContact);
                        }}
                      >
                        Cancel
                      </Button>
                    </ButtonGroup>
                  ) : (
                    <Button onClick={onContactCreate}>Save</Button>
                  )}
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Daftar Contact</Card.Title>
              </Card.Body>
              <Table striped={true} responsive={true} borderless>
                <thead>
                  <tr>
                    {/* <th>Id</th> */}
                    <th>Nama</th>
                    <th>Nomor Hp</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {daftarContact.map((value, index) => (
                    <tr key={index}>
                      {/* <td>{value.id}</td> */}
                      <td>{value.nama}</td>
                      <td>{value.nomorHp}</td>
                      <td>
                        <ButtonGroup>
                        <Button variant="warning" onClick={() => onContactSelected(value)}>
                          Edit
                        </Button>
                        <Button variant="danger" onClick={() => onContactRemove(value)}>
                          Delete
                        </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>      
    </>
  );
};

export default App;
