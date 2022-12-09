import Argument from './argument.js'

export default class Command {
    constructor(__name, __desc){

        this.args = []

        // const [, name, args] = __name.match(/([^ ]+) *(.*)/)
        //if (args) this.arguments(args)

        this.name = __name || ''
        this.aliases = []
        this._description = __desc
        this._action = null
        
    }

    newArgument(name){
        return new Argument(name)
    }

    argument(name, description){
        this.args.push(this.newArgument(name, description))
        return this
    }

    arguments(names) {
        names.split(/ +/).forEach((arg) => {
            this.argument(arg)
        })
        return this
    }

    description(desc){
        this._description = desc
        return this
    }
    
    action(func) {
        this._action = func
        return this
    }

    _execute() {
        return this._action(this.args)
    }

}
