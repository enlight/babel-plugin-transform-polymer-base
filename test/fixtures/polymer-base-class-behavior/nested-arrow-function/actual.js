let MyPolymerElement = class extends Polymer.BaseClass() {
  attached() {
    const doSomething = () => {
      this.behavior.doSomething();
    };
  }
};
