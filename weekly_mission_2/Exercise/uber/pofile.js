const profile = {
    name: "Lisset Reyes",
    payments: "Credit card",
    numberOfTrips: 22,
    ktravelers: 80,
    
    getGeneralInfo: function(){
        return `This user ${this.name} has done ${this.numberOfTrips} and the payment method is ${this.payments}, has traveled ${this.ktravelers} km`
    }    
}

console.log(profile.getGeneralInfo())