export default function defineConstants(namespace = "", delimiter = ".") {
	const prefix = namespace && `${namespace}${delimiter}`
	return new Proxy({}, { get: (_, name) => prefix + name })
}
