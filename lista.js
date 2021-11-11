let inputTarefa = document.getElementById('inputTarefa')
let  btnAdcionarTarefa = document.getElementById('btnAdcionarTarefa')
let  listaTarefa = document.getElementById('listaTarefa')
let  inputdate = document.getElementById('date')
let  inputtime = document.getElementById('time')


btnAdcionarTarefa.addEventListener('click',()=>{
  
    if(inputTarefa.value != ''){
      tarefa ={
          nome: inputTarefa.value,
          id: 'idTaref'
          
      }
      addTarefa(tarefa);
    }else{
        alert('Insira uma tarefa!')
    }
    
})

function criarLi(tarefa){
    let  li = document.createElement('li');
    li.classList.add('li')
    li.id = tarefa.id;
    li.innerHTML = ' <input type="checkbox">'
    let span = document.createElement('span');
   //span.classList.add('span')
   let div = document.createElement('div')
   
   let btnExcluir = document.createElement('button')
   div.appendChild(btnExcluir)
   btnExcluir.innerHTML = '<i class="fa fa-trash"></i>'
   btnExcluir.setAttribute('onclick','excluir('+tarefa.id+')')

   span.textContent = inputTarefa.value
    li.appendChild(span)
    li.appendChild(div)
    return li;
}

function addTarefa(tarefa){
    let li = criarLi(tarefa);
    listaTarefa.appendChild(li)
    inputTarefa.value = '';
    inputTarefa.focus();
    
}


function excluir(idTarefa){
    let li = document.getElementById('idTaref');
    listaTarefa.removeChild(li);
  
}

