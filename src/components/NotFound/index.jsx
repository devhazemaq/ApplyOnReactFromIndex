import React from 'react'
import { Alert } from 'react-bootstrap';

const NotFound = ({masssege, color}) => {
  return (
    <div>
      <Alert variant={color}>
        {masssege}
      </Alert>
    </div>
  )
}

export default NotFound;