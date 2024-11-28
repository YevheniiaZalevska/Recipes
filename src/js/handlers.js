import { getRecipeById } from './dummy-api.js';
import { closeModal, openModal } from './modal.js';
import { refs } from './refs.js';
import { renderModalRecipeMarkup } from './render-functions.js';

export async function onRecipeItemClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  openModal();
  const recipeId = e.target.dataset.id;
  const recipe = await getRecipeById(recipeId);
  renderModalRecipeMarkup(recipe, refs.modal);
}
export function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}