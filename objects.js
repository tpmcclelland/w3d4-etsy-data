//object notation
var pizza = new Object()
pizza.meat = 'Sausage'
pizza.cheese = 'Cheddar'
pizza.veggies = 'Olives'

//literal notation
var pizza = {
    meat: 'Sausage',
    cheese: 'Cheddar',
    veggies: 'Olives'
}

pizza.meat = 'ham'
// console.log(pizza.meat)

//dynamic way to get property
var topping = 'cheese'
// console.log(pizza[topping])

//plural for list of things, singluar for individual item
var props = Object.keys(pizza)
props.forEach(function(prop) {
    // console.log(pizza[prop])
})
// console.log(props)
var movies = [
    {
        title: 'Star Wars',
        genre: 'Sci Fi',
        year: 1977,
        directors: [
            {
                name: 'George Lucas',
            },
            {
                name: 'Jar-Jar'
            }
        ]
    },
    {
        title: 'Forest Gump',
        genre: 'Drama',
        year: 1995,
        directors: [
            {
                name: 'Robert Zemechas'
            }
        ]
    },
]

movies.forEach(function(movie) {
    //transform array of ojects into an array of strings
    var directors = movie.directors.map(function(director) {
        return director.name
    })
    // console.log(directors.join(', '))
    directors = directors.join(', ')
    // console.log(movie.title + ' - ' + movie.genre + ' (' + movie.year + ')' + movie.directors[0].name)

    console.log(movie.title + ' - ' + movie.genre + ' (' + movie.year + ') Directed by ' +  directors)
})
