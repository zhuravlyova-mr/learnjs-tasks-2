describe("Delay", function() {
    before(function() {
      this.clock = sinon.useFakeTimers();
    });
  
    after(function() {
      this.clock.restore();
    });
  
    it("Calls function after timeout", function() {
      let start = Date.now();
  
      function f(x) {
        assert.equal(Date.now() - start, 1000);
      }
      f = sinon.spy(f);
  
      let f1000 = delay(f, 1000);
      f1000("test");
      this.clock.tick(2000);
      assert(f.calledOnce, 'testing calledOnce failed');
    });
  
    it("Passing args and this", function() {
      let start = Date.now();
      let user = {
        sayHi: function(phrase, who) {
          assert.equal(this, user);
          assert.equal(phrase, "Bye");
          assert.equal(who, "John");
          assert.equal(Date.now() - start, 2000);
        }
      };
  
      user.sayHi = sinon.spy(user.sayHi);
  
      let spy = user.sayHi;
      user.sayHi = delay(user.sayHi, 2000);
  
      user.sayHi("Bye", "John");
  
      this.clock.tick(2000);
  
      assert(spy.calledOnce, 'Testing calledOnce failed');
    });
  });