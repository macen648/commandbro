export default class Argument {

    constructor(name, description) {
        this._name = undefined
        this.description = description || this._name
        this.defaultValue = undefined

        switch (name[0]) {
            case '<': 
                this.required = true
                this._name = name.slice(0)
                break
            case '[': 
                this.required = false
                this._name = name.slice(0)
                break
            default:
                this.required = true
                this._name = name
                break
        }

        this.description = description || this._name
    }

    name() {
        return this._name;
    }

    default(value) {
        this.defaultValue = value
        return this
    }

    argRequired() {
        this.required = true
        return this
    }

    argOptional() {
        this.required = false
        return this
    }
}
