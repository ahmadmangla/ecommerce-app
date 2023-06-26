import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function SortData({ setSort }) {
  return (
    <div className="filter">
      <DropdownButton variant=" add-to-cart-btn border rounded-pill px-4 py-3" id="dropdown-basic-button" title="Sort By">
        <Dropdown.Item id="1" href="#" onClick={() => setSort("lowest")}>
          Price: Low to High
        </Dropdown.Item>
        <Dropdown.Item id="2" href="#" onClick={() => setSort("highest")}>
          Price: High to low
        </Dropdown.Item>
        <Dropdown.Item id="3" href="#" onClick={() => setSort("default")}>
          Date Added
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default SortData;
