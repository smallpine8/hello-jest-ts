test('testを利用してテストケースを作成する', () => {
  const result = true
  const expected = true
  expect(result).toBe(expected)
})

it('itを利用してテストケースを作成する', () => {
  expect(true).toBe(true)
})

type CanType = {
  flavor: string
  ounces: number
}

const can1: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
}

const can2: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
}

const can3: CanType = can2

class Can {
  flavor: string
  ounces: number

  constructor({flavor, ounces}: CanType) {
    this.flavor = flavor
    this.ounces = ounces
  }
}

const can4 = new Can({
  flavor: 'grapefruit',
  ounces: 12,
})

test('can1 and can2 are not the exact same instance', () => {
  expect(can1).not.toBe(can2)
})

test('can2 and can3 are the same instance', () => {
  expect(can2).toBe(can3)
})

test('differences between toEqual and toStrictEqual', () => {
  expect({foo: NaN, bar: undefined}).toEqual({foo: NaN})

  expect({foo: NaN, bar: undefined}).not.toStrictEqual({foo: NaN})

  expect([, undefined, 1]).toEqual([undefined, , 1])

  expect([, undefined, 1]).not.toStrictEqual([undefined, , 1])
})

const hoge = () => ({ hoge: 'hogehoge', number: 0})

test('hoge return anything', () => {
  // 期待値がnullやundefiendでないことを評価
  expect(hoge()).toEqual(expect.anything())

  // 期待値の一部のプロパティがnullやundefiendではないことを評価
  expect(hoge()).toEqual({
    hoge: 'hogehoge',
    number: expect.anything(),
  })

  // 期待値の一部のプロパティnumberがNumber型であることを評価
  expect(hoge()).toEqual({
    hoge: 'hogehoge',
    number: expect.any(Number),
  })
})

test('0.1 + 0.2 returns 0.3', () => {
  // toBeCloseToは浮動小数点数の誤差を許容して評価する
  // デフォルトでは小数点以下2桁までを評価する
  expect(0.1 + 0.2).toBeCloseTo(0.3)
})

test('0.301 and 0.3 are different when numDigits is 3', () => {
  // 小数点以下3桁までの評価
  expect(0.3 + 0.001).not.toBeCloseTo(0.3, 3)
})

// toBeGreaterThan
test('0.1 + 0.2 is greater than 0.3', () => {
  expect(0.1 + 0.2).toBeGreaterThan(0.3)
  expect(0.1 + 0.2 > 0.3).toBe(true)
})

// toBeGreaterThanOrEqual
test('0.1 + 0.2 is greater than 0.3 or 0.1 + 0.2 equals to 0.3000000000000004', () => {
  expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.3)
  expect(0.1 + 0.2).not.toBeGreaterThanOrEqual(0.3000000000000004)
  expect(0.1 + 0.2 >= 0.3).toBe(true)
  expect(0.1 + 0.2 >= 0.3000000000000004).not.toBe(true)
})