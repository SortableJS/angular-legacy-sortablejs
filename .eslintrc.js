module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        angular: true,
        browser: true,
        expect: true,
        element: true,
        by: true,
        describe: true,
        it: true,
        exports: true,
        require: true,
        __dirname: true,
    },
    rules: {
        /* Whitespace rules */

        // Require 2 space indentation,
        indent: ["warn", 2, {
          // Require 'case' to be on the same indentation level as 'switch'
          SwitchCase: 0,
          // Require indentation for functions and parameters.
          FunctionDeclaration: {body: 1, parameters: 1},
          // Require indentation for function call arguments
          CallExpression: {arguments: 1},
          // Don't check the indentation of chained member expressions.
          // eslint isn't smart enough to let us permit no up-indenting at
          // the global indentation level 0.
          MemberExpression: "off",
        }],
        // Require no spaces before commas, but require spaces after commas.
        "comma-spacing": ["warn", {before: false, after: true}],
        // Require a single space after :, but not before it.
        "key-spacing": ["warn", {beforeColon: false, afterColon: true}],
        // Require spaces after if, else, etc.
        "keyword-spacing": "warn",
        "no-multiple-empty-lines": ["warn", {max: 1}],
        // Disallow `foo .x`, `foo. y`, etc.
        "no-whitespace-before-property": "warn",
        // Disallow spaces before semicolons.
        "semi-spacing": ["warn", {before: false, after: true}],
        // Disallow multiple spaces around operators, etc.
        "no-multi-spaces": "warn",
        // Require a single space before opening braces.
        "space-before-blocks": ["warn", {
            functions: "always",
            keywords: "always",
            classes: "always",
        }],
        // Require NO spaces before the function parentheses.
        "space-before-function-paren": ["warn", "never"],
        // Disallow redundant spaces inside parentheses.
        "space-in-parens": ["warn", "never"],
        // Require spaces around infix operators.
        "space-infix-ops": "warn",
        // Require a single space after 'new', 'delete', etc.,
        // but require NO spaces after ++, !, etc.
        "space-unary-ops": ["warn", {
            words: true,
            nonwords: false,
        }],
        // Disallow redundant spaces inside square brackets.
        "array-bracket-spacing": ["warn", "never"],
        // Require files to end with a single newline character.
        "eol-last": "warn",
        // Require lines to end with Unix \n newline characters only.
        "linebreak-style": ["warn", "unix"],
        // Require spaces before and after the => in arrow functions.
        "arrow-spacing": ["warn", {before: true, after: true}],
        // Require trailing commas across many lines.
        "comma-dangle": ["warn", {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
        }],
        // Require commas to be on the end of lines, not at the start.
        "comma-style": ["warn", "last"],
        // Don't allow extra blank lines inside of blocks.
        "padded-blocks": ["warn", "never"],

        /* Other style rules */

        // enforce lowerCamelCase, but not on properties of objects.
        camelcase: ["warn", {properties: "never"}],
        // Require dots across lines to start on the second line.
        "dot-location": ["warn", "property"],
        // Encourage .x over ['x']
        // Allow keywords also, which are supported in ES5.
        "dot-notation": ["warn", {allowKeywords: true}],
        // Disallow 'return' in an 'else' block.
        "no-else-return": "warn",
        // Disallow `"" + x` and `+x`., etc. !!x will still be allowed.
        "no-implicit-coercion": ["error", {
            boolean: false,
            number: true,
            string: true,
        }],
        "newline-before-return": "warn",
        // Prefer no quotes for properties.
        "quote-props": ["warn", "as-needed", {
            keywords: false,
            numbers: false,
        }],
        /* Style rules which avoid semantic problems later... */

        // Require braces for statements always
        curly: "error",
        // Require there to be no semicolons at the end of lines.
        // semicolons should appear at the start of some lines instead.
        semi: ["error", "never"],
        // Complain when some lines do not start with semicolons.
        "no-unexpected-multiline": "error",
        // Disallow labelled loops, which are hard to follow.
        "no-labels": "error",
        // Require functions to either always or never return values.
        "consistent-return": "error",
        // Disallow lexical declarations in case blocks.
        "no-case-declarations": "error",
        // Disallow blocks which do nothing in ES5.
        "no-lone-blocks": "error",
        // Disallow f.call() and f.apply() when f() is the same.
        "no-useless-call": "error",
        // Disable the comma operator, which is dumb.
        "no-sequences": "error",
        // Disable Yoda Conditions like 3 === x
        yoda: ["error", "never"],
        // Disallow nested ternary expressions, which are hard to follow.
        "no-nested-ternary": "error",
        // Allow unused variables, for now...
        "no-unused-vars": "off",
        // Require ES6-style imports to be sorted.
        "sort-imports": "warn",

        /* Semantic rules */

        // Require === over ==, except for == null.
        eqeqeq: ["error", "allow-null"],
        // Disallow x === -0. in favour of x === 0 or Object.is(x, -0)
        "no-compare-neg-zero": "error",
        // Disallow conditions which always hold true, like if (true)
        "no-constant-condition": "error",
        // Require a default: case for switch statements always
        "default-case": "error",
        // Require hasOwnProperty for for...in loops.
        "guard-for-in": "error",
        // Disallow var inside if, for, etc.
        "block-scoped-var": "error",
        // Disallow `var` completely.
        "no-var": "error",
        // Require one var, let, or const declaration per line.
        "one-var": ["error", "never"],
        // Disallow const x = y = 1, etc.
        "no-multi-assign": "error",
        // Insist that `const` should be used instead of `let`, where possible.
        "prefer-const": "warn",
        // Treat function parameters as if they are `const`.
        "func-style": ["error", "expression"],
        "no-param-reassign": "error",
        // Require setters to always have matching getters, but not
        // the other way around.
        "accessor-pairs": "error",
        // Don't allow alert, confirm, or prompt by default
        "no-alert": "warn",
        // Require a radix parameter for parseInt.
        radix: ["error", "always"],
        // Require wrapping functions which are called immediately in parens.
        "wrap-iife": ["error", "any"],
        // Do not allow arrow functions, getters, or setters to be empty.
        // This can catch a problem where you write () => {},
        // which returns undefined, not an empty object,
        // or where you write a getter or setter and forget to get or set
        // values.
        "no-empty-function": ["error", {
            allow: [
                "functions",
                "generatorFunctions",
                "methods",
                "generatorMethods",
                "constructors",
            ],
        }],
        // Don't complain about parentheses on arrow functions.
        // x => foo and (x) => foo may both be used freely.
        "arrow-parens": "off",
        // Disallow arrow functions where >= might be intended instead.
        // If parentheses are used on the RHS, then the arrow function
        // operator will be permitted.
        "no-confusing-arrow": ["error", {allowParens: true}],
        // Prefer arrow functions for callbacks. They are nicer.
        "prefer-arrow-callback": "warn",
        // Require return values for Array callbacks like for .map
        "array-callback-return": "error",
        // Warn about using braces for arrow functions when they are not
        // needed.
        "arrow-body-style": ["warn", "as-needed"],

        /* async-await rules */

        // Complain about using `return await bar()`, which is bad.
        "no-return-await": "error",
        // Require `async` functions to have contain an `await`.
        "require-await": "error",
        // Disallow using `await` in loops.
        "no-await-in-loop": "error",
        // Require .reject() for promises to be called with Error objects,
        // which contain stack traces.
        "prefer-promise-reject-errors": "error",

        /* Blacklist of bad JS features or confusing syntax */

        // Disallow eval(), which is evil.
        "no-eval": "error",
        // Disallow changing native objects, like Object, Array, etc.
        "no-extend-native": "error",
        // Disallow empty destructuring patterns for ES6.
        "no-empty-pattern": "error",
        // Disallow function declaration inside loops.
        "no-loop-func": "error",
        // Disallow arguments.caller and arguments.callee.
        "no-caller": "error",
        // Disable use of a Firefox-specific iterator API.
        "no-iterator": "error",
        // Disallow multiline strings, which are weird.
        "no-multi-str": "error",
        // Disallow reassigning native objects.
        "no-native-reassign": "error",
        // Disallow new Function(...) syntax, which is weird.
        "no-new-func": "error",
        // Disable boxed objects like new String(""), which are just weird.
        "no-new-wrappers": "error",
        // Disallow use of new without variable assignment.
        "no-new": "error",
        // Disallow octal string escape codes, which are likely typos.
        "no-octal-escape": "error",
        // Disallow useless escape sequences, like \@, etc.
        "no-useless-escape": "error",
        // Disallow __proto__, which is deprecated.
        "no-proto": "error",
        // Disallow assignment in a return statement, a likely source of errors.
        "no-return-assign": "error",
        // Disallow location.href = "javascript:..."
        "no-script-url": "error",
        // Disallow x === x, which is likely to be a typo.
        "no-self-compare": "error",
        // Disable throwing strings, numbers, etc. as literals.
        "no-throw-literal": "error",
        // Disallow unused expressions,
        "no-unused-expressions": "error",
        // Disallow "a" + "b" when "ab" will do.
        "no-useless-concat": "error",
        // Disable the void operator.
        "no-void": "error",
        // Disable the evil with statement.
        "no-with": "error",
        // Disallow deleting variables.
        "no-delete-var": "error",
        // Disallow shadowing of `undefined`, etc.
        "no-shadow-restricted-names": "error",
        // Disable shadowing, which is confusing.
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        // Disallow `var x = undefined;` when `var x;` is enough.
        "no-undef-init": "error",
        // Disallow undefined variables, to prevent globals from being created.
        "no-undef": "error",
        // Require strict mode in functions.
        //strict: ["error", "function"],
        // Allow `undefined`. It's fine.
        "no-undefined": "off",
        // Disallow anything from being used before it is defined.
        "no-use-before-define": ["error", {
            // Allow functions to be hoisted.
            functions: false,
            classes: true,
        }],
        // Disallow bitwise operators, which are usually typos.
        "no-bitwise": "error",
    },
};