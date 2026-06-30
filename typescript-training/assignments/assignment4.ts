/*Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions*/


let transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let creditCount: number = 0;
let debitCount: number = 0;
let totalCredit: number = 0;
let totalDebit: number = 0;
let suspiciousCount: number = 0;   

for (let amount of transactions) 
{
    //let amount: number = transactions[i];
    //credit transaction
    //positive value refers credit transaction
    if (amount > 0) { 
        creditCount = creditCount + 1;
        totalCredit = totalCredit + amount;
        if (amount > 10000) {
            console.log(`Suspicious credit Transaction with Amount: ${amount}`);
            suspiciousCount = suspiciousCount + 1;
        }
    } 
    //debit transaction
    //negative value refers debit transaction
    else {
        debitCount = debitCount + 1; //negative value refers debit transaction
        totalDebit = totalDebit + amount;
        if (amount < -10000) {
            console.log(`Suspicious debit Transaction with Amount: ${amount}`);
            suspiciousCount = suspiciousCount + 1;
        }
    }
}
    
let remainingBalance: number = totalCredit + totalDebit;
console.log(`Total number of credit transactions: ${creditCount}`);
console.log(`Total number of debit transactions: ${debitCount}`);
console.log(`Total amount credited: ${totalCredit}`);
console.log(`Total amount debited: ${totalDebit}`);
console.log(`Total number of suspicious transactions: ${suspiciousCount}`);
console.log(`Total amount remaining in Bank Account: ${remainingBalance}`);
