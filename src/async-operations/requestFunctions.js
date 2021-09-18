import React from "react";
// Define the following functions with no pending/fail/success state management or error handling
// Be sure to throw an error if the request is not OK however

const firebaseLink = `https://react-meals-7c9cb-default-rtdb.firebaseio.com/mealData.json`;
export async function putMenu() {
  const meals = {
    Sushi: {
      descrip: "Finest fish and veggies",
      price: "$30.00",
    },
    Schnitzel: {
      descrip: "A german specialty",
      price: "$16.50",
    },
    "Green Bowl": {
      descrip: "Healthy...and green...",
      price: "$28.00",
    },
  };
  const putData = await fetch(firebaseLink, {
    method: "PUT",
    body: JSON.stringify(meals), // the data we're storing
    headers: { "Content-Type": "application/json" },
  });
  if (!putData.ok) throw new Error("Sending cart data failed");
  console.log("requestFunctions_line27", putData);
  return null;
}

export async function getMenu() {
  const pullData = await fetch(firebaseLink);
  if (!pullData.ok)
    throw new Error("Could not retreive meal data from the servers");
  const parsedData = await pullData.json(); // equals null if you fetch nothing
  if (parsedData === null) console.log("There is no menu data on our servers"); //! formalize with a spinner
  return parsedData;
}

export async function deleteMenu() {
  const deleteData = await fetch(firebaseLink, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify([]),
  });
  if (!deleteData) throw new Error("Could not erase backend info");
  console.log("requestFunctions_line46", deleteData);
}
