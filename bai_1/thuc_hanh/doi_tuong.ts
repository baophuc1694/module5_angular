interface IUser {
    name:string;
    age:number;
}
let customer:IUser ={
    name : 'Phuc',
    age: 27
};
console.log(customer);

customer = {
    name: 'Anna',
    age: 25
};
console.log(customer)