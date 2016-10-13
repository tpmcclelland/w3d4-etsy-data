var invites = ['Matt', 'Susan', 'Jessica', 'John']
var tasks = new Array(3)
tasks[0] = 'Buy food'
tasks[1] = 'Feed pets'
tasks[2] = 'Cook food'

var inbox = new Array('Water Bill', 'Pay Check', 'Greeting Card')

inbox[3] = 'You have rich uncle that wants to give you money'

// End of array
tasks.push('Do homework') // puts new item at the end
tasks.pop() // removes the last one from the list

// beginning of array
tasks.unshift('Watch Netflix') //puts new item at beginning
var thingIGotRidOf = tasks.shift() //removes first item from the list and shifts all the  other indexes

// get chunks of data out of middle of array, doesn't affect inbox
 var payCheck = inbox.slice(1, 2)
// console.log(payCheck)

//put something into middle of array, modifies the inbox array
inbox.splice(1, 0, 'You are Hired', 'Job Offer')
// console.log(inbox)

//not used too often.  it removes the data, but keeps the index at undefined or empty
// delete inbox[0]
// console.log(inbox)

// console.log(inbox.length)
//tasks[0] = 'Watch Hulu'
// console.log(tasks)

var hasJobOffer = inbox.includes('Job Offer')
// console.log(hasJobOffer)

// returns -1 if it can't find a match
var jobOfferIndex = inbox.indexOf('Job Offer')
// console.log(jobOfferIndex)

inbox.push('Job Salary')

if (inbox.indexOf('Job Salary') === -1) {
    console.log('no salary yet')
}

// console.log(inbox)

// basically returns a single string of the first item in the list
var matches = inbox.find(function(item) {
    return item.includes('Job')
})

function checkForJob(item) {
    return item.includes('Job')
}

// returns all matches that it finds as an array
//declarative way of writing code
var matches = inbox.filter(checkForJob)

//anonymous function
var matches = inbox.filter(function(item) {
    return item.includes('Job')
})

//imperative way
var matches = []
for (var i = 0; i < inbox.length; i++) {
    // console.log(i + ". " +inbox[i])
    var hasJob = checkForJob(inbox[i])
    if (hasJob) {
        matches.push(inbox[i])
    }
    // console.log(hasJob)
}
// console.log(matches)

//going reverse through a list
// for (var i = inbox.length -1; i >= 0; i--) {
//     console.log(i + '. ' + inbox[i])
// }

// console.log(matches)
// inbox = inbox.reverse
// console.log(inbox.reverse())

var fruit = ['Apple', 'Banana', 'Cherry', 'Watermelon']

// doesn't mutate array
fruit.forEach(function(item) {
    // console.log(item.toUpperCase())
})

//sole purpose is to loop over array and transform it to something else, one item at a time, need to assign to a variable
var upperCaseFruit = fruit.map(function(item, i) {
    // return item.toUpperCase()
    if (i === 2) {
        return `<section>${item.toUpperCase()}</section>`
    } else {
        return `<div>${i} - ${item}</div>`
    }
})

var prices = [7.98, 14.99, 2.30, 12.80]

var prices = [
    {price: 14.99},
    {price: 7.98},
    {price: 2.30},
    {price: 12.80}
]

//purpose is to take numbers and reduce them down.
var total = prices.reduce(function(previous, current) {
    // return previous + current
    return {price: previous.price + current.price}
}, {price: 0})

var avgPrice = total.price/ prices.length

console.log(avgPrice)

// console.log(upperCaseFruit)
