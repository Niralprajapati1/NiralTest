//Q1 
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve , reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) =>{
    resolve('Video 3 Recorded')
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree,
]).then((message) =>{
    console.log(message)
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Q9


const array = [12,35,1,10,34,1]

console.log("unsorted array is ", array);

console.log("sorted array is ",array.sort());

console.log("2nd highest element is ", array.sort()[array.length-2]);

//----------------------------------------------------------------------------------------------------------------------------------------------------------
//Q10

function isPrime(n) {

    if (n < 2)
        return `${n} is not a prime`


    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a prime number`
        }
    }
    return `${n} is a prime number`
}
console.log(isPrime(29));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//Q11

let min = (array, min = array[0])=>{
    for (let i = 0; i<array.length; i++){
        if (min > array[i])
        min=array[i];
    }
    return min;
};

let max = (array, max = array[0])=>{
    for (let i = 0; i<array.length; i++){
        if (max < array[i])
        max=array[i];
    }
    return max;
};

 const array = [1,2,4,3,0,-9]
 console.log("minimum value of an array is "+ min(array));
 console.log("maximum value of an array is "+ max(array));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Q15


//1st method :-------------------------->
function sumArray(a, b) {
    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      c.push((a[i] || 0) + (b[i] || 0));
    }
    return c;
}

// //First Use Case.
var a = [1, 2, 3, 4];
var b = [1, 2, 3, 4];
console.log( sumArray(a, b) );

//Second Use Case with different Length.
var a = [1, 2, 3, 4];
var b = [1, 2, 3, 4, 5];
console.log( sumArray(a, b) );


//2nd method :------------------------------>
var arr1 = [1, 2, 3, 4];
var arr2 = [2, 3, 4, 5];
var arr3 = [];
var i = 0;

for (; i < arr1.length; i++) {
    arr3[i] = arr1[i] + arr2[i];
}

console.log( arr3);


//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//Q12

arr = [1,7,-6,15,7,9,0,2,-3]

seq = [7,15,-3]
 
newarray = arr.join(' ');
console.log(newarray);

sequence = seq.join(' ');
console.log(sequence);

final = newarray.includes(sequence);
console.log(final);

//------------------------------------------------------------------------------------------------------------------------------------------------
//Q6

var num = 32243
var reverse = 0;
console.log ("orignal number: "+ num);
while(num ! = 0){
    reverse = (reverse* 10)+(num% 10);
    num = parseInt(num/10);
}
console.log ("Reverse Number:" + reverse);

//--------------------------------------------------------------------------------------------------------------------------------------------------
//Q7

function combination (str){
    var list_of_string = [];
    for (var i=0; i< str.length; i++){
        for (var j=i+1; j< str.length+1; i++){
            list_of_string.push (str.slice(i,j))
        }
    }return list_of_string
}console.log (combination("dog"))

//--------------------------------------------------------------------------------------------------------------------------------------------
//Q16
const arr1 = [3,4,5];

const arr2 = [4,5,6];

const addtwoarr = arr1.map((element, index) => {

return element + arr2[index];

})

console.log(addtwoarr);

//-------------------------------------------------------------------------------------------------------------------------------------------------
//Q8

function firstUniqchar(s) {
    const characterCount = {}; //{h:1, e:2, l:2, o:1}

     // fill out character count object
    for (let i= 0; i < s.length; i++) {
        const char = s[i];
        characterCount[char] = characterCount[char] + 1 || 1;
    }

    for (let i=0; i < s.length;i++) {
        const char = s[i];
        if (characterCount [char] === 1) {
            return i;
        }
    }
    return-1;
}
console.log (firstUniqchar("thequickbrownfoxjumpsoverthelazydog"))