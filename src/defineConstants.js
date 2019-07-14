// @flow

/**
 * @returns an object with properties containing their names as values.
 */

export default function defineConstants(namespace?: string = "", delimiter?: string = "."): { [string]: string } {
	const prefix = namespace && namespace + delimiter
	return new Proxy({}, { get: (_, name) => prefix + name })
}
