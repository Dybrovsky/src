let object = [
    {name: 'Evgenij', number: '1'},
    {name: 'Anton', number: '3'},
    {name: 'Artem', number: '2'}, 
];

const fulterObj = (object, keys, value) => {
    let newArr = [];
    for (let key in object) {
        const obj = object[key];
         if (obj[keys] == value) {
             newArr.push(obj)
            } 
            };
            return newArr;
        }
    
    console.log(fulterObj(object, 'number', '1'))