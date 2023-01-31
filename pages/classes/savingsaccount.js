class SavingsAccount extends Account{
    constructor(number,  interest){
        super(number);
        this._interest =  interest;
    }

     /**
     * Getter for the 'private' interest field
     * 
     * @returns {interest} the interest
     */
     getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest;
    }


    addInterest(){
        let amount = this._balance * (this._interest/100);
        this._balance += amount;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Account " + this._number + ": balance " + this._balance + ", interest " + this._interest;
    }
    
}