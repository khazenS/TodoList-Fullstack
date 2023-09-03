const ul_group = document.getElementById("ul_group");

function switchDates(date){
    
    const options = {
        
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false // 24 saat formatı
      };

      const newDate = new Date(date.data.created_at)
      return newDate.toLocaleDateString('tr-TR', options)
}

function addTodoToUI(input,date){
    ul_group.innerHTML += `
    <li class="list-group-item d-flex justify-content-between">
            <span>${input}</span>          <strong>${date}</strong>                    
            
        <a class ="delete-item">
        <i class = "fa fa-remove"></i>
        </a>

        </li>
    `
}

function getDatesList(todosList){
    const returnInfos = [];
    const datesList = [];
    const nameList = [];
    const newDateArray = [];
    const idArray = [];
    const options = {
        
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false // 24 saat formatı
      };


    todosList.forEach(todo => {
        datesList.push(todo.created_at);
        nameList.push(todo.name);
        idArray.push(todo._id)
    });
    
    
    

    
    datesList.forEach( date => {
        const newDate = new Date(date)
        newDateArray.push(newDate.toLocaleDateString('tr-TR',options));
        
    });
    
    
    for (i in nameList){
        returnInfos.push([nameList[i],newDateArray[i],datesList[i],idArray[i]]) 
    }
        
    
    return returnInfos
}

function todosBackToUI(infoList){
    for (index in infoList)[
        ul_group.innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
        <span>${infoList[index][0]}</span>            <strong>${infoList[index][1]}</strong>                    
            
        <a class ="delete-item">
        <i class = "fa fa-remove"></i>
        </a>

        </li>
        `
    ]
}

function controlNameDate(name,date,state){
    let id = "";
    state.forEach(array => {
        name2 = array[0];
        date2 = array[1];
        if (name2 === name && date2 === date){
            id = array[3]
        }
    })
    return id
    
}
    
    
    
    
    
    
