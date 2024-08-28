function isPrime(number) {
    //the i in the for loop starts from 3 and , because we make sure that the given number is odd
    //and ends with the square root of the number to avoid unnecessary iterations
    for(let i = 3; i * i <= number; i += 2)
        if(number % i === 0)                   
            return false;

    return true;
}

function getNextPrime(number) {
    if(number < 2) return 2; //return 2 (the first prime number) if the given number is less then it

    let prime = (number % 2 === 0) ? number + 1 : number + 2;   //if the number is even, we make it odd (+1), otherwise we keep it odd (+2), 
                                                                //since every even number can be divided by 2 and will not be a prime number

    while(!isPrime(prime)) 
        prime += 2; //keep adding 2 to keep the number odd, until a prime number is found

    return prime;
}

module.exports = { getNextPrime };