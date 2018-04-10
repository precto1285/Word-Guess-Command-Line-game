// **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

// **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically 
// whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object 
// representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter 
// object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object 
// (the second function defined in `Letter.js`)

// `Word.js` *should only* require `Letter.js`

