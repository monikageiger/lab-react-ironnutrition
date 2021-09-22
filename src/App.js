import "./App.css";
import foodsData from "./foods.json";
import { useState } from "react";
import { Row, Divider } from "antd";
import FoodBox from "./components/FoodBox";
import Search from "./components/Search";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [foodsDataCopy, setFoodsDataCopy] = useState(foodsData);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    const updatedFoodsDataCopy = [...foodsDataCopy, newFood];

    setFoods(updatedFoods);
    setFoodsDataCopy(updatedFoodsDataCopy);
  };

  const filterFoodList = (str) => {
    let filteredFood;
    if (str === "") {
      filteredFood = foodsDataCopy;
    } else {
      filteredFood = foodsDataCopy.filter((food) => {
        return food.name.toLowerCase().includes(str.toLowerCase());
      });
    }
    console.log(filteredFood.length);
    console.log(filteredFood);
    setFoods(filteredFood);
    return filteredFood;
  };

  //Iteration 1
  // const foodsList = foods.map((food) => {
  //   return (
  //     <div>
  //       <p>{food.name}</p>
  //       <img src={food.image} alt="" width="100px" />
  //     </div>
  //   );
  // });
  const handleDelete = (foodName) => {
    console.log("event:", foodName);
    const filterDeletedFood = foodsDataCopy.filter((food) => {
      return food.name !== foodName;
    });
    setFoods(filterDeletedFood);
  };
  //  const [isClicked,setIsClicked] = useState(true)

  //  const handleClick = (e) => setIsClicked(e.target)

  return (
    <div className="App">
      {/* {isClicked ? (
        <AddFoodForm handleClick={handleClick} addNewFood={addNewFood} />
      ) : (
        <button>Add New Food</button>
      )} */}

      <AddFoodForm addNewFood={addNewFood} />

      <Search filterFoodList={filterFoodList} />
      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foods.length === 0 ? (
          <div>
            <p>OOPS!</p>
          </div>
        ) : (
          <>
            {foods.map((food) => {
              return (
                <FoodBox
                  handleDelete={() => handleDelete(food.name)}
                  key={food.name}
                  food={food}
                />
              );
            })}
          </>
        )}
      </Row>
    </div>
  );
}

export default App;
