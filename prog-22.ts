
let color = ["red", "green", "blue"];
// Trying to access an index beyond the length of the array (intentional error)
console.log(color[3]); // This will cause an index error


let colors = ["red", "green", "blue"];
// Correcting the error by checking the array length before accessing the index
if (colors.length > 3) {
    console.log(colors[3]);
} else {
    console.log("Index is out of range.");
}
