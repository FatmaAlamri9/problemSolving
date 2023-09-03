//Q18:
    function cal(heights) {

        let left = 0;
         let leftMax = 0;
        let right = heights.length - 1;
        let rightMax = 0;
        let blue = 0;
    
        while (left < right)
         {
            if (heights[left] <= heights[right]) 
            {
                if (heights[left] >= leftMax) 
                {
                    leftMax = heights[left];
                } 
                else 
                {
                    blue += leftMax - heights[left];
                }
                left++;   
            }
             else 
            {
                if (heights[right] >= rightMax)
                 {
                    rightMax = heights[right];   
                } 
                else 
                {
                    blue+= rightMax - heights[right];
                }
                right--;
            }
        }   
        return blue;  
    }
       
    const heights1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];   
    const output1 = cal(heights1);
        
    const heights2 = [4, 2, 0, 3, 2, 5];    
    const output2 = cal(heights2);
        
    console.log(output1);  
    console.log(output2);