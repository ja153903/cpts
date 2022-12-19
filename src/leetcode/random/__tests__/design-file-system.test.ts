import { FileSystem } from '../design-file-system';

describe('FileSystem', () => {
   it('should pass a simple case', () => {
      const fs = new FileSystem();

      expect(fs.createPath('/a', 1)).toBe(true);
      expect(fs.get('/a')).toBe(1);
   });

   it('should pass another simple case', () => {
      const fs = new FileSystem();

      expect(fs.createPath('/leet', 1)).toBe(true);
      expect(fs.createPath('/leet/code', 2)).toBe(true);
      expect(fs.get('/leet/code')).toBe(2);
      expect(fs.createPath('/c/d', 1)).toBe(false);
      expect(fs.get('/c')).toBe(-1);
   });

   it('should pass another another simple case', () => {
      // [[],["/leet",1],["/leet/code",2],["/leet/code"],["/leet/code",3],["/leet/code"]]
      const fs = new FileSystem();

      expect(fs.createPath('/leet', 1)).toBe(true);
      expect(fs.createPath('/leet/code', 2)).toBe(true);
      expect(fs.get('/leet/code')).toBe(2);
      expect(fs.createPath('/leet/code', 3)).toBe(false);
      expect(fs.get('/leet/code')).toBe(2);
   });
});
