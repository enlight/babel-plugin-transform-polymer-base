let MyPolymerElement = class {
  attached() {
    const someClass = class {
      doSomething() {
        this.behavior.doSomethingElse();
      }
    };
  }
};
