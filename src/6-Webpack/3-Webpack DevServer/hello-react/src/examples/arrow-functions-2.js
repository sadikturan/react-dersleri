const user = {
    name: 'sadikturan',
    email: 'info@sadikturan.com',
    city: 'Kocaeli',
    roles: ['admin','customer'],
    getRoles: function() {
        this.roles.forEach((role)=> {
            console.log(role);
            console.log(this.name);
        })
    }
}

user.getRoles();

const addES5 = function() {
   let total = 0;
    for(let i=0; i<arguments.length;i++) {
        total += arguments[i];
    }
   return total;
}

const addES6 = () => {
    console.log(arguments);
}

console.log(addES5(5,10,20,30));
console.log(addES5(5,10,20,30,40));
addES6();