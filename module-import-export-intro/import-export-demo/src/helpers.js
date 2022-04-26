function helpful() {
    console.log('WOOOAH LOOK HOW HELPFUL I AM!!!');
}

function sort() {
    console.log("IM SORTING IM SORTING!!!");
}

function sing() {
    console.log("LA LA LA!!!")
}

//* Export Default Function
//? EXPORT is going to send out the whole file
//? DEFAULT is saying: out of all the functions in this file,
//? 'helpful' MUST get sent out.
// export default helpful;

//* Export Multiple Functions : CURLY BRACES!!!
// export { helpful, sort, sing };

//* Mix Default and Curly Braces together
export default helpful;
export { sort, sing };