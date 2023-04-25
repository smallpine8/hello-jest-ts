describe('jest.fn()', () => {
  test('mock object specification', () => {
    const mockFunction = jest.fn()

    // mockFunction関数の結果はundefinedである
    expect(mockFunction('foo', 'bar')).toBe(undefined)

    // mockプロパティを持っている
    expect(mockFunction).toHaveProperty('mock')

    // mockにはcallsプロパティを持っている
    expect(mockFunction.mock).toHaveProperty('calls')

    // 1回呼び出された
    expect(mockFunction.mock.calls).toHaveLength(1)

    // 1回呼び出された際に、引数は'foo'と'bar'だった
    expect(mockFunction.mock.calls[0]).toEqual(['foo', 'bar'])

    // mockにはresultsプロパティを持っている
    expect(mockFunction.mock).toHaveProperty('results')

    // 1回呼び出された
    expect(mockFunction.mock.results).toHaveLength(1)

    // 1回目の返り値はundefinedである
    expect(mockFunction.mock.results[0].value).toBe(undefined)
  })
})