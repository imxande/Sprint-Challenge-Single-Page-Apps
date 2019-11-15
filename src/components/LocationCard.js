import React from "react";
import {Card} from 'reactstrap';

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <h2>Name: {name}</h2> <br/>
      <p>Dimension: {dimension}</p>
      <h3>Type: {type} </h3>
      <h3>Residents: {residents}</h3>
    </Card>
  );
}
