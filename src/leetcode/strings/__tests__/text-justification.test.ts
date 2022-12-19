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

   it('should pass another case', () => {
      const words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'];
      const maxWidth = 16;

      expect(fullJustify(words, maxWidth)).toEqual([
         'What   must   be',
         'acknowledgment  ',
         'shall be        ',
      ]);
   });

   it('should pass another case', () => {
      const words = [
         'Science',
         'is',
         'what',
         'we',
         'understand',
         'well',
         'enough',
         'to',
         'explain',
         'to',
         'a',
         'computer.',
         'Art',
         'is',
         'everything',
         'else',
         'we',
         'do',
      ];
      const maxWidth = 20;

      expect(fullJustify(words, maxWidth)).toEqual([
         'Science  is  what we',
         'understand      well',
         'enough to explain to',
         'a  computer.  Art is',
         'everything  else  we',
         'do                  ',
      ]);
   });
});
