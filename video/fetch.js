


fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        .then((reponse)=>{
            return reponse.json()
            
        })
        .then(data =>{
            console.log("<<<<", data);
        })