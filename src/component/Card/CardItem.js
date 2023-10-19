import React from "react";
import styled from "styled-components";
import { DataProduct } from "../../dataProduct";

const CardProduct = styled.div`
width: 400px;
height: 400px;
background-color: #2cccff;
`;
const CardItem = () => {
  return (
    <CardProduct>
      {DataProduct.map((index, item) => {
        return (
          <CardItem key={index.id} title={item.title} />
        );
      })}
    </CardProduct>
  )
}
export default CardItem;