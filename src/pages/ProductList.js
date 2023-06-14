import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useFetch } from "../utils/useFetch";
import CardPlaceHolder from "../components/PlaceHolder";
import { useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const buttonsRefs = useRef([]);
  const dropDownItems = ["Price: Low to High", "Price: High to low", "Date Added"];
  const [catData, setCatData] = useState([]);
  const { data, isPending, error, setData } = useFetch("https://fakestoreapi.com/products");
  useEffect(() => {
    async function getData() {
      const data = await fetch("https://fakestoreapi.com/products/categories");
      const response = await data.json();
      setCatData(response);
    }

    if (buttonsRefs.current.length > 0) {
      buttonsRefs.current[0].addEventListener("click", function () {
        const filterData = data.sort(function (a, b) {
          return a.price - b.price;
        });
        setData(filterData);
      });
      buttonsRefs.current[1].addEventListener("click", function () {
        const filterData = data.sort(function (a, b) {
          return b.price - a.price;
        });
        setData(filterData);
      });

      console.log(buttonsRefs);
    }
    getData();
  }, [data]);

  const pushRef = (el) => buttonsRefs.current.push(el);

  return (
    <Container fluid className="px-4">
      <Row className="mt-3">
        <h2 className="fw-bold fs-3">Todays Best Deals For you!</h2>
        <div className="Categories-filter d-flex flex-wrap align-items-center justify-content-between gap-3 my-2">
          <div className="d-flex flex-wrap gap-3">
            {catData.slice(0, 6).map((item) => {
              return <Button variant=" add-to-cart-btn border rounded-pill p-3">{item}</Button>;
            })}
          </div>
          <div className="filter">
            <DropdownButton variant=" add-to-cart-btn border rounded-pill px-4 py-3" id="dropdown-basic-button" title="Sort By">
              {dropDownItems.map((item) => {
                return (
                  <Dropdown.Item ref={pushRef} href="#/action-1">
                    {item}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
          </div>
        </div>
        {isPending && <CardPlaceHolder />}
        {error && <div>{error}</div>}
        {data &&
          data.map((item) => {
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
