let MyPolymerElement = class {
  attached() {
    const MyOtherPolymerElement = class {
      created() {
        this.notifyResize();
      }
    };
  }
};
