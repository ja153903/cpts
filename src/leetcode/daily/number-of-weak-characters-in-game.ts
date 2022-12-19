/**
 * Each character has two properties: attack and defense
 * A character is weak if there exists a character whose attack and defense is strictly greater than
 * the character in question.
 *
 * Return the number of weak characters
 */
function numberOfWeakCharacters(properties: number[][]): number {
   // The crux of the problem is the way we're sorting it
   // here we priorize attack, but if there are ties with attack
   // we make sure to take the bigger defense first
   // why do we do this?
   // we sort by ascending order on the attack but descending order on the defense
   // we do this because in the case a new attack level, we can take out any possible
   // smaller defenses that might exist on the stack.
   // suppose this example, let's say that we're trying to insert (2, 2)
   // and on the stack we have [(1, 2), (1, 1)]. We'll have to pop (1, 1)
   // because its weaker than (2, 2).
   properties.sort((a, b) => {
      if (a[0] === b[0]) {
         return b[1] - a[1];
      }

      return a[0] - b[0];
   });

   const stack: number[][] = [];
   stack.push(properties[0]);

   for (let i = 1; i < properties.length; i++) {
      while (stack.length && isWeak(stack[stack.length - 1], properties[i])) {
         stack.pop();
      }

      stack.push(properties[i]);
   }

   return properties.length - stack.length;
}

function isWeak(a: number[], b: number[]): boolean {
   return a[0] < b[0] && a[1] < b[1];
}

function numberOfWeakCharactersBF(properties: number[][]): number {
   let weak = 0;

   for (let i = 0; i < properties.length; i++) {
      for (let j = i + 1; j < properties.length; j++) {
         if (
            properties[i][0] < properties[j][0] &&
            properties[i][1] < properties[j][1]
         ) {
            weak++;
            break;
         }
      }
   }

   return weak;
}

export { numberOfWeakCharacters, numberOfWeakCharactersBF };
