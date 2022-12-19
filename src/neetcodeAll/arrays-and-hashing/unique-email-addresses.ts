function numUniqueEmails(emails: string[]): number {
  // parse each email into local and domain
  // then clean up the local name by removing any periods
  // and stopping the collection of characters when we hit a + sign
  // join that string with a builder and then create the new email
  const uniqueEmails = new Set<string>();

  for (const email of emails) {
    const [local, domain] = email.split('@');
    const sb: string[] = [];

    for (let i = 0; i < local.length; i++) {
      if (local[i] === '+') {
        break;
      }

      if (local[i] !== '.') {
        sb.push(local[i]);
      }
    }

    const filteredLocal = sb.join('');

    uniqueEmails.add(`${filteredLocal}@${domain}`);
  }

  return uniqueEmails.size;
}

export { numUniqueEmails };
