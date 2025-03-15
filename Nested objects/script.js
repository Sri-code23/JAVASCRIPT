// Nested objects
const user_data = {
    name: "Sridharan",
    age: 23,
    address: {
        street: "123 Main St",
        city: "Chennai",
        state: "Tamil Nadu",
        zip: "600001"
    },
    skills: ["HTML", "CSS", "JS"],
    isStudent: true
};

console.log(user_data);
console.log(user_data.address);
console.log(user_data.address.city); // Chennai
console.log(user_data.skills[1]); // CSS    
console.log(user_data.isStudent); // true
console.log(user_data["name"]); // Sridharan
console.log(user_data["address"]["city"]); // Chennai
console.log(user_data["skills"][2]); // JS
