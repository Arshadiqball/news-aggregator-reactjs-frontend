import React from 'react'
import { Container } from './index'
import Settings from './Settings'
import Preferences from './Preferences'
import { Row, Col } from 'react-bootstrap'

const Profile = () => {

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  document.title = capitalize('Profile')

  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="mb-4">
              <Preferences />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
