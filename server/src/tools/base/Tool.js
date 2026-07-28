export class Tool {

    constructor(config){

        this.name = config.name;

        this.description = config.description;

        this.schema = config.schema;

        this.execute = config.execute;

    }

}