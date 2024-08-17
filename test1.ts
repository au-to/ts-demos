// 原始数据类型
const str: String = '字符型';
const number: Number = 1;
const bool: Boolean = true;
const u: undefined = undefined;
const n: null = null;
const any: any = undefined;

// 定义数组
const arr_number: number[] = [1, 2, 3];
const arr_string: string[] = ['1', '2', '3'];
const arr_any: any[] = [1, '2', undefined, null, true, 3];

// 定义元组
const tuple1: [number, string, boolean] = [1, 'zhao', true];

// 定义接口
interface I_Person {
  name: String,
  age: Number,
  height?: Number, // 可选属性
  readonly id: Number // 只读属性
}
let lisi: I_Person = {
  name: 'lisi',
  age: 21,
  id: 1
}

// 定义函数
const fn = (x: number, y: number, z?: number): number => {
  if (z) {
    return x + y + z;
  } else {
    return x + y;
  }
}
fn(1, 2, 3);

// 函数结合interface
interface I_Fn {
  (x: number, y: number, z?: number): number
}
const fn1: I_Fn = fn;

// 类型推论
const type_infer = 'zhao' // ts默认推断该变量是String型

// 联合类型
let union_type: number | string;

// 类型断言
function type_judge(input: number | string): number {
  const str = input as string;
  if (str.length) {
    return str.length;
  } else {
    const number = input as number;
    return number.toString().length;
  }
}

// 类型守卫
function type_guard(input: number | string): number {
  if (typeof input === 'string') {
    return input.length;
  } else {
    return input.toString().length;
  }
}

// 数字枚举
enum Direction_num {
  Up,
  Down,
  Left,
  Right
}
Direction_num.Right // 3
Direction_num[0] // up

// 字符串枚举
enum Direction_str {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}
const value = "Up";
if (value === Direction_str.Up) {
  console.log('Up');
}

// 泛型generics
function fn_generics<T>(arg: T): T {
  return arg;
}
const res = fn_generics(12);

// 泛型支持传入多个值
function fn_mutiple<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

// 泛型约束
interface I_WithLength {
  length: Number
}
function fn_constraint<T extends I_WithLength>(args: T): T {
  console.log(args.length);
  return args;
}

// 在类和接口中使用泛型
interface I_keyPair<T, U> {
  key: T,
  value: U
}
const kp1: I_keyPair<number, string> = { key: 1, value: 'zhao' };

// 类型别名
type typeAlias = (x: number, y: number) => number;
let sum1: typeAlias
type typeUnion = string | number;
type Directions = 'top' | 'right' | 'bottom' | 'left';
const toWhere: Directions = 'top';

// 交叉类型
interface I_Name {
  name: string
}
type IPerson = I_Name & { age: number };

// 声明文件

// 内置类型


// 函数
function fn2(value: string): string {
  return value
}

const hello = function (value: string): string {
  return value
}

// 函数类型用箭头函数表示
const hello1: (value: string) => string = function (value) {
  return value
}

let f: (x: number) => number;
f = function (y: number) {
  return y
}

type myFunc = (txt: string) => void;
const fun11: myFunc = function (x) {
  return x;
}

let myFunc1 = (value1: number, value2: number) => number
myFunc1 = (a: number) => number

function add(x: number, y: number) {
  return x + y;
}
const myAdd: typeof add = function (x, y) {
  return x + y
}

// 箭头函数
const repeat = (x: number, y: number): number => {
  return x + y
}

function greet(
  fn: (a: string) => string
): void {
  fn('world')
}

// 可选参数
let kexuan: (a: number, b?: number) => number = function (a, b) {
  return a + b
}

// undefined
let undFn: (a: number | undefined, b?: number) => void = function (a, b) {
  if (b === undefined) {
    return a;
  } else {
    return a + b;
  }
}
undFn(undefined, 1)

// 参数默认值
function morenFn(x: number = 0, y: number = 0): [number, number] {
  return [x, y]
}
morenFn() // [0, 0]

