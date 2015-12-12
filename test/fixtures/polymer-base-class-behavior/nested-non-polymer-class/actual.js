let MyPolymerElement = class extends Polymer.BaseClass() {
  attached() {
    const someClass = class {
      doSomething() {
        this.behavior.doSomethingElse();
      }
    };
  }
};
