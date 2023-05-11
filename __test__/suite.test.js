const sum = require('../test_sum');

test("1 ㄷ더하기 2는 3이 나와야겠지?!", () => {
  expect(sum(1, 2)).toBe(3);
})