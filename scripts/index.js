


$('#open-modal').on('click', function(){
	$('#modal').modal('show');
});

$('#btn-clear').on('click', function(){
	$('#name').val("");
	$('#email').val("");
	$('#message').val("");
	alert('Apagado!');
});
$('#btn-send').on('click', function(){
	alert('Mensagem enviada com	sucesso! :)');
});