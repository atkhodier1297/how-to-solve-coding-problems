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

function containsCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true
            }
        }
    }
    return false
}

answer1 = containsCommonItem(array1, array2)
console.log(answer1)

answer2 = containsCommonItem(array3, array4)
console.log(answer2)