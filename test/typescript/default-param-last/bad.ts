function f1(a = 0, b: number) {}
function f2(a: number, b = 0, c: number) {}
function f3(a: number, b?: number, c: number) {}
class Foo1 {
  constructor(public a = 10, private b: number) {}
}
class Foo2 {
  constructor(public a?: number, private b: number) {}
}