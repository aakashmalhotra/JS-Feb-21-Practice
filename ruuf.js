// 3.


// Where can you print out the value of variable c without resulting in an error?


var a = 1;

function z() {
    var d = 4;
    return d;
}


function y() {
    return z();
}


function x() {
    return y();
}


console.log(x());


Answer: unknown