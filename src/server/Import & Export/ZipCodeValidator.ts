import { StringValidator } from "server/Import & Export/StringValidator";
// export const numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    print(s)
    print(s.upper())
    return false //&& numberRegexp.test(s);
  }
}

export class Test{
  what: string;
  hey: string = "hey"
  thisIsATest(){
    print("this is a test")
  }
  constructor(what: string){
    this.what = what;
  }
}

export type ValidGreetings = "Hey" | "Hola" | "Ahoy"
print("test")