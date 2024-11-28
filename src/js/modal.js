import { refs } from './refs.js';

export function openModal() {
  refs.backdrop.classList.remove('is-hidden');
}

export function closeModal() {
  refs.backdrop.classList.add('is-hidden');
}