// 具有默认值的参数如果不位于参数列表的末尾，调用时不能省略，如果要触发默认值，必须显式传入undefined。
function morenFn1(x: number = 0, y: number) {
  return x + y
}
morenFn1(undefined, 1)

// 参数解构
type A = { a: number, b: number, c: number };
function jiegouFn({ a, b, c }: A) {
  return a + b + c;
}

// rest参数
function restFn(m: number, ...n: number[]) {
  return n.map((x) => m * x)
}

function restJiegou(...[str, time]: [string, number]): string {
  return str + time
}

// readOnly只读参数
function readOnly(arr: readonly number[]) {
  console.log('只读');
}

// void类型 ---- 函数无返回值
function voidFn(): void {
  console.log('hhh');
}

type voidFn = () => void;
const voidFn1: voidFn = () => {
  return 123;
}

// never 类型 --- 不会出现的值 --- 表示函数不会执行结束
function fail(txt: string): never {
  throw new Error('执行异常')
}

// 局部类型 --- 函数内部声明的其它类型
function jubuFn(txt: string) {
  type msg = string;
  let newTxt: msg = 'hello';
  return newTxt;
}

// 高阶函数 --- 函数的返回值还是一个函数
const gaojieFn = (txt: string) => (txt: string) => {
  return txt;
}

// 函数重载 --- 根据不同的类型,执行不同的逻辑
function reload(str: string): string;
function reload(arr: any[]): any[];
function reload(stringOrArr: string | any[]): string | any[] {
  if (typeof stringOrArr === 'string') {
    return stringOrArr.split('').reverse().join('');
  } else {
    return stringOrArr.slice().reverse();
  }
}

// 构造函数
class Animal {
  nums: number = 4
}
type Construct = new () => Animal;
function creat(num: Construct): Animal {
  return new num();
}
const example = creat(Animal);



// 对象

const obj: {
  x: number,
  y: number,
  add(x: number, y: number): number
  // 或者写成
  // add: (x:number,y:number) => number
} = {
  x: 1,
  y: 2,
  add(x, y) {
    return x + y
  }
}

type User = {
  name: string,
  age: number
}
type Name = User['name']

// 可选属性
type Repeat = {
  x: number,
  y?: number
}
// 以下不是可选属性
type RepeatA = {
  x: number,
  y: number | string
}

// 只读属性
type ReadOnly = {
  x: number,
  readonly y: number
}

// 引用类型的影响
interface Person {
  name: string,
  age: number
}

interface ReadOnlyPerson {
  readonly name: string,
  readonly age: number
}

let w: Person = {
  name: 'zhao',
  age: 21
}

let r: ReadOnlyPerson = w; // 引用


// 类型断言 --- 只读 --- 在没有显示声明类型的情况下自动推断
const duanyan = {
  name: 'zhao'
} as const

// 属性名的索引类型
type T1 = {
  [property: string]: string
}

type T2 = {
  [property: number]: number
}

type T3 = {
  [property: symbol]: symbol
}

// 解构赋值
interface Jiegou {
  x: number,
  y: number
}
let jiegou: Jiegou = {
  x: 1,
  y: 2
}
let { x, y } = jiegou

// 解构类型原则
const myPoint = {
  x: 1,
  y: 2,
  z: 3
}
const point: {
  x: number,
  y: number,
} = myPoint

// 严格字面量检查
type options = {
  title: string,
  isDraw: boolean
}
const obj1: options = {
  title: "zhao",
  isDraw: true
} as options

// 允许字面量有多余属性
let duoyu: {
  foo: number,
  [x: string]: any
}

// 最小可选属性规则 --- 弱类型检测

// 空对象 --- 特殊类型




// interface的成员有5种形式

// 对象属性
interface Shuxing {
  x?: string,
  readonly y: number
}

// 对象的属性索引
interface suoyin {
  [x: number]: string,
}

const objA: suoyin = ['1', '2', '3']

// 对象方法
interface Fan1 {
  fn(x: string): string
}

interface Fan2 {
  fn: (x: number) => number
}

interface Fan3 {
  fn: {
    (x: string): string
  }
}

// 函数类型
interface Fntype {
  (x: number, y: number): number
}

