function cadastrarUsuario(){

    let url = 'http://localhost:3003/usuario'
    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value

    let body = {
        "nome": nome,
        "senha": senha
    }
    
    post(url, body)
}

function post(url, body){
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
}

function field_focus(field, value)
  {
    if(field.value == value)
    {
      field.value = '';
    }
  }

  function field_blur(field, value)
  {
    if(field.value == '')
    {
      field.value = value;
    }
  }