describe("throttle(f, 1000)", function() {
  let f1000;
  let log = "";

  function f(a) {
    log += a;
  }

  before(function() {
    f1000 = throttle(f, 1000);
    this.clock = sinon.useFakeTimers();
  });

  it("First call happened immediately", function() {
    f1000(1); // ����� ���������� ����������
    assert.equal(log, "1");
  });

  it("Calls are ignored until 1000 ms from the last call", function() {
    f1000(2); // (�������� - ����� 1000 �� � ������� ���������� ������)
    f1000(3); // (�������� - ����� 1000 �� � ������� ���������� ������)
    // ������������ ����� ������ f(3) 1000 ��

    assert.equal(log, "1"); // ����� ������ ������ 1-� ����� ��������

    this.clock.tick(1000); // ����� 1000 ��...
    assert.equal(log, "13"); // log==13, ��������� ����� f1000(3)
  });

  it("3d call waits 1000 ms from the second", function() {
    this.clock.tick(100);
    f1000(4); // (�������� - ����� 1000 �� � ������� ���������� �����)
    this.clock.tick(100);
    f1000(5); // (�������� - ����� 1000 �� � ������� ���������� ������)
    this.clock.tick(700);
    f1000(6); // (�������� - ����� 1000 �� � ������� ���������� ������)

    this.clock.tick(100); // ������ ������ 100 + 100 + 700 + 100 = 1000 ��

    assert.equal(log, "136"); // ��������� ����� ��� f(6)
  });

  after(function() {
    this.clock.restore();
  });

});