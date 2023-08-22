//Q11 longest palindromic:

function palindromic(str,low,hig)
{
	for (let i = low; i <= hig; ++i)
		console.log(str[i]);
}

function longpalindromic(str)
{
	let n = str.length;
	let max = 1;
    let  s = 0;

	for (let i = 0; i < str.length; i++) 
    {
		for (let j = i; j < str.length; j++)
         {
			let flag = 1;

			for (let k=0; k<(j-i+1)/2; k++)
				if (str[i+k] != str[j-k])
					flag = 0;

			if (flag!=0 && (j-i+1) > max) {
				s = i;
				max = j - i + 1;
			}
		}
	}

	palindromic(str, s, s + max - 1);
	return max;
}

let str = "aaabbaa";
console.log(longpalindromic(str));
console.log(str);