const Fntype: Fntype = (x, y) => x + y

// 构造函数
interface ConstructErr {
  new(msg?: string): Error
}

// interface的继承

// 继承interface
interface Father {
  name: string
}
interface Son extends Father {
  age: number
}

// 继承type定义的对象
type FatherObj = {
  name: string
}
interface SonObj extends FatherObj {
  age: number
}

// 继承class
class Father1 {
  x: string = 'hhh';
  fn(): boolean {
    return true
  }
}

interface Son1 extends Father1 {
  y: number
}

// 接口合并
interface Jiekou1 {
  name: string
}
interface Jiekou1 {
  age: number
}
// 等同于
interface Jiekou1 {
  name: string,
  age: number
}

// interface 和type的区别
// 1、type能表示非对象类型，interface只能表示对象类型（包括数组、函数）
// 2、interface可以继承其它类型，type不支持继承
// 3、同名interface会自动合并，同名type则会报错
// 4、interface不能包含属性映射，type可以
// 5、this关键字只能用于interface
// 6、type可以扩展原始数据类型，interface不行
// 7、interface无法表达某些复杂类型（如交叉类型和联合类型）




// 类

// 属性的类型
class Point {
  x: 1;
  y: 'hhh'
}

// readOnly修饰符
class A1 {
  readonly a: number;
  constructor() {
    this.a = 1 // 以构造函数声明的为准
  }
}

// 方法的类型
class A2 {
  add(x: string, y: string): string {
    return x + y
  }
}

// 存取器方法
class Cunqu {
  _value = 1;
  get() {
    return this._value;
  }
  set(value: any) {
    this._value = value
  }
  get getName() {
    return this._value
  }
}

// 属性索引 --- 包括定义属性和方法
class Myclass {
  [s: string]: boolean | ((s: string) => boolean);
  get(s: string) {
    return this[s] as boolean
  };
}


// 类的interface接口
interface Country {
  name: string;
  capital: string;
  x?: number
}

class MyCountry implements Country {
  name = 'hhh';
  capital = 'jjj';
  x?: number;
}

const P = new MyCountry();
P.x = 111 // 不会报错

// 类可以定义接口没有声明的方法和属性
interface Keyi {
  x: string;
  y: number
}

class Keyi implements Keyi {
  X = 'hhh'
  y = 1
  z: number = 1
}

// 实现多个接口 --- 接收多重限制
interface A22 {
  x: string
  y: string
}

interface A33 {
  z: string
  q: string
}

class A44 implements A22, A33 {
  x = 'h'
  y = 'j'
  z = 'g'
  q = 'n'
}

// 类与接口的合并 --- 接口会被合并进类
class Hebing {
  x: number = 1
  y: number = 2
}

interface Hebing {
  z: number
}

const p1 = new Hebing()
p1.z = 3 // true


// class 类型

