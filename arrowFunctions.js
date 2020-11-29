function modifyArray(nums) {
    const func = nums.map(function(num) {
        if ((num % 2) == 0){
            return num*2;
        }
        else {
           return num*3;
        
        }

    });
    return func
    
}
