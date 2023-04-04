import axios from 'axios';

const getAllMeals = (setMeal) => {
    axios.get('https://meal-plan-1ox5.onrender.com')
    .then(({data}) => {console.log(data);
    setMeal(data)
    })
}

const addMeal = (title, setTitile, setMeal) =>{
    axios.post('https://meal-plan-1ox5.onrender.com/saveMeals',{title})
    .then((data) => {
        console.log(data);
        setTitile("");
        getAllMeals(setMeal);
    })
}

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
    axios.put(`https://meal-plan-1ox5.onrender.com/editMeal`, {_id: mealId, title})
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllMeals(setMeal)
    })
}

const deleteMeal = (_id, setMeal) => {
    axios.delete(`https://meal-plan-1ox5.onrender.com/deleteMeal`, {_id})
    .then((data) => {
        console.log(data)
        getAllMeals(setMeal)
    })
}
export {getAllMeals, addMeal, editMeal, deleteMeal};