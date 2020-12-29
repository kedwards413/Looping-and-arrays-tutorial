var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    for (let i = 0; i <chunk_one.length; i++){
        for (let j= 0; j<chunk_two.length; j++){

        }
    }
    let arrays = firstArray.concat(secondArray)
    newArray.push(arrays)

    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));