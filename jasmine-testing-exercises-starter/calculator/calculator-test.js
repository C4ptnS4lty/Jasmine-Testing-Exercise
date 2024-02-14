
it('should calculate the monthly rate correctly', function () {
  let values = {amount: 100000, years: 10, rate: 6};
  let expected = 1103.50;

  expect(calculateMonthlyPayment(values)).toEqual(expected.toFixed(2));

  values = {amount: 0, years: 0, rate: 0};
  expected = 0;

  expect(calculateMonthlyPayment(values)).toEqual(0);

  values = {amount: 10, years: 0, rate: 0};
  expected = 0;

  expect(calculateMonthlyPayment(values)).toEqual(0);
});


it("should return a result with 2 decimal places", function() {
  let values = {amount: 100000, years: 10, rate: 6};
  let expected = 1103.50;

  expect(calculateMonthlyPayment(values)).toEqual(expected.toFixed(2));
});

/// etc
