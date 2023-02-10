export const getSpecifiedName = (type, params) => {
	const result = []
	for (const key in params) {
		result.push(type ? key : params[key])
	}

	return result
}

export const isJSON = (str) => {
	if (typeof str === "string") {
		try {
			const obj = JSON.parse(str)
			return typeof (obj === "object" && obj) || false
		} catch (e) {
			return false
		}
	}
}

//深拷贝
export const deepClone = (target) => {
	let result;
	if (typeof target === 'object') {
		if (Array.isArray(target)) {
			result = []; // 将result赋值为一个数组，并且执行遍历
			for (let i in target) {
				result.push(deepClone(target[i]))
			}
		} else if (target === null) {
			result = null;
		} else if (target.constructor === RegExp) {
			result = target;
		} else {
			result = {};
			for (let i in target) {
				result[i] = deepClone(target[i]);
			}
		}
	} else {
		result = target;
	}

	return result;
}

// 驼峰命名
export const transformName = name => {
	const nameList = name.split(' ')
	if (nameList.length <= 1) {
		return name.toLowerCase()
	}

	const result = nameList.reduce((a, b, c) => {
		if (c <= 0) {
			a.push(b.toLowerCase())
		} else {
			const endName = b.slice(1, b.length)
			const firstName = b.charAt(0).toUpperCase()
			a.push(firstName + endName)
		}

		return a
	}, [])

	return result.join('')
}