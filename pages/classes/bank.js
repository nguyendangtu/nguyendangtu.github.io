class Bank{
    static nextNumber = Math.floor(100000 + Math.random() * 900000);
    constructor(accounts){
        this._accounts = accounts;
    }

    getAccounts(){
        return this._accounts;
    }

    addAccount(){
        let account = new Account(Bank.nextNumber);
        this._accounts.push(account);
        console.log(this._accounts.length);
    }

    addSavingsAccount(interest){
        let account = new SavingsAccount(Bank.nextNumber, interest);
        this._accounts.push(account);
    }

    addCheckingAccount(overdraft) {
        let account = new CheckingAccount(Bank.nextNumber, overdraft);
        this._accounts.push(account);
    }

    closeAccount(number){
        this._accounts = this._accounts.filter( account => !(account.getNumber() == number));
    }

    accountReport(){
        for(let x of this._accounts){
            console.log(x.toString());
        }
    }

    endOfMonth(){
        
    }
    
}