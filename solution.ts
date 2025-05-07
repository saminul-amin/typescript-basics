function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// console.log(formatString("Hello", false));

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

// console.log(filterByRating([
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ]));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const items of arrays) for (const item of items) result.push(item);

  return result;
}

// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
// console.log(myCar.getModel()); // Output: "Model: Corolla"

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

// console.log(processValue("hello")); // Output: 5
// console.log(processValue(10)); // Output: 20

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  let ans: Product = products[0];
  for (const product of products) if (product.price > ans.price) ans = product;

  return ans;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

// console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

// console.log(getDayType(Day.Monday));   // Output: "Weekday"
// console.log(getDayType(Day.Sunday));   // Output: "Weekend"

async function squareAsync(n: number): Promise<number> {
  if (n < 0) throw new Error("Negative number not allowed");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return n * n;
}

// console.log(squareAsync(4).then(console.log)); // Output after 1s: 16
// console.log(squareAsync(3).then(console.log)); // Output after 1s: 16
// console.log(squareAsync(-3).catch(console.error)); // Output: Error: Negative number not allowed
