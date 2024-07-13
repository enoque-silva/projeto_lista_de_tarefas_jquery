// Aguarda o evento de envio do formulário
$('form').on('submit', function(evento){
    // Impede o comportamento padrão de envio do formulário
    evento.preventDefault();
    
    // Obtém o valor do campo de entrada de nova tarefa
    const novaTarefa = $('#campo-nome-da-tarefa').val();
    
    // Cria um novo elemento <li> com a classe 'novaTarefa'
    const novaLinhaLista = $(`<li class="novaTarefa"></li>`);

    // Cria um botão (ou âncora) com o texto da nova tarefa e o adiciona à nova linha de lista
    const botaoTarefa = $(`<a>${novaTarefa}</a>`).appendTo($('<div></div>').appendTo(novaLinhaLista));

    // Adiciona um evento de clique ao botão da tarefa para alternar a classe 'tarefaRealizada'
    botaoTarefa.on('click', function(){
        $(this).toggleClass('tarefaRealizada');
    });
    
    // Adiciona a nova linha de lista ao final da lista <ul>
    $(novaLinhaLista).appendTo('ul');

    // Seleciona o elemento com id 'tarefas-titulo' e aplica uma animação de fadeIn com duração de 500ms
    $('#tarefas-titulo').fadeIn(400, function() {
        // Quando a animação do título terminar, inicia a animação de fadeIn da nova linha de lista com duração de 1000ms
        $(novaLinhaLista).fadeIn(1000);
    });
    
    // Limpa o valor do campo de entrada de nova tarefa após o envio do formulário
    $('#campo-nome-da-tarefa').val('');
});