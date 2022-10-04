// Export statements
// Export statements are handy when exports need to be renamed for consumers, so the above example can be written as:

import {StringValidator} from "../Import & Export/StringValidator"

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    // return s.length === 5 && numberRegexp.test(s);
    return true
  }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };