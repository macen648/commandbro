import Command from './command.js'

export default class CLI {
    constructor(){
        this.commands = []
        this.rawArgs = []
        this.parsedArgs = []
    }   

    /**
     * Creates a new command.
     *
     * @param {string} name
     * @param {string} description
     * @return {Command} Command
     */
    command(name, description){
        const cmd = this.createCommand(name, description)
        this.commands.push(cmd)

        return cmd
    }

    /**
     * Creates a new command.
     *
     * @param {string} name
     * @param {string} description
     * @return {Command} new Command
     */
    createCommand(name, description) {
        return new Command(name, description)
    }
    
    /**
     * Finds command with given name.
     *
     * @param {string} name
     * @return {Command} Command
     */
    findCommand(name) {
        if (!name) return undefined

        return this.commands.find(cmd => cmd.name === name || cmd.aliases.includes(name))
    }


    /**
     * Takes a input string and converts it into arguments then finds and exacutes commands and options.
     *
     * @param {string} str
     * @return {CLI} CLI
     */
    parse(str) {
        this.rawArgs = this._resolveInput(str)
        
        this._resolveArguments()
        
        
        this._dispatchCommand()

        return this
    }

    /**
     * @api private
     * 
     * @param {string} str
     * @return {Array} 
     */
    _resolveInput(str) {
        let _str = str
        if (Array.isArray(str) && str[0] === process.argv[0]) _str = str.slice(2).join(" ") // check to see if proccess.argv was the input
        else _str = str.join(" ")
 
        return _str.trim().split(/ +/g)
    }


    _resolveArguments(){
        for(let i; i > this.rawArgs.length; i++){
            const isCommand = this.findCommand(this.rawArgs[i])
            console.log(isCommand)
        }
        // this.rawArgs.forEach((arg) =>{
            
        //     if (isCommand != undefined) {
        //         this.parsedArgs.push({ type: 'command', name: arg })
        //         commandArgsLen = isCommand.args.length

        //     }  else if (arg.startsWith('-')) this.parsedArgs.push({type:'option', name: arg})
             
        // })
    }

    /**
     * @api private
     * 
     * @param {string} command
     * @return {Command} Command
     */
    _dispatchCommand() {
        const cmd = this.findCommand(this.rawArgs[0])
        if (cmd) cmd._execute()
        return cmd 
    }




    logCommands(){
       return console.log(this.commands)
    }

}
