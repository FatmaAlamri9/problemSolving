//Q15: repeating

function repeating(x){

for(let i = 0; i < x.length; i++)
{
	if (x.indexOf(x.charAt(i),x.indexOf(x.charAt(i))+1) == -1)
	{
		console.log(x[i]);
		break;
	}
}
return;
}
let x = 'hello';
repeating(x);

