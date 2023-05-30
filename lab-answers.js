////////////////////////////////
// Easy Going
////////////////////////////////
for(let i=0; i <= 20; i++){
  console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////
for(let i=0; i <= 200; i++){
  if(i % 2 ===0){
    console.log(i)
}}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for(let i=0; i <= 100; i++){
  if(i % 3 ===0 && i % 5===0){
    console.log('FizzBuzz')
}else if(i % 3 ===0){
  console.log('Fizz')
}else if(i % 5 ===0){
 console.log('Buzz') 
}
}
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
wolfy.splice(3,1,'Gotham City')

const sharky = ["Sharky", "shark", 20, "Left Coast"]

const plantee = ["Plantee", "plant",  5000 , "Mordor"]
plantee.splice(2,1 , 5001)

const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
wolfy.splice(0,1,'GameBoy')

const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
dart.push('Hawkins')

////////////////////////////////
// Yell At The Ninja Turtles
////////////////////////////////
let newArr= ['Leaonardo','Donatello','Raphael','Michaelangelo']
for(const name of newArr){
  name.toUpperCase()
}

////////////////////////////////
// Methods Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"));
favMovies.sort();
favMovies.pop();
favMovies.push("Guardians Of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.splice(14,1,'Avatar');
let half =Math.ceil(favMovies.length / 2);
let middle= favMovies.slice(0,half);
console.log(middle);
console.log(favMovies);
console.log(favMovies.indexOf(('Fast and Furious')));

////////////////////////////////
// Where Is Waldo
////////////////////////////////

////////////////////////////////
// Excited Kittens
////////////////////////////////
let kittyTalk=["...human... why you taking pictures of me...?", "...the catnip made me do it...","...why does the red dot always get away...?"]
let meow= 0
for(let i=0; i <= 20; i++){
  console.log("Love me, pet me! HSSSSSS!");
  if(i % 2=== 0){
   meow = Math.floor(Math.random() *2)
    console.log(kittyTalk[meow])
}}

////////////////////////////////
// Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
  nums.sort((a, b) => {return a - b});
    let halfArr = Math.floor(nums.length / 2);

  if (nums.length % 2) {
    console.log(nums[halfArr]);
  } else {
    console.log(nums[halfArr] + nums[halfArr] + 1) / 2.0;
  }
