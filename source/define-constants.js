// @flow

export default function defineConstants(namespace?: string = "", delimiter?: string = "."): { [string]: string } {
	const prefix = namespace && namespace + delimiter
	return new Proxy({}, { get: (_, name) => prefix + name })
}
