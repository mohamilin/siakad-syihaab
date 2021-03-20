const input = [
    ["Belajar Javascript", ["Meminjam", "Andi"]],
    ["Latihan CSS", ["Meminjam", "Robert"]],
    ["Merancang Database SQL", ["Mengembalikan", "Andi"]],
    ["Dasar HTML 1", ["Mengembalikan", "Boy"]],
    ["Advance CSS3", ["Meminjam", "Chandra"]],
    ["Tips Mengetik Cepat", ["Meminjam", "Chandra"]],
]
console.table(input)
// console.table(input[0])
// console.log(input[0][1]) //ambil nama dan status (meminjam / mengembalikkan)
// console.log(input[0][0]) //ambil value
// console.log(input[2][1][0]) //ambil value status (meminjam / mengembalikkan)
// console.log(input[2][1][1]) //ambil value nama orang yang meminjam / mengembalikkan
// let boorow = []
// let restore = []
// for(let i = 0; i < input.length; i++){
//     input.map(item => console.log(item[1]))
    // let filterBoorow = input[i][1][0]
    // if(filterBoorow === "Meminjam") {
    //     input.shift('meminjam')
    //     console.log('loop', input)
    // }
    // boorow.push(input[i][1][0])
    // restore.push(input[i][1][1])
// }

// console.log({boorow, restore})
// console.log('restore', restore)

// const newTeachers = [
//     { teachers: "Steve", subjects: ["English", "Maths", "History"] },
//     { teachers: "Celia", subjects: ["Maths", "Science"] },
//   ];

// var filterSubject = function(teachers, subject) {
//     var filteredTeachers = [];
//     for (var i=0; i<=teachers.length-1; i++) {
//       var teacher = teachers[i];
//       for (var j=0; j<=teacher.subjects.length-1; j++) {
//         if (teacher.subjects[j].toLowerCase()== subject.toLowerCase()) {
//           filteredTeachers.push(teacher);
//         }
//       }
//     }
//     return filteredTeachers;
//   }

let inputTwo = [
  [
      "Meminjam",
      ["3 orang", ["Andi", "Robert", "Chandra"]],
      ["4 Buku", ["Belajar Javascript","Latihan CSS","Advance CSS3","Tips Mengetik Cepat"]]
  ],
  [
      "Mengembalikan",
      ["2 Orang", ["Andi", "Boy"]],
      ["2 Buku", ["Merancang Database SQL", "Dasar HTML 1"]]
  ]
]
console.table(inputTwo)