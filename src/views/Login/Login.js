import React, { useState, useContext } from "react"
import Context from './../../context/UserContext'
import { Container, Header } from './index'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { capitaLize } from '../../assets/utils/helper'
import { Toaster } from './../../components/Toaster'
import { Link } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import styled from "styled-components"
import { getToken } from "../../services/authorization"

const LoginForm = styled(Form)`
  margin-top: 50px
`

const Label = styled(Form.Label)`
  color: black
`

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const { email, password } = formData

  const {
    login
  } = useContext(Context)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(formData)
    if (getToken()) {
      Toaster.toastSuccess({
        message: "Logged in",
      })
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }
  }

  const title = capitaLize('Login')
  document.title = capitaLize(title)

  return (
    <div>
      <Header>{capitaLize(title)}</Header>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <LoginForm onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Label>Email address</Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Label>Password</Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </LoginForm>

            <p className="mt-3 text-center">
              <Link to="/register">Create an Account</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
