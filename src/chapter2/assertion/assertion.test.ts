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

const fruitList = ['Apple', 'Lemon', 'Orange']

// 1つの要素が含まれていることを検証
test('contains Apple in fruitList', () => {
  expect(fruitList).toContain('Apple')
})

// 複数の要素が含まれていることを検証
test('contains Apple and Orange in fruitList', () => {
  expect(fruitList).toEqual(expect.arrayContaining(['Apple', 'Orange']))
})

const itemList = [
  {name: 'Apple', price: 100},
  {name: 'Lemon', price: 150},
  {name: 'Orange', price: 120}
]

// 1つの要素が含まれていることを検証
test('contains Apple in itemList', () => {
  expect(itemList).toContainEqual({name: 'Apple', price: 100})
})

// 複数の要素が含まれていることを検証
test('contains Apple and Orange in itemList', () => {
  expect(itemList).toEqual(
    expect.arrayContaining([
      { name: 'Apple', price: 100 },
      { name: 'Orange', price: 120 },
    ])
  )
})

const ciBuild = {
  numer: 1,
  duration: 12000,
  state: 'success',
  triggerParameters: {
    is_scheduled: true,
  },
  type: 'scheduled_pipeline',
  actor: {
    login: 'Taka',
  },
}

// 1つのプロパティを検証
test('build state should be success', () => {
  expect(ciBuild).toHaveProperty('state', 'success')
})

// ネストしたプロパティを検証
test('actor should be Taka', () => {
  expect(ciBuild).toHaveProperty('actor.login', 'Taka')
})

// 複数のプロパティを検証
test('triggered by the scheduled pipeline', () => {
  expect(ciBuild).toEqual(
    expect.objectContaining({
      triggerParameters: expect.objectContaining({is_scheduled: true}),
      type: 'scheduled_pipeline',
    })
  )
})

class User {
  name: string
  password: string
  constructor({name, password}: {name: string, password: string}) {
    if (password.length < 6) throw new Error('The password length must be at least 6 characters')
    this.name = name
    this.password = password
  }
}

test('crates a new user with a 6-characters password', () => {
  expect(new User({name: 'hoge', password: '123456'})).toEqual({
    name:'hoge',
    password: '123456'
  })
})

test('throw Error when the length of password is less than 6', () => {
  expect(() => new User({name: 'hoge', password: '12345'})).toThrow() // Errorがthrowされたかチェック
  expect(() => new User({name: 'hoge', password: '12345'})).toThrow(Error) // 型のチェック
  expect(() => new User({name: 'hoge', password: '12345'})).toThrow('throw Error when the length of password is less than 6') // エラーメッセージのチェック
})

const fetchDataWithPromiseResolve = () => {
  return new Promise(resolve => setTimeout(resolve, 1000, 'lemon'))
}

test('return lemon', () => {
  return expect(fetchDataWithPromiseResolve()).resolves.toBe('lemon')
})

// async/awaitを使用
test('return lemon with async/await', async () => {
  await expect(fetchDataWithPromiseResolve()).resolves.toBe('lemon')
})

const fetchDataWithPromiseReject = () => new Promise((resolve, reject) => setTimeout(reject, 1000, new Error('lemon does not exist')))

// .rejectsを利用して失敗時の値を受け取る
test('failed to return lemon', () => {
  return expect(fetchDataWithPromiseReject).rejects.toThrow('lemon does not exist')
})