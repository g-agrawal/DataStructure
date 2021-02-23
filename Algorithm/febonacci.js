
function getNthFib1(n) {
	if(n === 1) {
		return 0;
	} else if(n ===2) {
		return 1;	
	}	
	return getNthFib1(n -1) + getNthFib1(n -2);
}


function getNthFib(n, cache = { 1: 0, 2:1 }) {
    if(n in cache) {
        return cache[n];
    } else {
        cache[n] = getNthFib(n-1, cache) + getNthFib(n-2, cache);
        return cache[n];
    }    
}

function getNthFib2(n) {
	if(n < 2) {
		return n-1;
	}    
	const result = [0, 1];
	for(let i = 2; i < n; i++) {
			result.push(result[i-1] + result[i-2]);
	}
	return result.pop();
}

console.log(getNthFib2(6));