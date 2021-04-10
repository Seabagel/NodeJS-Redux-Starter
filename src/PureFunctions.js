let minAge = 18;

// Impure, since minAge can change
function isEligible(age) {
    return age > minAge;
}

// Pure, the numbers don't change
function isEligible(age, minAge) {
    return age > minAge;
}
