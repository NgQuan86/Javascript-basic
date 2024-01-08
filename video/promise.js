


function getTodos (id, callback) {
    return new Promise((resolve, reject)=>{
        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if(this.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                const dataString = JSON.stringify(data);
                
                resolve(data);
            }

            if(this.readyState === 4 && request.status !== 200 ){
               reject(`something wrong with: ${id}`);
            }
        };
        request.open("get",`https://jsonplaceholder.typicode.com/todos/${id}` , true); 
        request.send();
    })
    
}
getTodos(1)
.then((data1)=>{
    console.log('get dataa:', data1);
    return getTodos(2);
})
.then((data2)=>{
    console.log('get dataa:', data2);
    return getTodos(3); 
    // return getTodos("eze"); goi ham reject(`something wrong with: ${id}`); neu truyen sai thong tin
     
})
.then((data3)=>{
    console.log('get dataa:', data3);
    return getTodos(4);
})
.then((data4)=>{
    console.log('get dataa:', data4);
})

.catch((err)=>{
    console.log(err);
})