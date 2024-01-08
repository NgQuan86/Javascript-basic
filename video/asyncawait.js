

const newTodo = async (id)=> {
    try{
        let reponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if(reponse && reponse.status !== 200){
            throw new Error(`something wrongs with status code: ${reponse.status}`); //reject
        }

        let data = await reponse.json()
        return data;
    }
    catch(e){
        console.log(`check catch error: ${e.message}`)
    }
    
    
}

newTodo(1)
.then((data)=>{
    console.log('data:', data);
})