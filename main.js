const formulario = document.getElementById('formulario-campos');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);
    const MensagemSucess = document.querySelector('.sucess-message');
    const error_msg = document.querySelector('.error-message');

    if(campoB > campoA) {
        
        MensagemSucess.style.display = 'block'; //o alert só ira converter o meu parágrafo para texto, caso eu use essa propriedade textContent 
        error_msg.style.display = 'none'; //o block faz com que meu conteúdo apareça ocupando seu devido espaço.
        setTimeout(function() {
            MensagemSucess.style.display ='none';
        },5000);
    }
    else {
        error_msg.style.display = 'block'; //a função setTimeOut tira a mensagem após o tempo que eu quiser, lembrando que o padrão é milisegundos, logo eu coloco 5000 mls que dá 5 segundos.
        MensagemSucess.style.display = 'none';
        setTimeout(function() {
            error_msg.style.display ='none';
        },5000);
    }
});