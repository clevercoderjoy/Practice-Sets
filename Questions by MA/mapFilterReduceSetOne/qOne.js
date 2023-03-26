var members = [
    {
        id: 111,
        name: "Chelsea Foster",
        workExp: 7,
        deptExp: 6,
        isPermanent: true,
    },
    {
        id: 102,
        name: "Aggie Sparling",
        workExp: 13,
        deptExp: 10,
        isPermanent: false,
    },
    {
        id: 123,
        name: "Timmy Matthews",
        workExp: 23,
        deptExp: 15,
        isPermanent: false,
    },
    {
        id: 66,
        name: "Emmet Foster",
        workExp: 22,
        deptExp: 9,
        isPermanent: true,
    },
    {
        id: 89,
        name: "Brent Dolan",
        workExp: 16,
        deptExp: 12,
        isPermanent: true,
    },
];


// 1. Find the sum of all members `workExp` sum who are permanent (`isPermenant`)?
// 2. Find the total score of employees who are permanent? score = `workExp` + `deptExp`

const sumOfPermanentMembers = ({workExp, isPermanent}) => members.reduce((acc, curr) => ((curr.isPermanent) ? acc += curr.workExp : acc), 0);
console.log(sumOfPermanentMembers(members));

const totalScore = ({workExp, isPermanent, deptExp}) => members.reduce((acc, curr) => ((curr.isPermanent) ? acc += curr.workExp + curr.deptExp : acc), 0);
console.log(totalScore(members));