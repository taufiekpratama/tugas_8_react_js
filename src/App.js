import ShowModal from './ShowModal';
import {
  Button,
  Container,
  Row,
  Col,
  Media,
  Alert,
  Badge,
  Breadcrumb,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Navbar,
  Dropdown,
  Figure,
  Carousel,
  ListGroup,
  Jumbotron,
  Form,
  Modal,
  Image,
} from "react-bootstrap";

function App() {
  return (
    <div>
      {/* <Button varian="primary">Testing</Button>
      <h1>Hello Bootstrap</h1> */}
      <Container style={{ color: "white" }} fluid>
        <Row className="bg-dark">
          <Col>
            <Dropdown className="float-left">
              <Dropdown.Toggle>Pilih Bahasa</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Indonesia</Dropdown.Item>
                <Dropdown.Item>English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Figure className="float-right m-auto">
              <Figure.Image
                width={30}
                height={30}
                src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
              />
              <Figure.Caption>Alan Saputra</Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
      <Breadcrumb className="w-25 float-right">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
        <Breadcrumb.Item href="/" active>
          Bola
        </Breadcrumb.Item>
      </Breadcrumb>
      <br />
      <Container className="mt-5" fluid>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs
              -montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
              />
              <Carousel.Caption>
                <h3>Tiket Pesawat Murah</h3>
                <p>Dapatkan Promo Tiket Pesawat Murah</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs
              -montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
              />
              <Carousel.Caption>
                <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4
              yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                alt="Travel 3"
              />
              <Carousel.Caption>
                <h3>Tiket Pesawat Murah 3</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item>Divisi Primera</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
              
            </ListGroup>
          </Col>
          <Col>
            <Jumbotron>
              <h1>DIVISI PRIMERA</h1>
              <p>Main Untuk Catalunya, Gerard Pique Minta Dihotmati</p>
              <Button variant="primary">Read More</Button>
            </Jumbotron>
          </Col>
          <Col>
            <Form>
              <center>
              <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                  width={50}
                  height={50}
                  className="text-center"
                />
                <h5>Silahkan Login</h5>
              </center>
              <Form.Group>
                
                <Form.Control
                  type="email"
                  placeholder="Masukkan Email"
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Password"
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Term & Condition"
                ></Form.Check>
              </Form.Group>
              <ShowModal/>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
