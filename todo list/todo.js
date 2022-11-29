function addtolist()
{
    var taskname = document.getelementbyid('taskname').value
    var tododiv = document.getElementById('mytodo')
    var newtodoitem = document.getElementById('div')
    var todoname = document.getElementById('li')
    todoname.innerHTML= taskname
    var deletebtn = document.createElementById('i')
    deletebtn.classList.add('far')
    deletebtn.classList.add('fa-trash-alt')

   newtodoname.appendchild(todoname)
   newtodoname.appendchild(deletebtn)

   tododiv.appendChild(newtododiv)

}