// 实例类型
class Color {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const green: Color = new Color('green');

// 类的自身类型

// 结构类型原则
class Position1 {
  x: number;
  y: number;
}

class PositionA {
  x: number;
  y: number;
  z: number
}

const Position: Position1 = new PositionA()


// 类的继承

// 可访问性修饰符

// public

// private --- 只能用在当前类的内部，不能用在子类或实例

class Private {
  private x: string = 'hhh'
}

// 子类不能定义父类私有成员的同名成员
class A11 {
  private x: string = 'hhh'
}
class B11 extends A11 {
  // x = 'jjj'  // 会报错
}

// protected --- 只能在类的内部使用，实例无法使用，子类内部可以使用
class Protected {
  protected x: number = 1;
  fn() {
    return this.x
  }
}
class ProtectedSon extends Protected {
  y: number = 2;
  fn1() {
    return this.x + this.y
  }
}
const P3 = new ProtectedSon()
// P3.x // 无法访问

// 实例属性简写形式
class Jian {
  constructor(public x: number, public y: number) {

  }
}
// 等同于
class Jian1 {
  x: number;
  y: number;
}


// 静态成员 --- 只能通过类本身使用，不能通过实例对象使用
class Static {
  static x: number = 0;
  static printX() {
    return this.x
  }
}
Static.printX // 0
const P4 = new Static()
// P4.X  // 通过实例无法访问


// 泛型类
class Box<type> {
  x: type;
  constructor(value: type) {
    this.x = value;
  }
}
const box: Box<string> = new Box('hello')

// 注意：静态成员不能使用泛型的类型参数

// 抽象类，抽象成员 --- 该类不能被实例化，只能当作其它类的模板
abstract class Chouxian {
  id: number = 1;
}
// const p11 = new Chouxian() // 报错

// 抽象类只能当作基类使用

// 抽象成员 --- 基类定义，子类实现
abstract class Chenyuan {
  abstract x: string;
}
class Son1 extends Chenyuan {
  x = 'hhh'
}





// 泛型 --- 类型参数
function generics<T>(str: T): T {
  return str;
}

// 定义多个类型参数
function duoge<T, U>(str: T, num: U): T {
  return str;
}

// 泛型的写法 --- 函数,接口,类,别名

// 函数的泛型写法
function id<T>(str: T): T {
  return str;
}

let MyId: <T>(arg: T) => T = id

// 接口的泛型写法
interface Box1<T> {
  content: T
}
let box111: Box1<string>

interface Compare<T> {
  fn(value: T): number
}
class Rec implements Compare<string> {
  fn(value: string): number {
    return 111;
  }
}

// 类的泛型写法
class Pair<T, U> {
  key: T;
  value: U
}

class C<T> {
  value!: T;
  add!: (X: T, y: T) => T
}
let foo = new C<number>();
foo.value = 0;
foo.add = (x, y) => x + y;

// 类型别名的泛型写法
type NullAble<T> = T | undefined | null

// 类型参数默认值
function moren<T = string>(arr: T[]): T {
  return arr[0]
}

// 数组的泛型表示
let arr: Array<number> = [1, 2, 3]

// 只读数组
function doStuff(values: ReadonlyArray<string>) {
  // values.push('hello') // 报错
}

// 类型参数的约束条件
function comp<T extends { length: number }>(a: T, b: T) {
  // ...
}




// Enum类型  --- 枚举 --- 一种新的数据结构和类型
enum Foo {
  A,
  B,
  C
}
const Bar = {
  A: 0,
  B: 1,
  C: 2
} as const

// Enum的成员值 --- 可以显式赋值
enum Color1 {
  A = 0,
  B = 1,
  C = 2
}

// enum成员值都是只读的,不能重新赋值
const enum Color2 {
  red,
  green,
  blue
}

// 同名enum的合并
enum Foo {
  D = 1
}

// 字符串enum
enum strOrNum {
  A,
  B,
  C = 'hh',
  D = 'jj'
}

// keyof运算符 --- 取出enum结构的所有成员名,作为联合类型返回
enum Mynum {
  A = 'a',
  B = 'b'
}
type Foo1 = keyof Mynum // 'A'|'B'

// 使用in运算符取出所有的成员值
type poo = { [key in Mynum]: any } // {a: any, b: any}

// 反向映射 --- 可以通过成员值获得成员名 --- 只发生在数值enum
enum Weekdays {
  monday = 1,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
}
Weekdays[3] // wednesday




// 类型断言 --- 不再进行类型推断,而是直接使用断言给出的类型
type Duan = 'a' | 'b' | 'c';
let foo1 = 'a';
let bar1: Duan = foo1 as Duan

const op: { x: number } = { x: 0, y: 0 } as { x: number }

// 类型断言的用途: 指定unknown类型变量的具体类型 指定联合类型的值的具体类型
const value1: unknown = 'hello';
const S1: string = value1 as string

const uinion: number | string = 1;
const value3: number = uinion as number;

// 类型断言的条件

// as const断言
let s1 = 'javaScript' as const;

// 非空断言 --- 在确定一个表达式不为空时使用 !

// 断言函数
function isString(value: unknown): void {
  if (typeof value !== 'string') {
    throw new Error('错误了');
  }
}

// 简写
function isString1(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('not a string');
  }
}



// ts模块 --- 允许输入和输出类型




// 装饰器

