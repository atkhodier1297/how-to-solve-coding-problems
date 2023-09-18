// Given 2 arrays, create a function that let's a user know T/F 
// whether these two arrays contain any common items.

// EXAMPLE

// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
// should return False

// const array3 = ['a', 'b', 'c', 'x']
// const array4 = ['z', 'y', 'x']
// should return true

// How would you solve this in an interview?

// 2 parameters - arrays - no size limit
// ask about the size of the array to discern time and space complexity
// return true or false
// brute force two nested for loops 
// O(n^2)
// may or may not wanna code the brute force solution
// describe why brute force solution is not the best

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'i']
const array3 = ['a', 'b', 'c', 'x']
const array4 = ['z', 'y', 'x']

function containsCommonItem(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true
            }
        }
    }
    return false
}

// answer1 = containsCommonItem(array1, array2)
// console.log(answer1)

// answer2 = containsCommonItem(array3, array4)
// console.log(answer2)

// since arrays are not the same length it would be O(a * b)


// is there a way to achieve better time complexity?
// array1 ==> obj {
    // a true
    // b true
    // c true
    // x true
//}
// array2{index} === obj.properties
// then you can only loop over the second array 
// to compare it to the first array that is now obj
// LESS NESTED LOOPS

function commonItem2(array1, array2) {
    // loop through first array and create obj 
    // where properties === items in the array
    let map = {}
    for (let i = 0; i < array1.length; i++) {
        if(!map[array1[i]]) {
            const item = array1[i]
            map[item] = true
        }
    }
    // console.log(map)
    // loop through second array and check of item in
    // 2nd array exists on created object
    // we will have two loops but not nested
    for (let j = 0; j < array2.length; j++) {
        if(map[array2[j]]) {
            return true
        }
    }
    return false
}
// O(a + b)
// although it is not solved yet the interview sees how I think
// answer3 = commonItem2(array1, array2)
// answer4 = commonItem2(array3, array4)
// console.log(answer3)
// console.log(answer4)

// ask interviewer about ways to break the code
// ask if the function will always have two parameters
// maybe add if statements to check the input types
// tell the interviewer what you would do
// make sure to give meaningful names to parameters and variables
// TEST YOUR CODE
// Test with no params, 0, undefined, null, massive arrays, async code etc


// Language specific solution with specific JS methods

function commonItem3(array1, array2) {
    return array1.some(item => array2.includes(item))
}

answer5 = commonItem3(array1, array2)
answer6 = commonItem2(array3, array4)
console.log(answer5)
console.log(answer6)

