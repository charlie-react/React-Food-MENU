import React, { useState } from "react";
import { data } from "./data";

const Menu = () => {
  const [meals, setMeals] = useState([...data]); //or data
  const [mealType, setMealType] = useState("all");

  const sortMeals = (mealtype) => {
    setMealType(mealtype);

    if (mealtype === "all") {
      setMeals(data); // or [...data]
    } else {
      const filteredMeals = data.filter((meal) => meal[mealtype]);
      setMeals(filteredMeals);
    }
  };

  return (
    <div>
      <div>
        <h1 className="header">Our Menu</h1>
        <ul className="btn-con">
          <li
            className={`btn ${mealType === "all" ? "active" : ""}`}
            onClick={() => sortMeals("all")}
          >
            All
          </li>
          <li
            className={`btn ${mealType === "breakfast" ? "active" : ""}`}
            onClick={() => sortMeals("breakfast")}
          >
            Breakfast
          </li>
          <li
            className={`btn ${mealType === "lunch" ? "active" : ""}`}
            onClick={() => sortMeals("lunch")}
          >
            Lunch
          </li>
          <li
            className={`btn ${mealType === "shakes" ? "active" : ""}`}
            onClick={() => sortMeals("shakes")}
          >
            Shakes
          </li>
        </ul>
      </div>
      <div className="cont">
        {meals.length > 0 ? (
          meals.map(({ img, food, price, content }, i) => (
            <div className="wrapper" key={i}>
              <img src={img} alt="" />
              <div className="food-price">
                <h5 className="food">{food}</h5>
                <span className="price">{price}</span>
              </div>
              <p className="content">{content}</p>
            </div>
          ))
        ) : (
          <p>No meals found.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;


// import React, { useState, useEffect } from "react";
// import { data } from "./data";

// const Menu = () => {
//   const [meals, setMeals] = useState([]);

//   useEffect(() => {
//     window.addEventListener('click',function(){
//       setMeals([...data]);
//     })
  
//   }, []);

//   const sortMeals = (mealtype) => {
//     if (mealtype === "breakfast") {
//       const breakfast = data.filter((meal) => meal.breakfast);
//       setMeals(breakfast);
//       console.log(meals,breakfast)
//     } else if (mealtype === "lunch") {
//       const lunch = data.filter((meal) => meal.lunch);
//       setMeals(lunch);
//     } else if (mealtype === "shakes") {
//       const shakes = data.filter((meal) => meal.shakes);
//       setMeals(shakes);
//     } else {
//       setMeals([...data]);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h1 className="header">Our Menu</h1>
//         <ul className="btn-con">
//           <li className="all btn" onClick={() => sortMeals("all")}>
//             All
//           </li>
//           <li className="breakfast btn li" onClick={() => sortMeals("breakfast")}>
//             Breakfast
//           </li>
//           <li className="lunch btn li" onClick={() => sortMeals("lunch")}>
//             Lunch
//           </li>
//           <li className="shakes btn li" onClick={() => sortMeals("shakes")}>
//             Shakes
//           </li>
//         </ul>
//       </div>
//       <div className="cont">
//         {meals?.map(({ img, food, price, content }, i) => {
//           return (
//             <div className="wrapper" key={i}>
//               <img src={img} alt="" />
//               <div className="food-price">
//                 <h5 className="food">{food}</h5>
//                 <span className="price">{price}</span>
//               </div>
//               <p className="content">{content}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Menu;

// import React from "react";
// import { data } from "./data";
// import { useState, useEffect } from "react";

// const Menu = () => {
//   const [meals, setMeals] = useState([...data]);

//   const sortMeals = (mealtype) => {
//     if (mealtype === "breakfast") {
//       const breakfast = meals.filter((meal) => meal.breakfast);
//       setMeals(breakfast,[...meals])
//     } else if (mealtype === "lunch") {
//       const lunch = meals.filter((meal) => meal.lunch);
//       setMeals(lunch,[...meals])
//     } else if (mealtype === "shakes") {
//       const shakes = meals.filter((meal) => meal.shakes);
//       setMeals(shakes,[...meals])
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h1 className="header">Our Menu</h1>
//         <ul className="btn-con">
//           <li className="all btn" onClick={() => sortMeals("all")}>
//             All
//           </li>
//           <li className="breakfast btn" onClick={() => sortMeals("breakfast")}>
//             Breakfast
//           </li>
//           <li className="lunch btn" onClick={() => sortMeals("lunch")}>
//             Lunch
//           </li>
//           <li className="shakes btn" onClick={() => sortMeals("shakes")}>
//             Shakes
//           </li>
//         </ul>
//       </div>
//       <div className="cont">
//         {meals?.map(({ img, food, price, content }, i) => {
//           return (
//             <div className="wrapper" key={i}>
//               <img src={img} alt="" />
//               <div className="food-price">
//                 <h5 className="food">{food}</h5>
//                 <span className="price">{price}</span>
//               </div>
//               <p className="content">{content}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Menu;
