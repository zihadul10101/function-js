 nums =[25,75,20,30,60,96,9];
//  evenyfy(nums);
 friends_ages=[21,33,40,24,15]
 evenyfy(friends_ages);
function evenyfy(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
    if (num % 2 == 0) {
        console.log(num,":is odd number");
    }else{
       console.log(num,":is even number"); 
    }
        
    }  
}