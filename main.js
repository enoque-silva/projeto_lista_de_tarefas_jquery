// Espera o formulário ser enviado
$('form').on('submit', function(evento) {
    // Impede que o formulário seja enviado de verdade (a página não recarrega)
    evento.preventDefault();
    
    // Pega o texto que a pessoa digitou no campo de nova tarefa
    const novaTarefa = $('#campo-nome-da-tarefa').val();
    
    // Cria um novo item de lista <li> com uma classe chamada 'novaTarefa'
    const novaLinhaLista = $(`<li class="novaTarefa"></li>`);

    // Cria um link (ou botão) com o texto da nova tarefa e coloca dentro do novo item de lista
    const botaoTarefa = $(`<a>${novaTarefa}</a>`).appendTo($('<div></div>').appendTo(novaLinhaLista));

    // Adiciona uma função que será chamada quando a nova tarefa for clicada
    novaLinhaLista.on('click', function() {
        // Alterna a classe 'tarefaRealizada' no link (ou botão) da tarefa
        $(this).find('a').toggleClass('tarefaRealizada');
    });

    // Adiciona o novo item de lista no final da lista <ul>
    $(novaLinhaLista).appendTo('ul');

    // Seleciona o elemento com o id 'tarefas-titulo' e faz ele aparecer suavemente em 400ms
    $('#tarefas-titulo').fadeIn(400, function() {
        // Depois que o título apareceu, faz a nova tarefa aparecer suavemente em 1000ms
        $(novaLinhaLista).fadeIn(1000);
    });
    
    // Limpa o campo de nova tarefa depois que o formulário é enviado
    $('#campo-nome-da-tarefa').val('');
});
