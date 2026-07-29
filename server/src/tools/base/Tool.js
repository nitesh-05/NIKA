export class Tool {
  constructor({
    name,
    description,
    schema,
    aliases = [],
    examples = [],
    execute,
  }) {
    this.name = name;
    this.description = description;
    this.schema = schema;
    this.aliases = aliases;
    this.examples = examples;
    this.execute = execute;
  }
}