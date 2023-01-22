import React from "react";
import CategoryItem from "./CategoryItem";

function CategoryList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((element) => (
        <CategoryItem key={element.idCategory} {...element} />
      ))}
    </div>
  );
}

export default CategoryList;
