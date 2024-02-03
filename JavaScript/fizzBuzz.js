// n never be less than 1
// create an empty array
//  push FizzBuzz if n % 3 === 0 && n % 5 === 0
// push fizz if n % 3 === 0
// push buzz if n % 5 === 0
// else above push normal numbers



function fizzbuzz(n){
    if (n < 1) {
        return []
    }
    let output = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i% 5 === 0) {
            output.push("FizzBuzz")
        } else if (i % 3 === 0) {
            output.push("Fizz")
        }else if (i % 5 === 0) {
            output.push("Buzz")
        } else {
            output.push(i)
        }
    }
    return output;
}