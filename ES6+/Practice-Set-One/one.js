// Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).

// Your ES6 code here

const isEligibleToVote = (age) => (age  >= 18) ? "Eligible to vote" : "Not eligible to vote";

console.log(isEligibleToVote(20)) // Eligible to vote
console.log(isEligibleToVote(18)) // Eligible to vote
console.log(isEligibleToVote(17)) // Not eligible to vote