// COLLECTION FUNCTIONS

let myEach = function(collection, callback){
    if(Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            callback(collection[i], i, collection)
        }
    } else if(typeof(collection) === "object"){
        let keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++){
            callback(collection[keys[i]], keys[i], i) 
        }
    }
    return collection
}

let myMap = function(collection, callback){
    let newCollection = [];
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            newCollection.push(callback(collection[i], i, collection));
        }
    } else if(typeof(collection) === "object"){
        let keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++){
            newCollection.push(callback(collection[keys[i]], keys[i], collection)); 
        }
    }
    return newCollection;
}

let myReduce = function(collection, callback, acc = 0){
    // acc is a starting value for the accumulator
    // return a single value
    // iterates through a collection of values and boils it down to a single value
    // acc starts at the values that's passed in as an argument... 
    // ...and with each successive step is updated to the return value of callback
    // if a start value is not passed to myReduce, the first value in the collection is the start value
    // the callback is passed three arguments: the current value of acc, the current element/value in our iteration...
    // ...and a reference to the entire collection
    
    if(!acc){
        acc = collection[0]
    }
    
    for (let i = 0; i < collection.length; i++){
        acc = callback(acc, collection[i], collection);
    }
    return acc;
}

let myFind = function(collection, predicate){
    for (let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
            return collection[i];
        } 
    }
    return undefined; 
};


let myFilter = function(collection, predicate){
    // predicate is a callback function that returns true or false
    // return an array
    // looks through each value in the collection, returning an array of all the values that pass a truth test (predicate)...
    // ...if no matching values are found, it should return an empty array
    let matches = []
    for (let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
            matches.push(collection[i])
        }
    }
    return matches;
}

let mySize = function(collection){
    // returns an integer
    // returns the number of values in the collection 
}

// ARRAY FUNCTIONS

let myFirst = function(array, [n]){
    // [n] is optional integer
    // return a single element or an array
    // returns the first element in an array. Passing the n will return the first n elements of an array
}

let myLast = function(array, [n]){
    // [n] is optional integer
    // return a single element or an array
    // returns the last element of an array. Passing n will return the last n elements of the array
}

// BONUS
// let mySortBy = function(array, callback){
    // return a new array
    // returns a sorted copy of array, ranked in ascending order by the results of running each value through callback
    // the values from the original array should be returned in the sorted copy, in ascending order by the value returned by callback
//}

// let myFlatten = function(array, [shallow], newArr=[]){
    // takes in an array, an optional boolean value and a newArray that will contain the flattened elements
    // flattens a nested array
    // if you pass true for the second argument, the array will only be flatted a single level
//}

// OBJECT FUNCTIONS

let myKey = function(object){
    // returns an array
    // retrieves all the names of the object's enumerable properties
}

let myValues = function(object){
    // returns an array
    // return all of the values of the object's properties
}
