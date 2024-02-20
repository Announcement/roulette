import Pattern from "./pattern.ts"

const enum GAME_SEQUENCE {
	EUROPEAN = '0-32-15-19-4-21-2-25-17-34-6-27-13-36-11-30-8-23-10-5-24-16-33-1-20-14-31-9-22-18-29-7-28-12-35-3-26',
	AMERICAN = '0-28-9-26-30-11-7-20-32-17-5-22-34-15-3-24-36-13-1-00-27-10-25-29-12-8-19-31-18-6-21-33-16-4-23-35-14-2'
}

enum COLOR {
	BLACK,
	RED,
	GREEN
}


// const sequence = 
console.log(tag(GAME_SEQUENCE.AMERICAN.split(/-+/g)).map(createModifier('value', 'variant', identity)).map(createModifier('variant', 'pocket', Number.parseFloat)))
// class Entry {
// 	public color: COLOR
	
// 	constructor (public variant: string, private index: number, private value: number = parseInt(variant, 10)) {
// 		this.color = value === 0 ? COLOR.GREEN : index % 2 ? COLOR.RED : COLOR.BLACK
// 	}

// 	[Symbol.toPrimitive](hint: 'number'): number
// 	[Symbol.toPrimitive](hint: 'string'): string
// 	[Symbol.toPrimitive](hint: 'default'): Entry
// 	[Symbol.toPrimitive](hint: 'number' | 'string' | 'default'): number | string | Entry {
// 		switch (hint) {
// 			case "string": return `[ ${COLOR[this.color].padStart(4).padEnd(5)} ] ${this.variant.padStart(2)}`
// 			case "number": return this.value
// 			default: return this
// 		}
// 	}
// }

// // const entry = new Entry('00', 0)
// // console.log(`${entry}`)


// export class Roulette {
// 	public static readonly AMERICAN = toColorArray(GAME_SEQUENCE.AMERICAN)
// 	public static readonly EUROPEAN = toColorArray(GAME_SEQUENCE.EUROPEAN)
// 	public static main (): void {
// 		// console.log(this.AMERICAN)
// 		// console.log(T)
// 		// const americanColors = new Map
// 		// console.log(
// 			// this.AMERICAN
			
// 			// )
// 			// 	let american = this.AMERICAN.reduceRight((accumulator: string[][], currentValue, index, array) => {
// 				// 		if (parseInt(currentValue, 10) === 0) accumulator.unshift(currentValue)
// 				// 		else (accumulator[0].unshift(currentValue))
// 				// 		return accumulator
// 				// 	}, [ [] ])
// 	}
// 	public static 
// }
// function toColorArray (gameSequence: GAME_SEQUENCE) {
// 	const variants = gameSequence.split(/\-+/g) as Array<`${number}`>

// 	const color_objects = variants.map((it, i) => ({ string: it, number: Number.parseInt(it, 10), index: i }))
// 	// .filter(it => it.n !== 0)
// 	const color_array = color_objects.map((v, i, a) => {
// 		const relativeIndex = i - a.filter(x => x.number === 0).filter(x => x.i < i).length
// 		return { ...v, color: v.number === 0 ? COLOR.GREEN : relativeIndex % 2 ? COLOR.RED : COLOR.BLACK }
// 	})
	
// 	color_array.forEach(it => {
// 		const element = new Entry(it.string, it.index)
// 		console.log(`${element}`)	
// 	})

// 	return color_array
// 	function mapFn (pocket: `${number}`, index: number) {
// 		return {
// 			pocket,
// 			index,

// 		}
// 	}
// }

// Roulette.main()
// // interface Entry {
// // 	Pocket: string,

// // }
// class Slot {
// 	constructor (protected Pocket: `${number}`) {

// 	}
// }
// class Roulette {
// 	#slots = new Set
// 	constructor (protected gameSequence: GAME_SEQUENCE) {
// 		const DIGITS = Pattern<`${number}`>(/\d{1,2}/g)
// 		for (const [ digit ] of DIGITS(GAME_SEQUENCE.AMERICAN))
// 			this.#slots.add(new Slot(digit))

