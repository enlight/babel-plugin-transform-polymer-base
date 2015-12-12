let MyPolymerElement = class extends Polymer.BaseClass() {
  attached() {
    const MyOtherPolymerElement = class extends Polymer.BaseClass() {
      created() {
        this.behavior.notifyResize();
      }
    };
  }
};
