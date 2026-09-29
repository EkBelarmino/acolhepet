const projetos = [
    {
        titulo: 'Resgate e acolhimento',
        descricao: 'Ações de resgate e cuidado de animais em situação de abandono.'
    },
    {
        titulo: 'Adoção responsável',
        descricao: 'Encaminhamento de cães e gatos para famílias preparadas para adoção.'
    },
    {
        titulo: 'Campanhas de doação',
        descricao: 'Arrecadação de ração, medicamentos e recursos para os animais.'
    }
];

export function criarCardsProjetos() {
    return projetos.map(projeto => `
        <article class="card-projeto">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
        </article>
    `).join('');
}