import React from 'react'
import { Button, Card } from 'react-bootstrap'


const CardDetyles = ({ title, descr, onClick, children }) => {

  const handleClick = () => {
    onClick()
  }



  return (
    <div>


      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMi7AScDcBvUu0LH_ePvboRRKzRvFRy2IqOQ&usqp=CAU" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {descr}
          </Card.Text>
          <Button onClick={handleClick} variant="primary">Go somewhere</Button>
          {children}
        </Card.Body>
      </Card>

      
    </div>
  )
}

export default CardDetyles;