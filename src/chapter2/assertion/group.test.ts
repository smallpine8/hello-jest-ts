describe('グループ名', () => {
  test('テストケース1', () => {
    expect(true).toBe(true)
  })
  test('テストケース2', () => {
    expect(true).toBe(true)
  })
  test('テストケース3', () => {
    expect(true).toBe(true)
  })

  // 入れ子でグループを定義できる
  describe('グループ名', () => {
    test('テストケース', () => {
      expect(true).toBe(true)
    })
  })
})

test.each([
  { a: 1, b: 1, expected: 2 },
  { a: 2, b: 1, expected: 3 },
  { a: 1, b: 2, expected: 3 },
])('.add($a, $b)', ({a, b, expected}) => {
  expect(a + b).toBe(expected)
})

const calculateSalesTax = (price: number):number => {
  return price > 0 ? Math.floor((price / 100) * 10) : 0
}

describe('calculateSalesTax with Parameterized Tests', () => {
  test.each([
    {price: 100, expected: 10},
    {price: 99, expected: 9},
    {price: 1, expected: 0},
    {price: 0.1, expected: 0},
    {price: -1, expected: 0},
  ])('calculates the sales tax for a price equal to $price', ({price, expected}) => {
    expect(calculateSalesTax(price)).toBe(expected)
  })
})