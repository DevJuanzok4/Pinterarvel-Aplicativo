// This is a JavaScript file



function cadastrarConta() {
  // Capturar os dados do formulário
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  // Criar um objeto com os dados
  var conta = {
    nome: nome,
    email: email,
    senha: senha,
   

     // Definir o saldo inicial da carteira como 75 reais
  };
  // Adicionar a conta ao vetor de contas
  

  // Salvar os dados no localStorage
  localStorage.setItem('conta', JSON.stringify(conta));

  // Exibir uma mensagem de sucesso
  alert('Cadastro realizado com sucesso!');
}

function entrar() {
  // Capturar os dados do formulário
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  // Recuperar os dados da conta do localStorage
  var contaSalva = localStorage.getItem('conta');

  // Verificar se existe uma conta salva
  if (contaSalva) {
    // Converter a string em formato JSON de volta para um objeto JavaScript
    var conta = JSON.parse(contaSalva);

    // Verificar se o email e a senha informados correspondem à conta salva
    if (email === conta.email && senha === conta.senha) {
      // Login bem-sucedido
      alert('Login realizado com sucesso!');
      location.href = "painel.html";
      // Redirecionar ou fazer algo após o login ser bem-sucedido
    } else {
      // Credenciais inválidas
      alert('Email ou senha inválidos!');
    }
  } else {
    // Nenhuma conta encontrada
    alert('Nenhuma conta encontrada!');
  }
}
