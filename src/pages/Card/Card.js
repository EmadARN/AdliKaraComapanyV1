import { React, useState } from "react";
import CardDatas from "../../CardData";
import Cards from "../../component/Card/Card";
import { Container, Col, Row } from "react-bootstrap";
const Card = () => {
  const [CardDatasBox, setCardDatasBox] = useState(CardDatas);
  return (
    <Container className="mt-5">
      <Row>
        {CardDatasBox.map((items) => (
          <Col lg={4}>
            <Cards {...items}></Cards>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Card;
