// 1. Marksheet print
//     -> Print marks in descending order with subject
//     -> 80 >= Distinction
//     -> All subject marks print 
//     -> Total Marks 
//     -> Percentage print 
//     -> Father Name, Student Name, Roll no, school/college name, Class name print 

// let studentDetails = {
//     studentName: "Anish khan",
//     fatherNmae: "Mukhatry mo.",
//     rollno: 76651236,
//     schoolNmae: "K.G.N.school",
//     clasName: 12
// }
// let subjectMarks={
//     english: 80,
//     hindi: 75,
//     math: 90,
//     chemstry: 95,
//     physics: 77
// };
// let totalMarks = Object.values(subjectMarks).reduce((total, mark) => total + mark, 0);
// let totalSubjects = Object.keys(subjectMarks).length;
// let percentage = (totalMarks / (totalSubjects * 100)) * 100;
// console.log("markshit");
// console.log("________________");
// console.log(`student ka Name:${studentDetails.studentName}`);
// console.log(`father ka name:${studentDetails. fatherNmae}`);
// console.log(`rollnum.:${studentDetails.rollno}`);
// console.log(`school: ${studentDetails.schoolNmae}`);
// console.log(`class: ${studentDetails.clasName}`);
//   console.log("__________________");
// console.log("subject\t\tmarks");
// ;
// for (let subject in subjectMarks) {
//     console.log(`${subject}\t\t${subjectMarks[subject]}`);
//   }

// console.log(`totalmark: ${totalMarks}`);
// console.log(`percentage: ${percentage.toFixed(2)}%`);



// 2. Take an Array 
//     -> Filter all odd numbers
//     -> Filter all numbers greater than 30 and less than 200
//     -> Convert every odd number to even number 
// //     -> Print sum of all the numbers 

// let numbers = [15, 42, 87, 105, 150, 201, 56, 73];
// let oddNumbers = numbers.filter(number => number % 2 !== 0);
// let between30And200 = numbers.filter(number => number > 30 && number < 200);
// let evenNumbers = numbers.map(number => (number % 2 === 0 ? number : number + 1));
// let sum = numbers.reduce((total, number) => total + number, 0);
// console.log("Odd Numbers:", oddNumbers);
// console.log("Numbers between 30 and 200:", between30And200);
// console.log("Even Numbers:", evenNumbers);
// console.log("Sum of All Numbers:", sum);


// 3. Once upon a time, in a quaint village, lived four brothers - (comma separated names). They were hardworking and compassionate (occupation), tilling the land their ancestors had tended for generations.

// One day, a severe drought struck the village, leaving the fields parched and the crops withering away. The brothers were worried about their livelihood and the well-being of their fellow villagers. Despite their own struggles, they decided to help their community.

// [Eldest brother name], the eldest brother, devised a plan to dig a well that would provide a consistent water source. [Second son], with his engineering skills, designed a simple yet effective irrigation system. [Third son] used his persuasive nature to gather support from the village, while [4th Son], the youngest, tirelessly worked alongside his brothers.

// Their dedication paid off. With the well and irrigation system in place, the village began to flourish again. Crops grew, and the villagers no longer worried about scarcity. The brothers' unity and selflessness had saved the day.

// This tale of four brothers and their unwavering commitment to their community serves as a reminder that compassion, innovation, and teamwork can overcome even the most challenging times.


// 4. Create a array of Youtube playlist. With objects like below
// [
// {
//     channelName: "EasyCodingBySajid",
//     videoName: "Lecture 1 JavaScript Introduction",
//     playListName: "JavaScript",
//     duration: 20,
//     watched: true
// }
// // ]

// Now answer below questions.
//     -> Tell me how many videos you have watched
//     -> Tell me how many minutes you have given to Youtube
//     -> Tell me which videos you have not watched
//     -> Tell me which videos you have watched on a particular channel
//     -> Tell me what is your favourite playlist name

// let youtubePlaylist = [ {
//       channelName: "EasyCodingBySajid",
//       videoName: "Lecture 1 JavaScript Introduction",
//       playListName: "JavaScript",
//       duration: 20,
//       watched: true
//     },{
//       channelName: "TechTutorials",
//       videoName: "HTML Basics",
//       playListName: "Web Development",
//       duration: 15,
//       watched: false
//     },{
//       channelName: "GuitarLessons",
//       videoName: "Beginner Guitar Tutorial",
//       playListName: "Music",
//       duration: 30,
//       watched: true
//     }  ];
//   console.log(youtubePlaylist);

// 5. Create a datetime counter and display in format dd-mm-yyyy hh:mm:ss
  
// 6. Print below pattern
//     1 2 3 4 5
//     6 7 8 9 1
//     1 2 3 4 5
//     6 7 8 9 1
//     1 1 1 1 1
// for (let i = 1; i <= 5; i++) {
//     let a = "";
//     for (let j = 1; j <= 5; j++) {
//       if (i === 5) {
//         a += "1 ";
//       } else if (i % 2 === 0) {
//         a += (j + 5) + " ";
//       } else {
//         a += j + " ";
//       }
//     }
//     console.log(a);
//   }
  

