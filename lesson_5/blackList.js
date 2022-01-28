const emailList = ['Anton', 'Artem', 'Evgenij', 'Egor', 'Igor'];
const blackList = ['Egor', 'Igor'];

const newArray = emailList.filter(memberName => !blackList.includes(memberName)  )

   
console.log(newArray)