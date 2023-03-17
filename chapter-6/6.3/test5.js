describe("In array", function() {
  let arr = [5, 4, 3, 1, 2, 6, 8];

  it("The filter for values in array", function() {

    let filter = inArray(arr);
    assert.isTrue(filter(5));
    assert.isTrue(filter(8));
    assert.isFalse(filter(0));
    assert.isFalse(filter(-1));
  });
});


describe("In between", function() {

  it("The filter for values between", function() {
    let filter = inBetween(1, 4);
    assert.isFalse(filter(5));
    assert.isTrue(filter(4));
    assert.isTrue(filter(2));
  });
});