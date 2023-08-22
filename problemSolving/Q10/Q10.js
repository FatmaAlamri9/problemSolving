
function checkElements(arr, n, A, B) {
	let st = new Set();


	for (let i = 0; i < n; i++) {
		st.add(arr[i]);
	}

	for (let i = A; i <= B; i++) {

		if (!st.has(i)) {
			return false;
		}
	}

	return true;
}

let arr = [1, 4, 5, 2, 7, 8, 3];
let n = arr.length;

let A = 2;
let B = 5;

if (checkElements(arr,n,A,B)) {
	console.log("Yes");
}
else
 {
	console.log("No");
}
