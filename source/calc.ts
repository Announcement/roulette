import Pattern from "./pattern.ts"
import reset from "./reset.ts"

enum TOKEN_TYPE {
    OPERATOR,
    INTEGER,
    FLOAT,
    VARIABLE,
    GROUP
}

enum OPERATOR {
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = '*',
    DIVIDE = '/'
}

interface OperatorToken {
    type: TOKEN_TYPE.OPERATOR,
    operator: OPERATOR
}

interface IntegerToken  {
    type: TOKEN_TYPE.INTEGER
    value: number
}
interface FloatToken  {
    type: TOKEN_TYPE.FLOAT,
    value: number
}

interface GroupToken  {
    type: TOKEN_TYPE.GROUP,
    variant: '(' | ')'
}

interface VariableToken  {
    type: TOKEN_TYPE.VARIABLE,
    name: string
}

type Token =
    | OperatorToken
    | IntegerToken
    | FloatToken
    | GroupToken
    | VariableToken

// interface Application {
//     commonInterface?: CommonInterface
// }
// interface CommonInterface {
//     application?: Application
//     install (application: Application): void;
// }


class CalculatorInterface {
    private readonly inputElement: HTMLInputElement = document.querySelector('#input') || this.instantiateInputElement()
    private readonly outputElement: HTMLElement = document.querySelector('#output') || this.instantiateOutputElement()
    // application?: Application;
    // install (application: Application) {
    //     this.application = application
    // }
    private instantiateInputElement (): HTMLInputElement {
        const inputElement = document.createElement('input')
        
        inputElement.setAttribute('id', 'input')
        inputElement.id = 'input'

        document.body.append(inputElement)
        
        return inputElement
    }

    private initializeInputElement () {
        const eventListener: EventListener = this.onInput as (event: Event) => boolean

        this.inputElement.addEventListener('input', eventListener)
    }

    private instantiateOutputElement (): HTMLElement {
        const outputElement = document.createElement('pre')

        outputElement.setAttribute('id', 'output')
        outputElement.id = 'output'
 
        document.body.append(outputElement)

        return outputElement
    }

    private initializeOutputElement () {
        reset(this.outputElement)

    }
    constructor () {
        this.initializeInputElement()
        this.initializeOutputElement()
    }    

    
    private onInput (keyboardEvent: KeyboardEvent) {
        const tokens: Token[] = []
        const inputElement = keyboardEvent.target as HTMLInputElement

        const sourcecode = inputElement.value

        const grammarExecution = CalculatorApplication.grammar(sourcecode)
        const tokenizedGrammar = CalculatorApplication.tokenize(...grammarExecution)

        console.log(tokenizedGrammar)


        // const exec = getExec()

        // this.reset(outputElement)
        // this.tokenize(...exec(this.inputElement.value))

        // for (const item of exec(inputElement.value)) {
        //     if (!item.groups) continue
        // }
    }
}


class CalculatorApplication {
    public static readonly grammar = Pattern<`${number}` | '(' | ')' | string, { integer?: number, float?: number, group?: '(' | ')', variable?: string, operator?: OPERATOR }>(/((?<w>\s+)|(?<g>[()])|(?<o>[\+\-\*\/\^])|(?<i>\d+(?!\.))|(?<f>\d\.\d+)|(?<v>[a-z]))/gim)
    public static * tokenize (...grammarExecution: RegExpExecArray[]) {
        for (const input of grammarExecution) {

        }
    }
    public static parse (...tokenizedGrammar: Token[]) {}
    public static main<T> (...parameters: T[]): void {
    }
}

// CalculatorApplication.pattern.exec()

CalculatorApplication.main(new CalculatorInterface)
    


// function initInput() {
//     inputElement = document.querySelector('input') || (inputElement => {
//         document.body.append(inputElement)
//         return inputElement
//     })(document.createElement('input'))

//     document.addEventListener('input', onInput as (event: Event) => boolean as EventListener)
// }

// function initOutput() {
//     outputElement = document.querySelector('pre') || (preElement => {
//         document.body.append(preElement)
//         return preElement
//     })(document.createElement('pre'))
// }


// interface BinaryNode {}
// interface UnaryNode {}
// interface NilNode {}
// interface VariableNode {}
// interface NumberNode {}
// interface GroupNode {}
// interface OperatorNode {}

// let inputElement: HTMLInputElement
// let outputElement: HTMLPreElement

