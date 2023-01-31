

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

describe('getInterest', function () {
    it('Expected output of getInterest() is 2%', function () {
        let acct = new SavingsAccount(123456, 2);
        acct.deposit(1000);
        assert.equal(2, acct.getInterest());
    });
});

describe('addInterest', function () {
    it('Expected output of addInterest() is 1020', function () {
        let acct = new SavingsAccount(123456,2);
        acct.deposit(1000);
        acct.addInterest();
        assert.equal(1020, acct.getBalance());
    });
});


describe('withdraw', function () {
    it('Expected output of withdraw(500) is 500', function () {
        let acct = new CheckingAccount(123456,1000);
        acct.deposit(5000);
        acct.withdraw(500);
        assert.equal(4500, acct.getBalance());
    });
    it('Expected output of withdraw(1500) is an exception', function () {
        let acct = new CheckingAccount(123456,1000);
        acct.deposit(5000);
        expect(() => acct.withdraw(1500)).to.throw(Error);
    });
    it('Expected output of withdraw(-500) is exception', function () {
        let acct = new CheckingAccount(123456,1000);
        expect(() => acct.withdraw(-500)).to.throw(RangeError);
    });
});




describe('addAccount', function () {
    it('Expected output of addAccount is an new account added to bank', function () {
        let bank = new Bank([]);
        bank.addAccount();
        assert.equal(1, bank.getAccounts().length);
    });
});

describe('addSavingsAccount', function () {
    it('Expected output of addSavingsAccount is an new saving account added to bank', function () {
        let bank = new Bank([]);
        bank.addSavingsAccount(2);
        assert.equal(1, bank.getAccounts().length);
    });
});

describe('addCheckingAccount', function () {
    it('Expected output of addCheckingAccount is an new checking account added to bank', function () {
        let bank = new Bank([]);
        bank.addCheckingAccount(500);
        assert.equal(1, bank.getAccounts().length);
    });
});

describe('closeAccount', function () {
    it('Expected output of closeAccount is an closed account added to bank', function () {
        let bank = new Bank([]);
        bank.addCheckingAccount(500);
        let number = bank.getAccounts()[0].getNumber();
        bank.closeAccount(number);
        assert.equal(0, bank.getAccounts().length);
    });
});

describe('accountReport', function () {
    it('Expected output of accountReport is log on the console', function () {
        let bank = new Bank([]);
        bank.addAccount();
        bank.addSavingsAccount(2);
        bank.addCheckingAccount(500);
        bank.accountReport();
    });
});
