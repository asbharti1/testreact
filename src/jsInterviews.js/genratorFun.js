function* fetchData(){}
//or both are generator function. the power of a genreator, you wana able to pause/continue this funtion, to pause execution, you need to yield keywords
function *fetchData1(){
    const data = yield fetchMovies();
}
//when you execute the function, it's return an iterator that you can control with the next() method
function* fetchMovies(){
    const data = yield fetch();
}
const iter = fetchData();
iter.next();
//using the yield keywords tells the function to stop and wait. while it's paused,nothing else will execute until another next calls happens
// the next() method return an object with two properties, value and done.
//example
function* fetchUsers(){
    let url = 'http://jsonplaceholder.typecoe.com/users'
    yield fetch(url)
    .then(res => res.json())
    .then(users => {
        return users;
    });
}
const userIt = fetchUsers();
userIt.next().value.then(res => console.log(res))
//an asynch function always return a promises
//require the async keyword before the function declaration
//uses a try/ catch block for rejected promises 
