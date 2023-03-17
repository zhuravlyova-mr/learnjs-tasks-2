describe("spy", function() {
  it("Write calls into 'work.calls'", function() {
    function work() {}

    work = spy(work);
    assert.deepEqual(work.calls, []);

    work(6, 8);
    assert.deepEqual(work.calls, [
      [6, 8]
    ]);

    work(2, 11);
    assert.deepEqual(work.calls, [
      [6, 8],
      [2, 11]
    ]);
  });

  it("Wraps up the functions", function() {

    let sum = sinon.spy((a, b) => a + b);

    let wrappedSum = spy(sum);

    assert.equal(wrappedSum(2, 5), 7);
    assert(sum.calledWith(2, 5));
  });


  it("Wraps up the methods", function() {

    let calc = {
      sum: sinon.spy((a, b) => a + b)
    };

    calc.wrappedSum = spy(calc.sum);

    assert.equal(calc.wrappedSum(4, 6), 10);
    assert(calc.sum.calledWith(4, 6));
    assert(calc.sum.calledOn(calc));
  });

});