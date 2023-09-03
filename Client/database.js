

async function addTodoToDatabase(url,name){
    const postData = {
        name: name
      };
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData), 
        })
        if (!response.ok){
          console.log("HTTP Hatası" + response.status)
        };
        const data = await response.json();
        return data
      }
      catch(err){
        console.log(err)
    }
    }

async function todosGet(){
  const response = await fetch("http://localhost:3000/api/todos");
  const data = await response.json();
  return data

}


async function deleteFromDatabase(id){
  const response = await fetch(`http://localhost:3000/api/delete_todo/${id}`,{method: 'DELETE'})
  const data = await response.json();
}

async function deleteFromDatabaseAll(){
  const response = await fetch(`http://localhost:3000/api/delete_all`,{method: 'DELETE'})
  const data = await response.json();
  console.log(data)
}
      
