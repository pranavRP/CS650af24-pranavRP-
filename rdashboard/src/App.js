import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Form, FormControl, Button, Dropdown, Card, Table, ProgressBar } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaHome, FaFilm, FaUsers, FaCog, FaSignOutAlt, FaBell, FaUser, FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const topRatings = [
    { name: 'Top Gun Maverick', rating: 95 },
    { name: 'Inception', rating: 90 },
    { name: 'Interstellar', rating: 82 },
    { name: 'The Dark Knight', rating: 76 },
    { name: 'Joker', rating: 52 },
  ];

  const raters = [
    { name: 'Rotten Tomatoes', value: 45 },
    { name: 'IMDb', value: 30 },
    { name: 'Fandango', value: 20 },
    { name: 'Metacritic', value: 5 },
  ];

  return (
    <div className="dashboard">
      {/* Navigation Sidebar */}
      <Nav className={`flex-column bg-dark sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-sticky">
          <Nav.Link href="#"><FaHome /> Dashboard</Nav.Link>
          <Nav.Link href="#"><FaFilm /> Movies</Nav.Link>
          <Nav.Link href="#"><FaUsers /> Reviewers</Nav.Link>
          <Nav.Link href="#"><FaCog /> Settings</Nav.Link>
          <Nav.Link href="#"><FaSignOutAlt /> Logout</Nav.Link>
        </div>
      </Nav>

      <div className="main-content">
        {/* Header */}
        <Navbar bg="white" expand="lg" className="mb-4">
          <Button variant="outline-secondary" onClick={toggleSidebar} className="mr-2">
            ☰
          </Button>
          <Form inline className="ml-auto d-flex">
            <FormControl type="text" placeholder="Search movies" className="mr-sm-2" />
            <Button variant="outline-success"><FaSearch /></Button>
          </Form>
          <Nav className="ml-2">
            <Nav.Link href="#"><FaBell /></Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                <FaUser /> Admin
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar>

        {/* Main Content Area */}
        <Container fluid>
          {/* Summary Statistics */}
          <Row className="mb-4">
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Total Reviews</Card.Title>
                  <Card.Text className="h2">500M+</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Average Rating</Card.Title>
                  <Card.Text className="h2">8.5/10</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Global Box Office</Card.Title>
                  <Card.Text className="h2">$50B+</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>YoY Growth</Card.Title>
                  <Card.Text className="h2">12%</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Chart Widget */}
          <Row className="mb-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Top Movies by Rating</Card.Title>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={topRatings}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="rating" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Platform Distribution and Performance Metrics */}
          <Row>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Rating Platform Distribution</Card.Title>
                  <Table striped bordered hover responsive="sm">
                    <thead>
                      <tr>
                        <th>Platform</th>
                        <th>Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {raters.map((rater) => (
                        <tr key={rater.name}>
                          <td>{rater.name}</td>
                          <td>{rater.value}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Movie Performance Metrics</Card.Title>

                  <div className="mb-3">
                    <div>Critical Acclaim</div>
                    <ProgressBar now={90} label={`90%`} />
                  </div>

                  <div className="mb-3">
                    <div>Audience Engagement</div>
                    <ProgressBar now={85} label={`85%`} />
                  </div>

                  <div>
                    <div>Box Office Success</div>
                    <ProgressBar now={75} label={`75%`} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Footer */}
        <footer className="text-center py-3 mt-4">
          <p>&copy; 2024 Movie Review Analytics. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </footer>
      </div>
    </div>
  );
};

export default App;
