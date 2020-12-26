//maxSubarraySum([4,2,1,6,2], 1)
function maxSubarraySum(arr, num){
    if (arr.length<num){
        return null
    }
    let maxSum =0
    let tempSum = 0
    for (let i =0; i<num; i++){
        maxSum += arr[i]

    }
    tempSum = maxSum

    // i keep increasing...till the arr ends
    for (let i=num; i< arr.length; i++){
        tempSum = tempSum-arr[i-num] + arr[i]
        console.log(tempSum, arr[i])
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))
























