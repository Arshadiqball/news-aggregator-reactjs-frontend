import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../../store/action/authActions"
import { Container, Header } from "./index"
import { capitaLize } from '../../assets/utils/helper'
import { Row, Col, Form, Button } from "react-bootstrap"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const Label = styled(Form.Label)`
    color: white
  `

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const { name, email, password, password_confirmation } = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await dispatch(
        register({ name, email, password, password_confirmation })
      )
      if (response.type === "REGISTER_SUCCESS") {
        toast.success(response.payload.message)
        navigate('/login')
      } else {
        toast.error(response.payload)
      }
    } catch (error) {
      toast.error("An error occurred during registration.")
    }
  }

  const title = capitaLize("Register")
  document.title = capitaLize(title)

  return (
    <Container>
      <Header>{capitaLize(title)}</Header>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Label>Name</Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
                name="name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Label>Email address</Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleChange}
                name="email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Label>Password</Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
                name="password"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Label>Confirm Password</Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={password_confirmation}
                onChange={handleChange}
                name="password_confirmation"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>

          <p className="mt-3 text-center">
            Already have an account? <Link to="/login">Back to Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
