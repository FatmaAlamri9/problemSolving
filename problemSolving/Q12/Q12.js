// Q12: 21/8 

function numbers(array)
 {

	const res = [];
    const pos = [];
    const neg = [];
  
    for (const num of array)
	 {
        if (num >= 0)
		{
            pos.push(num);
        }
		 else
		{
            neg.push(num);
        }
    }

    let posIndx = 0;
    let negIndx = 0;

    for (let i = 0; i < array.length; i++)
	 {
        if (i % 2 === 0)
		{
            res.push(pos[posIndx]);
            posIndx++;
        }
         else
        {
            res.push(neg[negIndx]);
            negIndx++;
        }
    }
    return res;
}

const input = [9,4,-2,-1,5,0,-5,-3,2];
const NArray = numbers(input);
console.log(NArray)