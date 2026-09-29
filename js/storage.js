export function salvarCadastro(dados) {
    localStorage.setItem('cadastroAcolhePet', JSON.stringify(dados));
}

export function recuperarCadastro() {
    const dados = localStorage.getItem('cadastroAcolhePet');

    if (dados) {
        return JSON.parse(dados);
    }

    return null;
}