
class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padStart(part) {
    this.#value = part.concat(this.#value);
  }

  padEnd(part) {
    this.#value = this.#value.concat(part);
  }

  padBoth(part) {
    this.padStart(part);
    this.padEnd(part);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
