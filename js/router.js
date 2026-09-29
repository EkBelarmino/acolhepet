import { criarCardsProjetos } from './projetos.js';

export function renderizarPagina() {
    const app = document.getElementById('app');

    if (!app) {
        return;
    }

    const rota = window.location.hash.replace('#', '') || 'inicio';

    const paginas = {
        inicio: `
            <section>
                <h2>Quem somos</h2>
                <p>
                    A AcolhePet é uma ONG dedicada ao resgate, cuidado
                    e adoção responsável de cães e gatos em situação de abandono.
                </p>
            </section>
        `,

        projetos: `
            <section>
                <h2>Nossos projetos</h2>

                <div class="lista-projetos">
                    ${criarCardsProjetos()}
                </div>
            </section>
        `,

        cadastro: `
            <section>
                <h2>Cadastro de apoiadores</h2>
                <p>
                    Área destinada a pessoas interessadas em participar
                    como doadoras ou voluntárias.
                </p>
            </section>
        `
    };

    app.innerHTML = paginas[rota] || paginas.inicio;
}