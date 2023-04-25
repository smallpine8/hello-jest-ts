describe('Math.random with spyOn', () => {
  let spy
  afterEach(() => {
    spy.mockRestore() // モック関数を元の関数へ戻す
    // jest.restoreAllMocks() すべてのモック化した関数をオリジナルの関数へ戻す
  })
  it('Math.random return 1', () => {
    spy = jest.spyOn(Math, 'random').mockImplementation(() => 1) // Math.random()は1を返す。元の関数では０から１未満を返す.
    expect(Math.random()).toBe(1)
  })
})