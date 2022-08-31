import { fullJustify } from '../text-justification';

describe('Text Justification', () => {
  it('should pass a simple case', () => {
    const words = [
      'This',
      'is',
      'an',
      'example',
      'of',
      'text',
      'justification.',
    ];
    const maxWidth = 16;

    expect(fullJustify(words, maxWidth)).toEqual([
      'This    is    an',
      'example  of text',
      'justification.  ',
    ]);
  });
});
