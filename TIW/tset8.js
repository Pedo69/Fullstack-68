const num = [
    {name: "A", Score: 45},
    {name: "B", Score: 78},
    {name: "C", Score: 90},
    {name: "D", Score: 60}
];

console.log(num.sort((a,b)=> a.Score - b.Score).filter((a)=> a.Score >= 60))
