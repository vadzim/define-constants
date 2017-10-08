# define-constants

Gets rid of repeating stuff when declaring self-defined constants.

Instead of writing smth like that:
```javascript
const MY_CONSTANT = "MY_CONSTANT"
const MY_FAVOURITE_CONSTANT = "MY_FAVOURITE_CONSTANT"
const MY_CONSTANT_FOR_FUN = "MY_CONSTANT_FOR_FUN"
```

You can write your constant just once when declaring it:
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

and get the same result.

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
