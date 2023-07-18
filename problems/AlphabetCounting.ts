function validateInput(LatinString: string): boolean {
  let regexAcceptsAlphanumericals = new RegExp('^[a-zA-Z0-9]+$');
  return regexAcceptsAlphanumericals.test(LatinString);
}

//ă=aw, â=aa, đ=dd, ê=ee, ô=oo, ơ=ow, ư=w
/**
* The idea is iterate over all VietnameseAlphabets array to count the given Vietnamese alphabet in the given string. 
* For each iteration, deleting each Vietnamese Alphabet element in the given string (if it contains).
*/
function countingPossibleVietnamseAlphabets(s: string): number {
  let count = 0;
  let index = 0;

  let VietnameseAlphabets: string[] = ['aw', 'aa', 'dd', 'ee', 'oo', 'ow', 'w'];
  for (index = 0; index < VietnameseAlphabets.length; index++) {
    //regex accepts a specific Vietnamse alphabet
    let regex: RegExp = new RegExp(VietnameseAlphabets[index], "g");
    //count the occurence of given regex
    let countAlphabet = (s.match(regex) || []).length;
    count += countAlphabet;
    if (countAlphabet != 0) {
      // delete the substring matching the given regex
      s = s.replace(regex, '');
    }
  }
  return count;
}


//executing
let s: string = "hfdawhwhcoomdd";
if (validateInput(s)) {
  let result = countingPossibleVietnamseAlphabets(s);
  console.log(result);
} else {
  console.log("The input string accepts alphanumerical characters only.")
}

