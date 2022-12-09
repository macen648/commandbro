export class CLIError extends Error {

    constructor(exitCode, code, message) {
        super(message)
        Error.captureStackTrace(this, this.constructor)
        this.name = this.constructor.name
        this.code = code
        this.exitCode = exitCode
    }
}
