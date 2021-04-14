
/* A function to delete an item by index */

let array1 = ["a", "b", "c", "d", "f"]

function deleteByIndex(array, index){
    array.splice(index, 1)
    return array1
}

console.log(deleteByIndex(array1, 2))

/* A function to combine two or more arrays] and sort the final array */

let array21 = [7,5,3]
let array22 = [4,9,6]
let array23 = [2,8,1,0]

function combine(array1, array2, array3){
    let result = array1.concat(array2, array3)
    return result.sort((a,b) => a-b);
}
console.log(combine(array21, array22 ,array23))


/* Remove duplicate items of an Array */

let array3 = ["a", "b", "c"  , "a" , "c", "f" , "d", "f"]


let unique = array3.filter((item, index) =>{
    return array3.indexOf(item) === index
})


console.log(unique)

/* A function to extract numbers from a string */

let string4 = "i have 2 apples and 3 pineapples"

let array4 = string4.split(" ")

let convnum = []
for(i=0; i< array4.length; i++){
    if(parseInt(array4[i])){
        convnum.push(array4[i])
    }
}

console.log(convnum)

/* Flat an Array of arrays */

let array5 = [[2,3],5,[[[2,9],4],4],1,0]

const merged = array5.flat(Infinity);

console.log(merged)