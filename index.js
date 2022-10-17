// code your solution here
function saturdayFun(activity){
    if(activity){
        return `This Saturday, I want to ${activity}!`;
    }
    else{
        return `This Saturday, I want to roller-skate!`;
    }
}

const mondayWork = function(activity){
    if(activity){
        return `This Monday, I will ${activity}.`;
    }
    else{
        return `This Monday, I will go to the office.`
    }
}

function wrapAdjective(sign){
    const emphatic = function(adj = "special"){
        return `You are ${sign}${adj}${sign}!`;
    }
    return emphatic;
}

//console.log(wrapAdjective("*")("cute"));


//function expressions
// const fn = function (x) {
//     console.log("Yet more razzling" + x);
// };
// fn("hey");

//immediately-invoked function expression (IIFE)
/*console.log((function (baseNumber) {
    return baseNumber + 3;
})(2));*/