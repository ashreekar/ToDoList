const textArea=document.querySelector(".textarea");
const button=document.querySelector('.buttoninput');
const todoList=document.querySelector(".todoList")

button.addEventListener('click',addTodo);

function addTodo(){
    const toDodiv=document.createElement('div');
    toDodiv.classList.add('itemall')
    const item=document.createElement('p')
    item.classList.add('item');
    item.innerHTML=textArea.value;
    // console.log(item)
    toDodiv.appendChild(item);
    // console.log(toDodiv)
    if(textArea.value == ''){
        return;
    }

    const deletebutton=document.createElement('button');

    deletebutton.innerHTML='Delete';
    deletebutton.classList.add('trash')

    toDodiv.appendChild(deletebutton)
   
    todoList.appendChild(toDodiv);
    textArea.value=''
}

todoList.addEventListener('click',deleteitem);

function deleteitem(e){
    const item=e.target;

    if(item.classList[0]==='trash'){
        const parent=item.parentNode;
        parent.remove();
    }
}