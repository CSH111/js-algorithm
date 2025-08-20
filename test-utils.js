function testCases(functionName, testFunction, cases) {
  describe(functionName, () => {
    cases.forEach(({ description, input, expected, shouldThrow }) => {
      if (shouldThrow) {
        test(description, () => {
          expect(() => testFunction(...input)).toThrow(expected);
        });
      } else {
        test(description, () => {
          expect(testFunction(...input)).toEqual(expected);
        });
      }
    });
  });
}

function runTests(functionName, testFunction, cases) {
  testCases(functionName, testFunction, cases);
}

function createTestCase(description, input, expected) {
  return { description, input: Array.isArray(input) ? input : [input], expected };
}

function createErrorCase(description, input, errorMessage) {
  return { 
    description, 
    input: Array.isArray(input) ? input : [input], 
    expected: errorMessage, 
    shouldThrow: true 
  };
}

export {
  testCases,
  runTests,
  createTestCase,
  createErrorCase
};