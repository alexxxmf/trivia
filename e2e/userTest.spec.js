describe('User flow in the app', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('go through the app', async () => {
    await expect(element(by.id('StartButton'))).toBeVisible();

    await element(by.id('StartButton')).tap();

    await expect(element(by.id('TrueButton'))).toBeVisible();
    await expect(element(by.id('FalseButton'))).toBeVisible();

    await element(by.id('TrueButton')).tap();
    await element(by.id('TrueButton')).tap();
    await element(by.id('TrueButton')).tap();
    await element(by.id('TrueButton')).tap();
    await element(by.id('TrueButton')).tap();
    await element(by.id('TrueButton')).tap();
    await element(by.id('TrueButton')).tap();
    await element(by.id('TrueButton')).tap();
    await element(by.id('TrueButton')).tap();
    await element(by.id('TrueButton')).tap();

    await expect(element(by.id('StartAgainButtonText'))).toBeVisible();
    await expect(element(by.id('StartAgainButton'))).toBeVisible();

    await element(by.id('StartAgainButton')).tap();

    await expect(element(by.id('StartButton'))).toBeVisible();

  });

});
