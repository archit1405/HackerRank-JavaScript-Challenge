function getSecondLargest(nums) {
   var sortedArray = nums.sort(function(x, y) { return x > y; } );
    var filteredArray = sortedArray.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })

    return filteredArray[filteredArray.length - 2];
   
}
