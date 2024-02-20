export default function zip (size: number) {
	return function zipper_reduceFn<T> (previous: Array<T[]>, current: T, index: number, array: T[]) {
		if (previous.length === 0)
            previous.push([])
		
        if (previous[previous.length - 1].length === size)
            previous.push([])

		previous[previous.length - 1].push(current)
        
		return previous
	}
}