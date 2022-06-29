// code your solution here

// create default function that can have new argument placed inside
function saturdayFun(activity = "roller-skate"){
return `This Saturday, I want to ${activity}!`;
}

// create function expression that has default result that can be changed
const mondayWork = (function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
});

// define wrapAdjective
function wrapAdjective(flare){
    const result = function(){
        let emphatic;
        let result;
        if(flare === "*"){
            result = "a hard worker";
            emphatic = `You are ${flare}${result}${flare}!`
        }
        else if(flare === "||"){
            result = "a dedicated programmer";
            emphatic = `You are ${flare}${result}${flare}!`
        }
        return emphatic;
    }
    return result;
}

// result will get the value from the return of wrapAdjective
// return of wrapAdjective will be added to the building of
// the sentence


// emphatic will get the value of result
// and concatenate to create a sentence

