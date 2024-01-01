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

const ModelUser = {
  nama: "",
  divisi: "",
};

const dataProdukFake = [
  {
    id: 36,
    access: "1c1c2b0e-dd14-46b1-a7ee-99b03942e768",
    division: false,
    balance: "$3,297.94",
    picture:
      "https://icons.iconarchive.com/icons/gartoon-team/gartoon-action/32/draw-cuboid-icon.png",
    age: 40,
    eyeColor: "brown",
    name: "Daphne Goff",
    gender: "female",
    company: "QUONATA",
    email: "daphnegoff@quonata.com",
    phone: "+1 (956) 598-2993",
    address: "688 Woodrow Court, Carlton, Tennessee, 1933",
    registered: "2019-07-24T04:51:23 -07:00",
    latitude: 35.908922,
    longitude: 25.553756,
  },
  {
    id: 1,
    access: "6004bd6b-35a2-44b9-9dca-db1741c86c3a",
    division: false,
    balance: "$3,550.91",
    picture:
      "https://icons.iconarchive.com/icons/gartoon-team/gartoon-action/32/document-print-preview-icon.png",
    age: 34,
    eyeColor: "green",
    name: "Lowery Payne",
    gender: "male",
    company: "ROCKYARD",
    email: "lowerypayne@rockyard.com",
    phone: "+1 (939) 503-3536",
    address: "793 Jerome Street, Fairmount, Maine, 4631",
    registered: "2020-02-01T12:52:50 -07:00",
    latitude: 77.268735,
    longitude: 54.764778,
  },
  {
    id: 2,
    access: "b249af68-30be-47c7-a42f-4626706b66c0",
    division: true,
    balance: "$2,922.44",
    picture:
      "https://icons.iconarchive.com/icons/gartoon-team/gartoon-action/32/contact-new-icon.png",
    age: 21,
    eyeColor: "green",
    name: "Myers Burgess",
    gender: "male",
    company: "INDEXIA",
    email: "myersburgess@indexia.com",
    phone: "+1 (971) 475-3185",
    address: "580 Gerry Street, Logan, Federated States Of Micronesia, 1987",
    registered: "2022-01-04T08:53:13 -07:00",
    latitude: 6.942103,
    longitude: -152.065917,
  },
  {
    id: 3,
    access: "98ee213f-95c3-4e7e-a037-cddec2637041",
    division: false,
    balance: "$1,198.03",
    picture:
      "https://icons.iconarchive.com/icons/gartoon-team/gartoon-action/32/appointment-new-icon.png",
    age: 33,
    eyeColor: "brown",
    name: "Luz Hayes",
    gender: "female",
    company: "XINWARE",
    email: "luzhayes@xinware.com",
    phone: "+1 (893) 460-2747",
    address: "938 Remsen Avenue, Bloomington, Hawaii, 1013",
    registered: "2022-03-04T05:09:57 -07:00",
    latitude: 14.33768,
    longitude: 166.615893,
  },
  {
    id: 4,
    access: "38f92d9e-7395-4319-9776-46a14b5df6f3",
    division: false,
    balance: "$3,033.68",
    picture:
      "https://icons.iconarchive.com/icons/gartoon-team/gartoon-action/32/adjust-colors-icon.png",
    age: 37,
    eyeColor: "blue",
    name: "Betsy Delaney",
    gender: "female",
    company: "MAGNINA",
    email: "betsydelaney@magnina.com",
    phone: "+1 (919) 462-2364",
    address: "465 Overbaugh Place, Tecolotito, Ohio, 8845",
    registered: "2017-03-10T12:29:55 -07:00",
    latitude: 51.507371,
    longitude: 15.649653,
  },
];

const ModelProduk = {
  name: "",
  age: 0,
  gender: "",
  balance: "",
  picture: "",
};

const App = () => {
  // const [user, setUser] = useState(ModelUser);
  const [daftarProduk, setDaftarProduct] = useState(dataProdukFake);
  const [produk, setProduk] = useState(ModelProduk);

  const handleChangeProduk = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduk({ ...produk, [name]: value });
  };

  const onProductCreate = () => {
    setDaftarProduct([...daftarProduk, produk]);
  };

  const onProductSelected = (value) => {
    setProduk(value);
  };

  const onProductUpdate = () => {
    let dataTemp = daftarProduk.map((value) => {
      let temp = value;
      if (value.id === produk.id) {
        temp = { ...value, ...produk };
      }

      return temp;
    });

    setDaftarProduct(dataTemp);
  };

  const generateID = () => {
    return ((Math.random() * 1000) + 1)
  }

  const onProductRemove = (obj) => {
    const conf = window.confirm(`Yakin ingin menghapus data ${obj.name}?`);

    if (conf) {
      const temp = daftarProduk.filter((value) => value.id !== obj.id);
      setDaftarProduct(temp);
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
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name={"name"}
                    value={produk.name || ""}
                    onChange={handleChangeProduk}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    name={"age"}
                    type={"number"}
                    value={produk.age || ""}
                    onChange={handleChangeProduk}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    name={"gender"}
                    onChange={handleChangeProduk}
                    value={produk.gender}
                  >
                    <option>Choose Gender</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Balance</Form.Label>
                  <Form.Control
                    name={"balance"}
                    value={produk.balance || ""}
                    onChange={handleChangeProduk}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control
                    name={"picture"}
                    type={"text"}
                    value={produk.picture || ""}
                    onChange={handleChangeProduk}
                  ></Form.Control>
                </Form.Group>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-end">
                <div>
                  {produk.id ? (
                    <ButtonGroup>
                      <Button onClick={onProductUpdate}>Update</Button>
                      <Button
                        onClick={() => {
                          setProduk(ModelProduk);
                        }}
                      >
                        Cancel
                      </Button>
                    </ButtonGroup>
                  ) : (
                    <Button onClick={onProductCreate}>Save</Button>
                  )}
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Daftar Produk</Card.Title>
              </Card.Body>
              <Table striped={true} responsive={true} borderless>
                <thead>
                  <tr>
                    <th>Nama</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Balance</th>
                    <th>Picture</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {daftarProduk.map((value, index) => (
                    <tr key={index}>
                      <td>{value.name}</td>
                      <td>{value.gender}</td>
                      <td>{value.age}</td>
                      <td>{value.balance}</td>
                      <td>
                        <img src={value.picture} />
                      </td>
                      <td>
                        <ButtonGroup>
                        <Button variant="warning" onClick={() => onProductSelected(value)}>
                          Edit
                        </Button>
                        <Button variant="danger" onClick={() => onProductRemove(value)}>
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
