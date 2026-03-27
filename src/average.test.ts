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