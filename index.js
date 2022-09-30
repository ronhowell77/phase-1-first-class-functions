function receivesAFunction(hello){
    return hello()
}
function returnsANamedFunction(){
    return receivesAFunction
}
function returnsAnAnonymousFunction(){
    return function(){

    }
}