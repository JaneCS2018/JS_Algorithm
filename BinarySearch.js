function search(array, target){
    let left=0
    let right= array.length-1

    while(left <=right){
        let mid = left + Math.floor((right-left)/2)
        let current = array[mid]
        if (target > current){
            left = mid + 1
            console.log(left)
        }else if(target<current){
            right = mid-1
        }else{
            return mid
        }
    }
    return -1
}

console.log(search([2,3,4,7,9], 9))