document.getElementById('enviar').addEventListener('click', function(event) {
  const check = document.getElementById('check-2')
  if(check.checked == false) {
    event.preventDefault();
    maxlength();
    }else alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
})


function maxlength() {
  const nameText = document.getElementById('name');
  const emailText = document.getElementById('email');
  const boardText = document.getElementById('board-text');
  if (nameText.selectionStart < 10 || nameText.selectionStart > 40) {
      alert('Dados Inválidos 1');
    }else if (emailText.value.length < 10 || emailText.value.length > 50) {
      alert('Dados Inválidos 2');
    }else if (boardText.selectionStart > 500 || boardText.selectionStart < 10) {
        alert('Dados Inválidos');
        } 
}
