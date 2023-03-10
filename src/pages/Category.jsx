import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilterCategory } from "../api";
import { useNavigate } from "react-router-dom";
import MealList from "../components/MealList";
import Preloader from "../components/Preloader";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const goBack = useNavigate();

  useEffect(() => {
    getFilterCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          goBack(-1);
        }}
      >
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export default Category;
