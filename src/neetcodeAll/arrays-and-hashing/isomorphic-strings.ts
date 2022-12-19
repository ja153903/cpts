function isIsomorphic(s: string, t: string): boolean {
   if (s.length !== t.length) {
      return false;
   }

   const kv = new Map<string, string>();
   const vk = new Map<string, string>();

   for (let i = 0; i < s.length; i++) {
      if (kv.has(s[i]) && kv.get(s[i]) !== t[i]) {
         return false;
      }

      if (vk.has(t[i]) && vk.get(t[i]) !== s[i]) {
         return false;
      }

      kv.set(s[i], t[i]);
      vk.set(t[i], s[i]);
   }

   return true;
}

export { isIsomorphic };
