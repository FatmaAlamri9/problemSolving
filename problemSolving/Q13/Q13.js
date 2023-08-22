// Q13 : set of integers

	function A(array,num,sum,x,s)
	{
		if (x > num)
        {
			return;
        }
		if (x == num)
         {
			s.add(sum);
			return;
		}
		A(array, num, sum + array[x], x + 1, s);
		A(array, num, sum, x + 1, s);
	}
	
	function output(array,num)
	{
		let s=new Set();
		A(array,num,0,0,s);
		let y=[...s]
		y.sort(function(a,b){return a-b;})

		for (let [key, value] of y.entries())
        console.log(value)
	}
	
	let array=[1,2];
	let num = array.length;
	output(array,num);
	

