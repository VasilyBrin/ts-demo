// числовой enum
// enum Direction {
// 	Up = 1,
// 	Down,
// 	Left,
// 	Right
// }

// строковый enum
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

// гетерогенный enum
enum Decision {
  Yes = 1,
  No = calcEnum(),
}

function calcEnum() {
  return 2;
}

function runEnum(obj: { Up: string }) {}

runEnum(Direction);

enum Test {
  A,
}

let test = Test.A;
let nameA = Test[test]; // A

const enum ConstEnum {
  A,
  B,
}

let c = ConstEnum.A;

enum Dice {
  One = 1,
  Two,
  Tree,
}

function ruDice(dice: Dice) {
  switch (dice) {
    case Dice.One:
      return 'один';
    case Dice.Two:
      return 'два';
    case Dice.Tree:
      return 'три';
    default:
      const a: never = dice;
  }
}
