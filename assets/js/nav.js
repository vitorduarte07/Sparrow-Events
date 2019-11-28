(function() {
    'use strict';

    var loginSenha = $('#loginSenha')
    var botaoRecuperarSenha = $('#botaoRecuperarSenha')
    var botaoEntrar = $('#botaoEntrar');

    botaoRecuperarSenha.hide();
    botaoRecuperarSenha.hide();

    $(document).on('click', '#esqueciMinhaSenha', function (){
        console.log('click');
        recuperarSenha();
    });

    $(document).on('click', '#recuperarSenhaVoltar', function (){
        console.log('click');
        recuperarSenha();
    });


    function recuperarSenha(){
        botaoRecuperarSenha.show();
        recuperarSenhaVoltar.show();
        botaoEntrar.hide();
        divSenha.hide();
    }

    function recuperarSenhaVoltar(){
        botaoRecuperarSenha.show();
    }


function exibirInput(){
    let html = '<div class="row">'+
               '<div class="col-sm-12">'+
               '<div class="form-group">'+
               '<label for="novaSenha">Digite sua nova senha</label>'+
               '<input name="novaSenha" type="password" class="form-control" id="novaSenha" required'+
               '</div>'+
               '</div>'+
               '</div>';
}

    
})();