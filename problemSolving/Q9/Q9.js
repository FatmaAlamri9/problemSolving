//Q9 : WomensDAY

function countSubstring(S, N) {
	
	let ans = 0;
	let	lower = 0;
	let	upper = 0;

	for (let i = 0; i < S.length; i++)
     {
		upper = 0;
		lower = 0;

		for (let j = i; j < S.length; j++)
         {
			if (S[j] === S[j].toUpperCase())
            {
             upper++;
            }
			else
            {
             lower++;
            }
			if (upper == lower)
            {
                 ans++;
            }
		}
	}
	return ans;
}

let S = "WomensDAY";
console.log(countSubstring(S, S.length));
