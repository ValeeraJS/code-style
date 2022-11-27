function f1(a = 0) {}
function f2(a: number, b = 0) {}
function f3(a: number, b?: number) {}
function f4(a: number, b?: number, c = 0) {}
function f5(a: number, b = 0, c?: number) {}
class Foo1 {
  constructor(public a, private b = 0) {}
}
class Foo2 {
  constructor(public a, private b?: number) {}
}