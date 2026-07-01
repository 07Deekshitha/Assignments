//check whether a number is prime or not
let numbers: number[] = [25,13,35,67,1];   // array of numbers to check for prime status
//let isPrime: boolean = true;

// Prime numbers must be greater than 1
for (let n of numbers) // loop through each number in the array
{
    // assuming the number is prime until proven and for each number we need to reset the isPrime variable to true and check for each number whether it is prime or not
    let isPrime: boolean = true; 
    if (n <= 1) { // 0 and 1 are not prime numbers
        isPrime = false;
    } 
        else 
        {
        // Check divisibility from 2 to n-1
        for (let i = 2; i < n; i++)
            {
                if (n % i === 0) 
                { // remainder is 0 means it is divisible by i so it is not prime
                    isPrime = false; // number is not prime if it is divisible by any number other than 1 and itself
                    break;
                }
            }
        }

    // output for each number whether it is prime or not as its a loop and we are checking for each number in the array
    
    if (isPrime) {
        console.log(`${n} is a prime number`);
    } else {
        console.log(`${n} is not a prime number`);
    }
}