export default function (...nodes: Node[]): void {
    for (const node of nodes) resetNode(node)
}

function resetNode(node: Node): void {
    while (node.firstChild)
        node.removeChild(node.firstChild)
}