// 7. Write below code to match a criteria and check a person matches how many criteria's
//     To solve this exercise create a persone object like below
//         {
//             name: "Sajid Ali Khan",
//             gender: "M",
//             age: 31,
//             address: {
//                 pincode: 302012,
//                 city: "Jaipur",
//                 state: "Rajasthan"
//             },
//             mobile: 9584354354
//         }

//     1. Check if person's name contain more than 2 words?
//     2. Gender female?
//     3. If person lives in Delhi or not?
//     4. Mobile number is present or not?
//     5. Is person older than 30 years?
// let person = {
//     name: "Sajid Ali Khan",
//     gender: "M",
//     age: 31,
//     address: {
//         pincode: 302012,
//         city: "Jaipur",
//         state: "Rajasthan"
//     },
//     mobile: 9584354354
// };
// let criteriaMatches = 0;
// let nameWords = person.name.split(" ");
// if (nameWords.length > 2) {
//     criteriaMatches++;
// }
// if (person.gender === "F") {
//     criteriaMatches++;
// }
// if (person.address.city === "Delhi") {
//     criteriaMatches++;
// }
// if (person.mobile) {
//     criteriaMatches++;
// }
// if (person.age > 30) {
//     criteriaMatches++;
// }
// console.log("Number of criteria matched:", criteriaMatches);


// 8. Fee calculator. Create array of objects like below
// [
//     {
//         studentName: "Sajid",
//         batchName: "JavaScript",
//         id: 101,
//         fees": [300,2000],
//         teacherName: "Shahrukh"
//     }
// ]

// Answer below questions:
//     1. How many students are studying in a particular batch?
//     2. How many students a particular teacher is teaching?
//     3. Total fee deposited by all the students?
//     4. Total fee deposited by students of a particular batch?
//     5. How many studens have not deposited any fee?


// 9. Take a sentence like 
//     "My name is Wecode Academy and I teach JavaScript";

// Now do below operations on this String
//     1. convert all characters to lowercase
//     2. replace JavaScript with Nodejs
//     3. Remove any space before or after the string
//     4. Now divide the sentence in two parts
//     5. Convert first part to upper case 
//     6. Convert second part to lower case
// //     7. Concatenate both the words and print on console
// const sentence = "My name is Wecode Academy and I teach JavaScript";
// const lowercaseSentence = sentence.toLowerCase();
// const replacedSentence = lowercaseSentence.replace("javascript", "Nodejs");
// const trimmedSentence = replacedSentence.trim();
// const sentenceParts = trimmedSentence.split(" and ");
// const firstPartUpperCase = sentenceParts[0].toUpperCase();
// const secondPartLowerCase = sentenceParts[1].toLowerCase();
// const concatenatedSentence = `${firstPartUpperCase} and ${secondPartLowerCase}`;
// console.log(concatenatedSentence);




// if (+age > 150) {
//     alert("Age can not be greater than 150");
//     return false;
//   }
//   if (!name) {
//     window.alert("Please enter your name properly.");
//     return false;
//   }
//   if ([...name].length > 10) {
//     window.alert("Name character length should less than or equal to 10");
//     return false;
//   }

// let ary = [
// ["heri",18,"male","b.come"],
// ["suny",19,"male","bca"],
// ["lela",17,"female","b.a"]
// ]
// for(let a = 0 ;a < 4; a++){
//   document.write(ary[a]+ "<br>")
//   console.log(ary[a]+ "<br>");
// }


//  Q.1. Movies object array. moviename, actorname, releaseyear, watched, producer

//  1. Kaun kaun si movies watch krli hai unka nam btao
//  2. Tumara favourite actor kaun hai
//  3. kaun kaun si movies particular year me launch hui
//  4. Movies objects ko ascending order me sort krna hai based on year
//  5. total tumne kitni movies dekhi hai unka count btana hai

let movies = [
  {
    movieName: "pushpa",
    actorName: "alluArjun",
    releaseYear: 2022,
    watched: false,
    producer: "rajamurli",
  },

  {
    movieName: "gadar",
    actorName: "sanydeol",
    releaseYear: 2023,
    watched: false,
    producer: "pritkumar",
  },

  {
    movieName: "p.k",
    actorName: "amirkhan",
    releaseYear: 2018,
    watched: true,
    producer: "shreekant",
  },
];
let watchedMovies = movies.filter((movie) => movie.watched);
console.log(watchedMovies.map((movie) => movie.movieName));

let favoriteActor = "amirkhan";
console.log(favoriteActor);

let targetmovie = 2022;
let particularMovies = movies.filter(
  (movie) => movie.releaseYear === targetmovie
);
console.log(
  targetmovie,
  particularMovies.map((movie) => movie.movieName)
);

let accending = movies.sort((a, b) => a.releaseYear - b.releaseYear);
console.log(accending.map((movie) => movie.movieName));

let totalseen = movies.filter((movie) => movie.watched);
console.log(totalseen.map((movie) => movie.movieName)); 