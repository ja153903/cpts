function restoreString(s: string, indices: number[]): string {
   const result = new Array<string>(s.length).fill('');

   for (let i = 0; i < indices.length; i++) {
      result[indices[i]] = s[i];
   }

   return result.join('');
}

export { restoreString };