// // function createElement (tagName: Parameters<typeof document.createElement>): typeof document.createElement(typeof tagName) {}



// function onInput(this: Document, keyboardEvent: KeyboardEvent) {
//     // const stack: Stack[] = []
//     const tokens: Token[] = []

//     const exec = getExec(/((?<w>\s+)|(?<g>[()])|(?<o>[\+\-\*\/\^])|(?<i>\d+(?!\.))|(?<f>\d\.\d+)|(?<v>[a-z]))/gim)

//     resetNode(outputElement)

//     for (const item of exec(inputElement.value)) {
//         if (!item.groups) continue

//         // console.log(...Object.entries(item.groups).filter(([k, v]) => v !== undefined))
//         if (item.groups?.i) tokens.push({
//             type: TOKEN_TYPE.INTEGER,
//             value: parseInt(item.groups.i, 10)
//         })
//         if (item.groups?.f) tokens.push({
//             type: TOKEN_TYPE.FLOAT,
//             value: parseFloat(item.groups.f)
//         })
//         if (item.groups?.o) tokens.push({
//             type: TOKEN_TYPE.OPERATOR,
//             operator: item.groups.o as OPERATOR
//         })
//         if (item.groups?.g) tokens.push({
//             type: TOKEN_TYPE.GROUP,
//             variant: item.groups.g as '(' | ')'
//         })
//         if (item.groups?.v) tokens.push({
//             type: TOKEN_TYPE.VARIABLE,
//             name: item.groups.v
//         })

//         // if (item.groups.i) stack.push({ integer: parseInt(item[0], 10) })
//         // if (item.groups.w) stack.push({ variable: item[0] })
//         // if (item.groups.o) stack.push({ operator: item[0] as OPERATOR })
//         // if (item.groups.g) stack.push({ group: item[0] as '(' | ')' })
//         // if (item.groups.f) stack.push({ float: parseFloat(item[0]) })

//         // addText(outputElement, item[0])
//     }

//     console.log(tokens)

//     // const { size, tree: ast } = parse(stack)

//     // if (size !== stack.length) {
//     //     console.warn('invalid binary tree')
//     // }

//     // // console.log(stack)

//     // try {
//     //     console.log(parse(stack))
//     // } catch (e) {
//     //     console.warn(e)
//     // }

//     keyboardEvent.preventDefault()

//     return false
// }

// function resetNodes(nodes: Node[]): void {
//     for (const node of nodes) resetNode(node)
// }

// function resetNode(node: Node): void {
//     while (node.firstChild)
//         node.removeChild(node.firstChild)
// }

// function addText<ContainerElement extends HTMLElement>(containerElement: ContainerElement, text: string): ContainerElement {
//     containerElement.append(document.createTextNode(text))
//     return containerElement
// }

// function setElement<T extends HTMLElement, P extends HTMLElement>(containerElement: T, ...additionalElements: P[]): T {
//     resetNode(containerElement)

//     for (const additionalElement of additionalElements)
//         containerElement.append(additionalElement)

//     return containerElement
// }

// function getExec(expression: RegExp) {
//     return function* eachExec(it: string) {
//         let that

//         while (that = expression.exec(it))
//             yield that
//     }
// }

// function parse(stack: Array<Stack>): AST {
//     console.debug(stack)

//     if (stack.length === 0) {
//         throw new Error(`Stack does not contain any elements`)
//     }

//     if ('integer' in stack[0]) {
//         return { size: 1, tree: stack[0].integer }
//     }

//     if ('operator' in stack[0]) {
//         const { size: s0, tree: t0 } = parse(stack.slice(1))
//         const { size: s1, tree: t1 } = parse(stack.slice(1 + s0))

//         return { size: 1 + s0 + s1, tree: { [stack[0].operator]: [t0, t1] } as ASTree }
//     }

//     throw Error
// }

// setTimeout(main)

// function main() {
//     initOutput()
//     initInput()
// }

// function initInput() {
//     inputElement = document.querySelector('input') || (inputElement => {
//         document.body.append(inputElement)
//         return inputElement
//     })(document.createElement('input'))

//     document.addEventListener('input', onInput as (event: Event) => boolean as EventListener)
// }

// function initOutput() {
//     outputElement = document.querySelector('pre') || (preElement => {
//         document.body.append(preElement)
//         return preElement
//     })(document.createElement('pre'))
// }

// function parse (text: string) {
//     for (let i = 0, I = 0xff; i < I; i++) {
        
//     }
// }