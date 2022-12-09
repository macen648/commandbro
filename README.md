# commandbro
commandbro is a simple cli package for node.js.
 
## Commander
commandbro is based on the [Commander](https://www.npmjs.com/package/commander) npm package.
 
## Why commandbro?
commandbro is built for a personal use case. I recomend the use of [Commander](https://www.npmjs.com/package/commander) over this package, unless you are looking for somthing more lightweight.
 
## Example Usage
```js
const CLI = require('simple-node-cli-dev')
const app = new CLI()
 
app.command('test')
    .description('testing')
    .action(function (args) {
        console.log(`anon func with args ${args}`)
    })
 
app.command('test123')
    .description('123')
    .action(function (args) {
        console.log(`test 123`)
    })
 
app.parse(process.argv)
```

## License
mit
**Free Software, Hell Yeah!**
 
## Made with love
Macen <3
