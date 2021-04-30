function product(arr){//find prod of all ele in arr
    if(!arr.length) return 1;
  
    return arr[0] * product(arr.slice(1))
  }
  
function longest(arr){
    if(!arr.length) return 0
    if(arr.length === 2) return arr[0].length > arr[1].length ? arr[0].length : arr[1].length; 
    if(arr.length === 1) return arr[0].length
    
  
    return (arr[0].length > longest(arr.slice(1))) ? arr[0].length : longest(arr.slice(1))  //if f() return is longer than curr ele return longest one
}
  
function everyOther(str){
    if(!str.length) return
    if(str.length <= 2) return str[0]//if even
  
    return str[0] + everyOther(str.slice(2))
    //
}
  
function isPalindrome(str){//semi-hard
    console.log(str)
    if(str.length === 2) return str[0] === str[str.length - 1]
    if(str.length === 1) return true;
    if(!str.length) return;
    
    if(str[0] === str[str.length - 1]) return isPalindrome(str.slice(1,(str.length - 1)))
    
    return false
}
  
  
function findIndex(arr, targ, i = 0){
    if(arr[i] === targ) return i
    if( (arr.length - 1) === i) return -1;
  
    return findIndex(arr,targ, i + 1)
}
  
function revString(str){
    if(!str.length) return ''
  
    return str[str.length - 1] + revString(str.substring(0, str.length - 1))
}

let nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
      lastName: "Testowitz"
    },
    funFacts: {
      moreStuff: {
        anotherNumber: 100,
        deeplyNestedString: {
          almostThere: {
            success: "you made it!"
          }
        }
      },
      favoriteString: "nice!"
    }
  };



function gatherStrings(obj){
    let arr = [];
    for(let property in obj){
        
        if(typeof(obj[property]) === 'string'){
            arr.push(obj[property]);
        }

        if(typeof(obj[property]) === 'object'){
            arr.push(...gatherStrings(obj[property]));
            //i'm not sure how to explain my spread operator but it works
            //how to explain it?
        }
    }
    return arr;
}

//console.log(gatherStrings({string: 'hi', {}}))
console.log(gatherStrings(nestedObj));