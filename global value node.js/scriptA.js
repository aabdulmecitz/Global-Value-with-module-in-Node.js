var firstName = 'Ahmet';

var log = function(name){
    console.log(name);
}


// this metod is defining as global
module.exports = {
    firstName,
    log
}