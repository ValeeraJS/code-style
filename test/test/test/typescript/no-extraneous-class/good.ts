class EmptyClass extends SuperClass {}

class ParameterProperties {
    constructor(public name: string) {}
}

@decorator
class EmptyWithDecorator {}

const StaticOnly = {
  version: 42,
  hello() {
    console.log('Hello, world!');
  },
};