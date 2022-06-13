// code your solution here
function saturdayFun(string= "roller-skate"){
    return(`This Saturday, I want to ${string}!`)
}

const mondayWork = function(string = "go to the office"){
    return(`This Monday, I will ${string}.`)
}

function wrapAdjective(visualFlair= "*"){
    return function(adjective = "special"){
        return (`You are ${visualFlair}${adjective}${visualFlair}!`)
    }
}