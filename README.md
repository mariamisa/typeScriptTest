# typeScriptTest
TypeScript is JavaScript’s runtime with a compile-time type checker. 

* type script file will compiled into js file.
* we cant run ts file on js engine environment like browser and node js we need typescript module to write ts code .
* ts provide to us tool very useful for example check error on code like logical error and help us to write clean code and type system .

for example:
```javascript
function add(a,b){
    return a+b
}
```
this function accept 2 number and sum , if we pass string to this function will not throw an error its make string concatenation , to fix this problem without make validation with if statement we want to use typescript.

## type system inference 

## Composing Types
* to create complex type by combining simple ones we have 2 ways to do ;
1. Unions : you can declare that a type could be one of many types
2. Generics : Generics provide variables to types