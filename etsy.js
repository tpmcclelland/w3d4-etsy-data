// Show me how to calculate the average price of all items. Please console.log the average
function getAveragePrice() {
    //total the prices of each item taking into consideration they are objects
    var totalPrices = items.reduce(function(previous, current) {
        return {price: previous.price + current.price}
    }, {price: 0})

    //return the price after formatting it with accounting.js
    return 'The average price is ' + accounting.formatMoney(totalPrices.price / items.length)
}

console.log(getAveragePrice())

// Show me how to get an array of items that cost between $14.00 and $18.00 USD
function itemsBetween14and18() {
    //filter the items to find the subset of items and return the array
    return items.filter(function(item) {
        if (item.price > 14.00 && item.price < 18.00) {
            return item
        }
    })

}

console.log('Items that cost between $14.00 USD and $18.00 USD:', itemsBetween14and18())

// Show me how find the item with a "GBP" currency code and print its name and price.
function getGBPCurrency() {
    //filter the items to grab all the ones with GBP currency_code
    var matches = items.filter(function(item){
        return item.currency_code === 'GBP' ? true : false
    })

    //transform the matches results to make the title and price sentance
    var titles = matches.map(function(match) {
        return `${match.title} costs ${match.price}`
    })

    //to get the formatting of the answer to be correct, only returning the first element in the array (there is only one answer in this case)
    return titles[0]
}

console.log(getGBPCurrency())

// Show me how to find which items are made of wood.
function itemsMadeOfWood() {
    //get the items made of wood by filtering the items based on wood being in the material array
    return items.filter(function(item) {
        return item.materials.includes('wood') ? true : false
    })
        //transform each item from the filtered list to add the is made of wood to it.
        .map(function(woodItem) {
            return `${woodItem.title} is made of wood.`
        })
        .join('\n')
}

console.log(itemsMadeOfWood())

// Show me how to find which items are made of eight or more materials
function itemsMadeOfEigthOrMoreMaterials() {
    //filter out items with less than 8 materials
    return items.filter(function(item) {
        return item.materials.length >= 8 ? true : false
    })
        //create array of each item that has 8 or more items formatted as required
        .map(function(matchedItem) {
            return `${matchedItem.title} has ${matchedItem.materials.length} materials:\n${matchedItem.materials.join('\n')}`
        })
        .join('\n\n')

    //return single string for answer
    // return materialList.join('\n\n')
}

console.log(itemsMadeOfEigthOrMoreMaterials())

// Show me how to calculate how many items were made by their sellers
function madeBySellers () {
    //filter out items that aren't wood
    // var madeBySellers = items.filter(function(item) {
    //     return item.who_made === 'i_did' ? true : false
    // })

    //find whether an item has i_did and if so increment a counter and return the result
    return  items.reduce(function(previous, current) {
        var counter = current.who_made === 'i_did' ? 1 : 0
        return previous + counter
    }, 0) + ' were made by their sellers'

}

console.log(madeBySellers())
