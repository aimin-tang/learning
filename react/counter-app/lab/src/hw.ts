let employee: {
    id: number,
    retire: (date: Date) => void,
} = {
    id: 1,
    retire: (date: Date) => console.log(date),
}

console.log(employee);

type UserType = {
    name: string,
    age: number,
    occupation?: string
}

let users: UserType[] = [];
type Pet = Bird | Fish;
enum DayOfWeek {Monday, Tuesday};
console.log(user?.address?.street?)
let x = foo ?? bar();

let Pet: int = 5;
Pet = 10;

class KeyValuePair<T, U> {
    constructor(public key: T, public value: U) {};
}

let p = new KeyValuePair<number, string>(1, 'a');

class ArrayUtils {
  wrapInArray<T>(value: T) {
    return [value];
  }
}
let n = new ArrayUtils();
let n2 = n.wrapInArray(5);

interface Result<T> {
    data: T | null,
    error: string | null,
}

interface User {
    username: string;
}

interface Product {
    title: string;
}

function fetch<T>(url: string): Result<T> {
    return {data: null, error: null};
}

let a = fetch<User>('a')
