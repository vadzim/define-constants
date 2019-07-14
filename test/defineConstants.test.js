import defineConstants from "../src/defineConstants.js"

test("plain constants", async () => {
	const { A, B, C } = defineConstants()
	expect(A).toBe("A")
	expect(B).toBe("B")
	expect(C).toBe("C")
})

test("NS constants", async () => {
	const { X } = defineConstants()
	const { A, B, C } = defineConstants(X)
	expect(A).toBe("X.A")
	expect(B).toBe("X.B")
	expect(C).toBe("X.C")
})

test("NS+/ constants", async () => {
	const { A, B, C } = defineConstants("X", "/")
	expect(A).toBe("X/A")
	expect(B).toBe("X/B")
	expect(C).toBe("X/C")
})
