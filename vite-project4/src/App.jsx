import {useEffect, useRef, useState} from "react";
import {Button, ButtonGroup, Card, Col, Container, Form, Row, Table} from "react-bootstrap";
import axios from "axios";


const App = () => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})

  const onProductList = () => {
    axios.get("https://6316526b82797be77fe34d6a.mockapi.io/kip").then((response) => {
      setProducts(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const onSelectProduct = (value) => {
    setProduct(value);
  }

  const onChangeProduct = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProduct({...product, [name]: value});
  }

  const onProductUpdate = () => {
    axios.put(
      `https://6316526b82797be77fe34d6a.mockapi.io/kip/${product.id}`,
      product
    ).then((response) => {
      onProductList()
      setProduct({});
      // setProducts(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    onProductList();
  }, []);

  // klik baris data products
  // masukkan data tersebut ke dalam state single (select data)
  // tampilkan di form dan edit sesuatu di dalamnya
  // ketika menekan update (tombol), maka kirim data yang diubah
  // ke server

  return (
    <>
      <Container className={"mt-5"}>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Form Product</Card.Title>
                <Form.Group className={"mb-3"}>
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    name={"nama"}
                    value={product.nama || ""}
                    onChange={onChangeProduct}
                  />
                </Form.Group>
                <Form.Group className={"mb-3"}>
                  <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Control
                    type={"datetime"}
                    name={"tanggalLahir"}
                    value={product.tanggalLahir || ""}
                    onChange={onChangeProduct}
                  />
                </Form.Group>
                <Form.Group className={"mb-3"}>
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    name={"alamat"}
                    value={product.alamat || ""}
                    onChange={onChangeProduct}
                  />
                </Form.Group>
              </Card.Body>
              <Card.Footer className={"d-flex justify-content-end"}>
                <Button onClick={onProductUpdate}>Update</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>Products</Card.Title>
              </Card.Body>
              <Table responsive={true} striped={true}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NIK</th>
                    <th>Nama</th>
                    <th>Tanggal Lahir</th>
                    <th>Alamat</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((value) => (
                    <tr key={value.nik}>
                      <td>{value.id}</td>
                      <td>{value.nik}</td>
                      <td>{value.nama}</td>
                      <td>{value.tanggalLahir}</td>
                      <td>{value.alamat}</td>
                      <td>
                        <ButtonGroup>
                          <Button onClick={() => onSelectProduct(value)}>Edit</Button>
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
  )
}

export default App



