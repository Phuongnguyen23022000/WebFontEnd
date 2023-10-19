import React from 'react';
import styled from "styled-components";

const CardContent = styled.div`
  position: relative;
  width: 400px;
  margin: 20px;
`;
const CardImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
`;
const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
  border-radius: inherit;
`;
const CardBox = styled.div`
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
background-color: white;
width: 350px;
padding: 20px 10px;
height: unset;
border-radius: 10px;
position: absolute;
display: block;
left: 50%;
transform: translate(-50%, 50%);
bottom: 0;
`;
const CardFlex = styled.div`
display: flex;
justify-content: space-between;
`;
const CardInfo = styled.div`
display: flex;
align-items: center;
`;
const CardInfoAvatar = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
object-fit: cover;
`;
const CardAvtUser = styled.img`
height: 30px;
width: 30px;
border-radius: 50%;
object-fit: cover;
`;
const CardUser = styled.span`
color: black;
font-size: 16px;
font-weight: 500;
`;
const CardLike = styled.div`
display: flex;
align-items: center;
`;
const Card = () => {
  return (
    <CardContent>
      <CardImage>
        <CardImg src="https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720__340.jpg" alt="" />
      </CardImage>
      <CardBox>
        <CardFlex>
          <CardInfo>
            <CardInfoAvatar><CardAvtUser src="https://i.pinimg.com/originals/51/53/df/5153df32a0a1b9e6647d153a41e10b24.png" alt="" /></CardInfoAvatar>
            <CardUser>Xin chao</CardUser>
          </CardInfo>
          <CardLike>
            <CardUser>hinh trai tim</CardUser>
            <CardUser>256</CardUser>
          </CardLike>
        </CardFlex>
        <CardFlex>
          <CardUser>Cosmic Perspective</CardUser>
          <CardUser>12,000 PSL</CardUser>
        </CardFlex>
      </CardBox>
    </CardContent>
  );
};

export default Card;