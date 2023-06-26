import { useAPI } from "../context/ProductContext";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import CardPlaceHolder from "../components/PlaceHolder";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import SortData from "../components/SortData";

function ProductList() {
  const [catData, setCatData] = useState([]);
  const { data, isPending, error, setData, setSort, setFilterCat } = useAPI();

  useEffect(() => {
    async function getData() {
      const data = await fetch("https://fakestoreapi.com/products/categories");
      const response = await data.json();
      setCatData(response);
    }
    getData();
  }, [data]);

  function filterCategory(e) {
    const catBtns = document.querySelectorAll(".Categories-filter .add-to-cart-btn");
    catBtns.forEach((element) => {
      element.classList.remove("active");
    });

    e.target.classList.add("active");
    const newData = data.filter((item) => {
      return item.category === e.target.innerHTML;
    });
    setFilterCat(newData);
  }

  return (
    <Container fluid className="px-4">
      <Row className="mt-3">
        <h2 className="fw-bold fs-3">Todays Best Deals For you!</h2>
        <div className="Categories-filter d-flex flex-wrap align-items-center justify-content-between gap-3 my-2">
          <div className="d-flex flex-wrap gap-3">
            {catData.map((item) => {
              return (
                <Button onClick={(e) => filterCategory(e)} variant=" add-to-cart-btn border rounded-pill p-3">
                  {item}
                </Button>
              );
            })}
          </div>
          <SortData setSort={setSort} />
        </div>
        {isPending && <CardPlaceHolder />}
        {error && <div>{error}</div>}
        {data.map((item) => {
          return (
            <Col lg="3" md="6" key={item.id}>
              <ProductCard title={item.title} description={item.description} image={item.image} price={item.price} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ProductList;
