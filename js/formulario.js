import { salvarCadastro, recuperarCadastro } from './storage.js';

export function iniciarFormulario() {
    const formCadastro = document.getElementById('form-cadastro');

    if (!formCadastro) {
        return;
    }

    const dadosSalvos = recuperarCadastro();

    if (dadosSalvos) {
        document.getElementById('nome').value = dadosSalvos.nome || '';
        document.getElementById('email').value = dadosSalvos.email || '';
        document.getElementById('cpf').value = dadosSalvos.cpf || '';
        document.getElementById('telefone').value = dadosSalvos.telefone || '';
        document.getElementById('cep').value = dadosSalvos.cep || '';
    }

    formCadastro.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const cpf = document.getElementById('cpf');
        const telefone = document.getElementById('telefone');
        const cep = document.getElementById('cep');

        const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
        const regexCEP = /^\d{5}-\d{3}$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let valido = true;

        if (nome.value.trim() === '') {
            valido = false;
        }

        if (!regexEmail.test(email.value)) {
            valido = false;
        }

        if (!regexCPF.test(cpf.value)) {
            valido = false;
        }

        if (!regexTelefone.test(telefone.value)) {
            valido = false;
        }

        if (!regexCEP.test(cep.value)) {
            valido = false;
        }

        if (valido) {
            const dados = {
                nome: nome.value,
                email: email.value,
                cpf: cpf.value,
                telefone: telefone.value,
                cep: cep.value
            };

            salvarCadastro(dados);

            alert('Cadastro realizado com sucesso!');
        } else {
            alert('Verifique os campos do formulário.');
        }
    });
}