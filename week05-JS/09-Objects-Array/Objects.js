const person = {
    x:10,
    firstName : 'Dhanaraj',
    lastName : 'Huli',
    hobbies:['coding','playing','sleeping'],
    isPaid:true,
    getFullName : function(){
        return `${this.firstName} ${this.lastName}`
    },
    address:{
        hno:1,
        street:1,
        countryCode:'IN',
        state:'Kanrnataka'
    }
}

console.log(person.address.state);