// 		console.log(this.#slots)
// 	}
// 	// const DIGITS = Pattern(/\d{1,2}/g) as (it: string) => Iterable<(RegExpExecArray & [`${number}`])>
// }

// // class Entry {
// // 	constructor(public Pocket: `${number}`, public Index: number) {
		
// // 	}
// // 	get ID (): number {
// // 		return Number.parseFloat(this.Pocket)
// // 	}
// // 	get Color (): COLOR {
// // 		if (this.Index === 0) return COLOR.GREEN
// // 		else if (this.Index % 2 === 0) return COLOR.RED
// // 		else if (this.Index % 2 === 1) return COLOR.BLACK
// // 		else throw new Error(`Your math sucks.`)
// // 	}
// // }
// // // enum Flags {
// // // 	PARITY,
// // 	COLOR,
// // }


// function main () {
// 	const AmericanWheel = new Roulette(GAME_SEQUENCE.AMERICAN)

// 	// const DIGITS = Pattern(/\d{1,2}/g) as (it: string) => Iterable<(RegExpExecArray & [`${number}`])>

// 	// let entries: Entry[]
// 	// let colored: Entry[]

// 	// entries = [] as Entry[]
// 	// colored = [] as Entry[]


// 	// for (const [ digit ] of DIGITS(GAME_SEQUENCE.AMERICAN)) {
// 	// 	const entry: Entry = new Entry(digit, colored.length)

// 	// 	if (entry.ID !== 0) colored.push(entry)
// 	// 	entries.push(entry)
// 	// }

// 	// const max = Math.max(...entries.map(({ ID }) => ID))
// 	// console.log(entries.length)
// 	// console.log(max)

// 	// const packets = entries.filter(({ ID }) => ID !== 0).sort(({ ID: idx0 }, { ID: idx1 }) => idx0 - idx1).reduce(zip(3), []).reduce(zip(4), [])
// 	// for (const packet of packets) {
// 	// for (const entry of packet)
// 	// 	console.log(...entry.map(it => `${COLOR[it.Color].padStart(5)} ${it.ID.toString().padStart(2)}`))
// 	// 	console.log('')
// 	// }
// }


// 	// for (let h = 0, H = max; h <= H; h++) {
// 	// 	let array = [] as (typeof entries[number])[]
// 	// 	for (let k = 0, K = 3; k < K; k++) {
// 	// 		array.push(entries.find(({ ID }) => ID ===  -~h) as (typeof entries[number]))
// 	// 		h++
// 	// 	}
// 	// 	console.log(...array)
// 	// }
// 	// entries.map(it => ({ [it.string]: (it.id % 2 === 1 ? 'black' : it.id % 2 === 0 ? 'red' : 'green') }) ).forEach(it => console.log(it))
// // }


// // ;(document !== undefined && document.readyState === 'loading' ? (it: () => void) => document.addEventListener('DOMContentLoaded', it) : (it: () => void) => setTimeout(it))(main)
// main()
// // initialize(main)

function debug(fn: <This, Params, Result>(this: This, ...params: Params[]) => Result) {
	return function debugDecorator (this: ThisType<typeof fn>, ...params: Parameters<typeof fn>): ReturnType<typeof fn> {
	  console.debug('Calling', fn.name, arguments);
	  return fn.apply(this, params);
	};
  }

function tag<T> (array: T[]) {
	// console.log('attempting to decorate/tag')
	return array.map((value, index) => ({ value, index }))
	// return function tagDecorator () {
	// 	console.log('yolo')
	// }
}

function createModifier<T, K> (inputProperty: T, outputProperty: K, transformationFn/*: <A, B>(input: { [T | K]: B }) => A*/) {
	return function mapFn (item: T, index: number, array: Array<T>) {
		// type X = T & { [x: typeof inputProperty]: ReturnType<transformationFn> }
		return { [outputProperty]: transformationFn(item[inputProperty]), ...item }
	}
}
function identity (it) {
	return it
}