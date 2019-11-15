import React from "react";
import { Card } from "reactstrap";


export default function CharacterCard(props) {
  return (
     <Col xs='6' lg='4'>
     <Card height='100%' body outline color = 'success'  className='text-left'>
     <CardBody height='100%'>
          <CardTitle className='text-center'>{props.name}</CardTitle>
          
      </CardBody>
  </Card>

</Col>
);
}
