/*
  Depth Sum

  You are given a nested list of integers nestedList.
  Each element is either an integer or a list whose elements may also be integers or other lists.
  The depth of an integer is the number of lists that it is inside of. For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.
  Return the sum of each integer in nestedList multiplied by its depth.

  Example:
  Input: [1,[4,[6]]]
  Output: 27
*/

import { strictEqual } from 'assert';

function depthSum(nestedList: NestedInteger[]): number {
  let result = 0;

  (function traverse(list, level) {
    for (const item of list) {
      if (item.isInteger()) {
        result += (item.getInteger() as number) * level;
      } else {
        traverse(item.getList(), level + 1);
      }
    }
  })(nestedList, 1);

  return result;
}

class NestedInteger {
  private value: number | null;
  private list: NestedInteger[];

  constructor(value?: number) {
    if (value !== undefined) {
      this.value = value;
      this.list = [];
    } else {
      this.value = null;
      this.list = [];
    }
  }

  isInteger(): boolean {
    return this.value !== null;
  }

  getInteger(): number | null {
    return this.value;
  }

  setInteger(value: number) {
    this.value = value;
    this.list = [];
  }

  add(elem: NestedInteger) {
    if (this.value !== null) {
      this.list = [];
      this.value = null;
    }
    this.list.push(elem);
  }

  getList(): NestedInteger[] {
    return this.list;
  }
}

const six = new NestedInteger(6);
const four = new NestedInteger();
four.add(six);

const nestedFourAndSix = new NestedInteger();
nestedFourAndSix.add(new NestedInteger(4));
nestedFourAndSix.add(four);

const one = new NestedInteger(1);

const nestedList: NestedInteger[] = [one, nestedFourAndSix];

strictEqual(depthSum(nestedList), 27);
