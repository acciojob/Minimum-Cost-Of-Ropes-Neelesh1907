function calculateMinCost() {
  //your code here
  const input = document.querySelector("input");
	const val = input.value;
	let arr = [];
	arr.push(val);
	let inArr = arr.split(",");
	for(let i=0;i<inArr.length;i++){
		inArr[i] = Number(inArr[i]);
	}
	while(inArr.length>2){
		let a = inArr[0], b=inArr[1];
		for(let i=0;i<inArr.length;i++){
			let max = a>b?a:b;
			let min = a<b?a:b;
			if(inArr[i]<max){
				a = min;
				b = inArr[i];
			}
		}
		let minCost = a+b;
		let ans = [];
		ans.push(minCost);
		for(let i=0;i<inArr.length;i++){
			if(inArr[i]!=a && inArr[i]!= b){
				ans.push(inArr[i]);
			}
		}
		inArr = [...ans];
	}
	let finalCost = 0;
	for(let e of inArr){
		finalCost+=e;
	}
  const answer = document.querySelector("#result");
	answer.textContent = finalCost;
  
}  
