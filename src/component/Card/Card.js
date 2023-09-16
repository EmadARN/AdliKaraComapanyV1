import Card from "react-bootstrap/Card";
import "./Card.css";
function Cards({ icon, title, text, animation, Delay }) {
  return (
    <Card className="cards">
      <Card.Body
        className={`bg-light rounded text-center p-4 ${animation}`}
        data-wow-delay={Delay}
      >
        <i className={`p-4 text-primary ${icon}`}></i>
        <Card.Title className="mb-3 fw-bold text-secondary">{title}</Card.Title>
        <Card.Text className="m-0">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
