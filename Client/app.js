// Elements
const form = document.getElementById("todo-form");
const formInput = document.getElementById("todo");
const deleteButton = document.getElementsByClassName("fa fa-remove");
const parentElement = document.getElementById("ul_group");
const clearButton = document.getElementById("clear-todos");
// state oluştur
const state = {
    todos : []
}
// Event Listeners
EventListeners();
// Eventler
function EventListeners(){
    document.addEventListener("DOMContentLoaded",getBackTodos);
    form.addEventListener("submit",addTodo);
    parentElement.addEventListener("click",deleteItem);
    clearButton.addEventListener("click",clearT);
};

async function getBackTodos(){
    state.todos = []
    // Todoları al
    const todosList = await todosGet();
    // Tarihleri Çevir
    const infoList = getDatesList(todosList.data);
    //State ekle
    state.todos = infoList
    //Todoları ekle
    todosBackToUI(infoList);
    
}


async function addTodo(event){
    event.preventDefault();
    const input = formInput.value.trim();
    
    const data = await addTodoToDatabase("http://localhost:3000/api/add_todo",input); // Add todo to Database
    
    const date = switchDates(data);

    state.todos.push([data.data.name,date,data.data.created_at,data.data._id])
    
    addTodoToUI(input,date); //  Add todo to UI

    

    
    
    
    
    formInput.value = " ";
    
}

function deleteItem(e){
    if (e.target.parentElement.classList.contains("delete-item")) {
        var text = e.target.closest("li").children[0].innerHTML
        var date= e.target.closest("li").children[1].innerHTML
        const id = controlNameDate(text,date,state.todos);
        deleteFromDatabase(id)
        e.target.closest("li").remove();
        
        
        

    };
    
};
async function clearT(){
    state.todos = [];
    parentElement.innerHTML = "";
    const data = await deleteFromDatabaseAll();

}

