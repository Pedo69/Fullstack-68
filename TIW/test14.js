function getTopStudent(students){
    let top = students[0]
    console.log(top)
    for (let i of students){
        if (i.score > top.score) {
            top = i
        }
    }
    return top
}

const students = [
  { name: "A", score: 50 },
  { name: "B", score: 80 },
  { name: "C", score: 70 },
]

console.log(getTopStudent(students))
// output: { name: "B", score: 80 }
