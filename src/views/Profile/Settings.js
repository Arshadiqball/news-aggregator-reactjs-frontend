import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Settings = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    notifications: false, 
    theme: 'light', 
    language: 'en', 
  })

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logic to update settings data (e.g., make API call to update user settings)
    console.log('Form submitted with data:', formData)
  }

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="mb-4">
            <h2>{capitalize('Settings')}</h2>
            <Form onSubmit={handleSubmit}>
              {/* Account settings */}
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Notification settings */}
              <Form.Group controlId="formNotifications">
                <Form.Check
                  type="checkbox"
                  label="Enable notifications"
                  name="notifications"
                  checked={formData.notifications}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Theme settings */}
              <Form.Group controlId="formTheme">
                <Form.Label>Theme</Form.Label>
                <Form.Control
                  as="select"
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </Form.Control>
              </Form.Group>

              {/* Language settings */}
              <Form.Group controlId="formLanguage">
                <Form.Label>Language</Form.Label>
                <Form.Control
                  as="select"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                >
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  {/* Add more language options as needed */}
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit">
                Save Settings
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Settings
