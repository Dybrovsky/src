
let password = 'uee_'

let checkPassword = (password) => {
    if(password.length < 4){
        return "Wrong"
    }
    if(password.includes("_") || password.includes("-")){
        return "Right"
    } else {
        return "Wrong"
    }
}

console.log(checkPassword(password))

