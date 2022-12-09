import CLI from '../index.js'
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

