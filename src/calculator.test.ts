import { add, subtract$, multiplication } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 5;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("3 times 5 is 15", () => {
  // Arrange
  const a: number = 3;
  const b: number = 5;
  const expected: number = 15;

  // Act
  const actual: number = multiplication(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("4 divided by 2 is 2", () => {
  // Arrange
  const a: number = 4;
  const b: number = 2;
  const expected: number = 2;

  // Act
  const actual: number = division(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("1 divided by 0 is Infinity", () => {
  // Arrange
  const a: number = 1;
  const b: number = 0;
  const expected: number = Infinity;

  // Act
  const actual: number = division(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("1 divided by 0 expect error", () => {
  // Arrange
  const a: number = 1;
  const b: number = 0;
  const expected: number = Infinity;

  // Act
  const actual: number = division(a, b);

  // Act & Assert
  expect(() => division(a, b)).toThrow("Division by zero is not allowed");
});

