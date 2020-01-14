import React from 'react';
import styled from 'styled-components';

const HouseCard = styled.div`
  width: 80%;
  max-width: 550px;
  margin: 50px auto;
  background-color: white;
  opacity: 0.9;
  padding-bottom: 20px;
  h2 {
    padding: 10px;
    margin-top: 0;
    font-size: 30px;
  }
  p {
    margin: 20px 2%;
  }
  ul {
    width: 50%;
    margin: 0 auto;
  }
  li {
    list-style-type: square;
    text-align: left;
  }
`;

const House = props => {
  return (
    <HouseCard style={{ border: `6px solid ${props.house.maincolor}`}}>
      <h2
        style={{
          backgroundColor: `${props.house.maincolor}`,
          color: `${props.house.textcolor},`
        }}
      >Congrats! You are now part of House {props.house.name}
      </h2>
      <img alt={`${props.house.name}`} src={props.house.img} />
      <p>
      House {props.house.name} was founded by {props.house.founder} and values
        the following traits:
      </p>
    </HouseCard>
  )
}