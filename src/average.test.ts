import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 4];
  const expected: number = 10;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test('mean of five numbers', () => {
    //Arrange
  const numbers: number[]=[2, 4, 6, 8, 10];
  const expected: number = 6;

//Act
const actual: number = mean(numbers);
//Assert
  expect(actual).toBe(expected);
});

test('mean of no numbers', () => {

  expect(() => mean([])).toThrowError('Error');
});


test('median for odd number of elements', () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test('median for even number of elements', () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4];
  const expected: number = (2+3)/2;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test('median for no elements', () => {
  // Arrange
  const numbers: number[] = [];

  // Act, Assert
  expect(() => median(numbers)).toThrowError('Error');
});