import { renderizarPagina } from './router.js';
import { iniciarFormulario } from './formulario.js';

window.addEventListener('DOMContentLoaded', () => {
    renderizarPagina();
    iniciarFormulario();
});

window.addEventListener('hashchange', () => {
    renderizarPagina();
});