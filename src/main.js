import { getAllRecipes, getRecipeById } from './js/dummy-api.js';
import { onBackdropClick, onRecipeItemClick } from './js/handlers.js';
import { refs } from './js/refs.js';
import { renderRecipeMarkup } from './js/render-functions';

document.addEventListener('DOMContentLoaded', async () => {
  const { recipes } = await getAllRecipes();
  console.log(recipes);
  renderRecipeMarkup(recipes);
});

refs.recipeList.addEventListener('click', onRecipeItemClick);
refs.backdrop.addEventListener('click', onBackdropClick);