# typeScriptTest

* type script file will compiled into js file.
* we cant run ts file on js engine environment like browser and node js we need typescript module to write ts code .
* ts provide to us tool very useful for example check error on code like logical error .

for example:
```javascript
function add(a,b){
    return a+b
}
```
this function accept 2 number and sum , if we pass string to this function will not throw an error its make string concatenation , to fix this problem without make validation with if statement we want to use typescript.