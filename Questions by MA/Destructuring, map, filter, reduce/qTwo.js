const company = {
    details: {
        name: "Acme Corp",
        address: "123 Main St",
        city: "Anytown",
        state: "CA",
    },
    employees: [
        {
            name: "Alice",
            age: 30,
            address: {
                street: "123 Main St",
                zip: "12345",
            },
        },
        {
            name: "Bob",
            age: 25,
            address: {
                street: "456 Main St",
                zip: "23456",
            },
        },
        {
            name: "Charlie",
            age: 35,
            address: {
                street: "789 Main St",
                zip: "34567",
            },
        },
    ],
};
// create an array of objects with the key as employee name and value as street name


const employeeDetails = (company) => company.employees.map((employee) => ({[employee.name]: employee.address.street}));
console.log(employeeDetails(company));