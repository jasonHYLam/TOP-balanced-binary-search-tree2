export function mergeSort(array) {
    if (array.length === 1) return array;
    else {
        const half = Math.ceil(array.length/2)
        // split array in half
        const leftHalf = array.slice(0, half)
        // call mergeSort on the left half
        let sortedLeftHalf = mergeSort(leftHalf)

        const rightHalf = array.slice(half)
        // call mergeSort on the right half
        let sortedRightHalf = mergeSort(rightHalf);

        //for each element in left half and right half, see which is smaller
        let mergedArray = [];
        while (sortedLeftHalf[0] || sortedRightHalf[0]) {
            // if (sortedLeftHalf[1] < sortedRightHalf[0]) { is this wrong?
            if (sortedLeftHalf[0] < sortedRightHalf[0]) {
                mergedArray.push(sortedLeftHalf[0])
                sortedLeftHalf.shift()
            } else if (sortedRightHalf[0] < sortedLeftHalf[0]) {
                mergedArray.push(sortedRightHalf[0])
                sortedRightHalf.shift()

                // edge case where the same number is being compared
            } else if (sortedLeftHalf[0] == sortedRightHalf[0]) {
                mergedArray.push(sortedLeftHalf[0])
                mergedArray.push(sortedRightHalf[0])
                sortedLeftHalf.shift()
                sortedRightHalf.shift()
                // edge case where one array is empty
            } else if (!sortedLeftHalf[0]) {
                mergedArray.push(sortedRightHalf[0])
                sortedRightHalf.shift()
            } else if (!sortedRightHalf[0]) {
                mergedArray.push(sortedLeftHalf[0])
                sortedLeftHalf.shift()
            }
            }
        return mergedArray;
    }
}