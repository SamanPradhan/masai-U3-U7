class Counter {
  // Write your code here
  // Initially value = 0
  // Complete this Counter class as per the problem statement

  constructor() {
    this.value = 0;
  }
  getValue() {
    return this.value;
  }
  addValue(x) {
    this.value += x;
    return this.value;
  }
  reduceValue(x) {
    this.value -= x;
    return this.value;
  }
  resetValue() {
    this.value = 0;
    return this.value;
  }
}

// Do not change this
export default Counter;
