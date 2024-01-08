alert('Hello to Js')
console.log(`alo`);
let x = 5,
    y = 6;
    
console.log(`ket qua cua x + y = ${x}  ${y}`);
console.log('ket qua cua x + y=', x + y );

    let note = 'hello world js'
        arrNote = note.split(' ');
for (let index = 0; index <= arrNote.length; index++) {
         console.log(arrNote[index], 'co so thu tu la', index+1 );
}
        
       switch(new Date().getDay()){
        case 1:
            day = 'Monday';
        break;
        case 2:
            day = 'tuesday';
        break;
        case 3:
            day = 'wednesday';
        break;
        case 4:
            day = 'thursday';
        break;
        case 5:
            day = 'friday';
        break;
        case 6:
            day = 'saturday';
        break;
        case 0:
            day = 'sunday';
        break;
       } 
       console.log('hom nay la :', day );
       

        let arr = [1,2,3,4,5,6,7,8,9]
       for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
       }
       console.log(arr);

       let mapArray = arr.map((item, index)=>{
            // item = item * item;
            index = index * index;
            return index;
       })
       console.log('mang array: ', arr);
       console.log('mang mapArray: ',mapArray);




        
       

    



    //    var request = new XMLHttpRequest();

    //         request.onreadystatechange = function () {
    //             if(this.readyState === 4 ){
    //                 const dataString = JSON.stringify(request.responseText);
    //                 console.log(dataString);
    //             }
                
    //         };

    //         request.open("get", "/data.json", true);
    //         request.send();

            // const promiseExp = ()=>{
            //     return new Promise((resolve, reject)=> {
            //         resolve('get some data')
            //     });
            // }
            // promiseExp()
            //     .then(data => {
            //         console.log(data);
            //     })
            //     .catch(alo => {
            //         console.log(alo);
            //     });
