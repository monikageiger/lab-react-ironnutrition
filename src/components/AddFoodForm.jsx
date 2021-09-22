import { Divider, Input, Button } from "antd";
import { useState } from "react";

export default function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };

    props.addNewFood(newFood);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <>
      {isClicked ? (
        <div>
          <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={name} type="text" onChange={handleNameInput} />

            <label>Image</label>
            <Input value={image} type="text" onChange={handleImageInput} />

            <label>Calories</label>
            <Input
              value={calories}
              type="text"
              onChange={handleCaloriesInput}
            />

            <label>Servings</label>
            <Input
              value={servings}
              type="text"
              onChange={handleServingsInput}
            />

            <Button type="submit">Create</Button>
          </form>
          <br />
          <Button
            onClick={() => {
              setIsClicked((previousState) => {
                return !previousState;
              });
            }}
          >
            Hide
          </Button>
        </div>
      ) : (
        <div>
          <Button
            onClick={() => {
              setIsClicked((previousState) => {
                return !previousState;
              });
            }}
          >
            Add New Food
          </Button>
        </div>
      )}
    </>
  );
}
