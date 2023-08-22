//Q7: leaders in an array

function Leaders( array, size)
{
	for (let i = 0; i < size; i++)
	{
		let j;
		for (j = i+1; j < size; j++)
		{
			if (array[i] <= array[j])
				break;
		}
		if (j == size) 
			document.write(array[i] + " ");
}
}

		let array = [ 16, 17, 4, 3, 5, 2 ];
		let n = array.length;

		Leaders(array, n);



