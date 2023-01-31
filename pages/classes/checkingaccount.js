class CheckingAccount extends Account{
    constructor(number, limit){
        super(number);
        this._limit = limit;
    }

    /**
     * Getter for the 'private' limit field
     * 
     * @returns {limit} the limit
     */
    getLimit() {
        return this._limit;
    }

    setLimit(limit) {
        this._limit = limit;
    }

        /**
     * Method to take money out of the account
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance) {
            throw Error("Insufficient funds");
        }
        if(amount > this._limit){
            throw Error("can not withdraw more than " + this._limit);
        }
        this._balance -= amount;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Account " + this._number + ": balance " + this._balance + ", limit " + this._limit;
    }


}