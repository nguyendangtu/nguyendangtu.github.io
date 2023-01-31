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
        
    }

    
}