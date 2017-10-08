# define-constants

Gets rid of repeating stuff when declaring self-defined constants.

Instead of typing things twice:
```javascript
const MY_CONSTANT = "MY_COSNTANT" // note a mistype
const MY_FAVOURITE_CONSTANT = "MY_FAVOURITE_CONSTANT"
const MY_CONSTANT_FOR_FUN = "MY_CONSTANT_FOR_FUN"
```

You can type things once:
```javascript
const {
	MY_CONSTANT,
	MY_FAVOURITE_CONSTANT,
	MY_CONSTANT_FOR_FUN,
} = defineConstants()

// MY_CONSTANT === "MY_CONSTANT"
// MY_FAVOURITE_CONSTANT === "MY_FAVOURITE_CONSTANT"
// MY_CONSTANT_FOR_FUN === "MY_CONSTANT_FOR_FUN"
```

and get them correct.
Anyway your `console.log(MY_VARIABLE)` will show the right text and you will never get frustrated searching for a mistyped constant.

You can also add some namespace to your constants:
```javascript
const {
	MY_NAMESPACE,
} = defineConstants()

const {
	MY_CONSTANT,
	MY_FAVOURITE_CONSTANT,
	MY_CONSTANT_FOR_FUN,
} = defineConstants(MY_NAMESPACE)

// MY_CONSTANT === "MY_NAMESPACE.MY_CONSTANT"
// MY_FAVOURITE_CONSTANT === "MY_NAMESPACE.MY_FAVOURITE_CONSTANT"
// MY_CONSTANT_FOR_FUN === "MY_NAMESPACE.MY_CONSTANT_FOR_FUN"
```

Tweak namespace delimiter if you wish:
```javascript
const {
	MY_CONSTANT,
	MY_FAVOURITE_CONSTANT,
	MY_CONSTANT_FOR_FUN,
} = defineConstants("MY_NAMESPACE", "/")

// MY_CONSTANT === "MY_NAMESPACE/MY_CONSTANT"
// MY_FAVOURITE_CONSTANT === "MY_NAMESPACE/MY_FAVOURITE_CONSTANT"
// MY_CONSTANT_FOR_FUN === "MY_NAMESPACE/MY_CONSTANT_FOR_FUN"
```

TODO: babel plugin to transform the code at compile time.
