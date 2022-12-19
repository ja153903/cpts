function subdomainVisits(cpdomains: string[]): string[] {
   // given cpdomains, we want to break them up into respective parts:
   // ["n d1.d2.d3"] => ["n d1.d2.d3", "n d2.d3", "n d3"]
   // keep track of the frequencies within a map
   const frequency = new Map<string, number>();

   for (const cpdomain of cpdomains) {
      const [countAsStr, domain] = cpdomain.split(' ');
      const count = parseInt(countAsStr);

      frequency.set(domain, (frequency.get(domain) ?? 0) + count);

      const parts = domain.split('.');
      if (parts.length === 3) {
         const subdomain = `${parts[1]}.${parts[2]}`;
         frequency.set(subdomain, (frequency.get(subdomain) ?? 0) + count);
      }

      frequency.set(
         parts[parts.length - 1],
         (frequency.get(parts[parts.length - 1]) ?? 0) + count
      );
   }

   return [...frequency.entries()].map(
      ([domain, count]) => `${count} ${domain}`
   );
}

export { subdomainVisits };
