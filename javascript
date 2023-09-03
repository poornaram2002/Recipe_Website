// Sample recipe data (replace with your actual data)
const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "eggs", "pancetta", "Parmesan cheese"],
    instructions: "Cook spaghetti; mix eggs, pancetta, and Parmesan; combine.",
    cookingTime: "20 minutes",
    servingSize: "2",
  },
  {
    id: 2,
    title: "Chicken Alfredo",
    ingredients: ["chicken", "fettuccine", "heavy cream", "Parmesan cheese"],
    instructions: "Cook chicken; cook fettuccine; mix with cream and Parmesan.",
    cookingTime: "30 minutes",
    servingSize: "4",
  },
  // Add more recipes...
];

// Function to display a recipe on the page
function displayRecipe(recipe) {
  // Replace this with code to display the recipe on the webpage
  console.log(`Recipe: ${recipe.title}`);
  console.log(`Ingredients: ${recipe.ingredients.join(", ")}`);
  console.log(`Instructions: ${recipe.instructions}`);
  console.log(`Cooking Time: ${recipe.cookingTime}`);
  console.log(`Serving Size: ${recipe.servingSize}`);
}

// Sample usage: Display the first recipe
displayRecipe(recipes[0]);

// Example: Add an event listener to a button (replace with your HTML structure)
document.getElementById("recipeButton").addEventListener("click", function () {
  // Get the selected recipe (replace with your logic)
  const selectedRecipe = recipes[1]; // Example: Get the second recipe
  displayRecipe(selectedRecipe);
});
