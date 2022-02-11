describe('check queures in api call', () => {
  it('should return a values of paramaters', () => {
    const testscope = 'scope=user-read-email,user-read-private,streaming';
    const scope = 'user-read-email user-read-private streaming';
    const auth = new URLSearchParams({ scope: scope });
    expect(auth.toString()).toEqual(testscope);
  });
});
