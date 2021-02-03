const nums = [2, 3, 4, 5, 6, 7, 8, 9,5];
const part = nums.slice(3, 7);
// console.log(part);

// remove part
const nums1 = [2, 3, 4, 5, 6, 7, 8, 9,5];
const removed =nums1.splice(2, 4, 77, 88);
console.log(removed);
console.log(nums1);

// splice hochhe jei number theke shoro hobe tar last digit joto ta totota katbe jemon (2, 5)tahole 2 theke shoro kore 5 ta katbe..abr splice number add o kra jay