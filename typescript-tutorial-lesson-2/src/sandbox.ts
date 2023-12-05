
type StringOrNum= string|number;
type objectWithName={name: string, uid : StringOrNum};

// const logDetails= (uid :string|Number, item: string) => console.log(`${item} has uid ${uid}`);

// const greet= (user:{name:string, uid : string|number})=> console.log(`${user.name} says Hello`);
const logDetails= (uid :StringOrNum, item: string) => console.log(`${item} has uid ${uid}`);

const greet= (user:objectWithName)=> console.log(`${user.name} says Hello`);
