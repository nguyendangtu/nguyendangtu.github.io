

describe('deposit', function () {
    it('Expected output of deposit(500) is 500', function () {
        let acct = new Account(123456);
        acct.deposit(500);
        assert.equal(500, acct.getBalance());
    });
    it('Expected output of deposit(-500) is exception', function () {
        let acct = new Account(123456);
        expect(() => acct.deposit(-500)).to.throw(RangeError);
    });
});


describe('withdraw', function () {
    it('Expected output of withdraw(500) is 500', function () {
        let acct = new Account(123456);
        acct.deposit(1000);
        acct.withdraw(500);
        assert.equal(500, acct.getBalance());
    });
    it('Expected output of withdraw(-500) is exception', function () {
        let acct = new Account(123456);
        expect(() => acct.withdraw(-500)).to.throw(RangeError);
    });
});