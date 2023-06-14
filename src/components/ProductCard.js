import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProductCard({ title, price, image, description }) {
  return (
    <Card className="border-0">
      <Card.Img
        class="card-img-top rounded object-fit-cover p-5"
        style={{ height: "300px", objectFit: "contain" }}
        src={image ? image : require("../images/placeholder-image.png")}
      />
      <Card.Body className="px-0">
        <div className="d-flex justify-content-between mb-2 align-items-center">
          <Card.Title className="mb-0 " style={{ fontWeight: "600" }}>
            {title.substring(0, 20)}
          </Card.Title>
          <div className="price fs-5" style={{ fontWeight: "600" }}>
            ${price}
          </div>
        </div>
        <small className="text-grey d-block">{description.substring(0, 50)}...</small>
        <Button variant=" my-2 add-to-cart-btn border border-dark rounded-pill px-3">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
