//Problem solving one ..how many times you use this word "are"?
//where you find the 1st position of the word "are"?

const sentence ="Software developers are professionals who are concerned with facets of the software development process which involves activities such as design and coding, computer programming, project management, who etc.Software developers are professionals who are concerned with facets of the software development process Who which involves activities such as design and coding, computer programming, project management, etc";


const matches = sentence.match(/Are/ig);
const occurances = matches ? matches.length : "Not match!" ;
console.log(occurances);

const position = sentence.search(/Who/ig);
const occurances2 = position >= 0 ? position : "Not found!";
console.log(occurances2);


//Problem solving Two.
function linearSearch(arr, val){
 let length = arr.length;
 
  for(let i = 0; i<length; i ++){
      if(arr[i] === val){
          return i;
      }
      
  }
  return "Not Found!";
}

console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'd'));


//Problem solving Three
//finding the longest string from an arry and shows the index number of it.

function longestString(names){
    let longestWord = '';

    for(name of names){
        if(name.length >longestWord.length){
            longestWord = name;
        }
    }
    return[longestWord, names.indexOf(longestWord)];
}

console.log(longestString(['Abu', 'Hurayra', 'Abu Hurayra', 'Bangladesh is my life']));

//Problem solving Four
//1-100 which numbers can be divided both 3 and 5 and which are diveded individually 3 and 5..


function fizzbuzz(number){
    for(let i = 1; i<= 100; i ++){
        if(i % 15 ===0){
            console.log(`${i} can be dived both 3 and 5`);
        }else  if(i % 5 ===0){
            console.log(`${i} can be dived by 5`);
        }else  if(i % 3 ===0){
            console.log(`${i} can be dived by 3`);
        }else{
            console.log(`${i} can not be divided by any of the numbers!`)
        }
    }
}
fizzbuzz();



//Problem solving FIve
//how can we find a falsy value from an array and excluded them.


const mixArry =[
    'lws',
    undefined, 
    'abu hurayra', 
    "", 
    50, 
    null, 
    'Thank you' ,
    false, 
    NaN,
    'bye',
     0

];
let trueValue = mixArry.filter(Boolean);
//এটা এভাবেও করা যায়।
/*let trueValue = mixArry.filter(function(el){ 
    if(el){
        return true; 
    }else{
        return false;
    }
});*/
console.log(trueValue);




//Problem solving Six.how can we find a falsy value from an object and how can you delete or exclude them.
const obj ={
   a: 'lws',
   b: undefined, 
   c: 'abu hurayra', 
   d: "", 
   e: 50, 
   f: null, 
   g: 'Thank you' ,
   h: false, 
   i: NaN,
   j: 'bye',
   k:  0

};
 
const trueObject = function(obj){
    for(let i in obj){
        if(!obj[i]){
            delete obj[i];
        }
    }
    return obj;
}

console.log(trueObject(obj))




