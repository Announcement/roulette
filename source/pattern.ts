export default <Format, Groups>(expression: RegExp) =>
	function* (it: string): Iterable<RegExpExecArray & [ Format ] & { groups: Groups }> {
		let that: RegExpExecArray | null
		while ((that = expression.exec(it)) !== null)
			yield that as RegExpExecArray & [ Format ] & { groups: Groups }
}