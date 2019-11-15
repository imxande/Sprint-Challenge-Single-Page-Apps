import React from "react";
import { Card, Col, CardBody, CardText } from "reactstrap";


export default function CharacterCard(props) {
  console.log(props);
  return (
    
     <Col xs='6' lg='4'>
     <Card height='100%' body outline color = 'success'  className='text-left'>
     <CardBody className='myCard' height='100%'>
     
  <CardText >Name: {props.name}</CardText> 
  <CardText > Status: {props.status} </CardText>
  <CardText > Origin: {props.origin.name} </CardText>
  <CardText > Location: {props.location.name} </CardText>       
      </CardBody>
  </Card>

</Col>
);
}
