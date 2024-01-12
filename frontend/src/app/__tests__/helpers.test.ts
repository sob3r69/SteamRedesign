import { divideArray } from '@/shared/helpers';

describe('divideArray', () => {
  test('divide array by 2', () => {
    expect(divideArray(['a', 'b', 'c', 'd'], 2)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });
  test('divide array by 3', () => {
    expect(divideArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3)).toEqual([
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h'],
    ]);
  });
  test('divide array by 4', () => {
    expect(divideArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], 4)).toEqual([
      ['a', 'b', 'c', 'd'],
      ['e', 'f', 'g', 'h'],
      ['i', 'j', 'k', 'l'],
    ]);
  });
});
