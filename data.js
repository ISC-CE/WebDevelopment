const mentors = ["John", "James", "Jones", "Jimmy", "Fiona", "Spispi"];
const students = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "David Wilson",
  "Emily Davis",
  "Frank Miller",
  "Grace Anderson",
  "Henry Harris",
  "Isabel Jackson",
  "Jack White",
  "Karen Hall",
  "Liam Turner",
  "Mia Moore",
  "Noah Martin",
  "Olivia Lee",
  "Paul Clark",
  "Quinn Lewis",
  "Rachel Walker",
  "Samuel Baker",
  "Taylor Young",
  "Uma Garcia",
  "Victor Patel",
  "Willow Lopez",
  "Xavier King",
  "Yasmine Williams",
  "Zane Davis",
];
const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 17, 18, 20];

const studentDetails = [
  { name: "Alice", age: 20, language: "JavaScript" },
  { name: "Bob", age: 22, language: "Python" },
  { name: "Charlie", age: 21, language: "Java" },
  { name: "David", age: 23, language: "C++" },
  { name: "Emily", age: 19, language: "Ruby" },
  { name: "Frank", age: 20, language: "Swift" },
  { name: "Grace", age: 22, language: "C#" },
  { name: "Henry", age: 21, language: "PHP" },
  { name: "Isabel", age: 24, language: "Go" },
  { name: "Jack", age: 20, language: "TypeScript" },
];
const usersDB = [
  {
    id: 1,
    username: "user1",
    password: "password1",
    email: "user1@example.com",
    age: 25,
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
    email: "user2@example.com",
    age: 30,
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    email: "user3@example.com",
    age: 22,
  },
  {
    id: 4,
    username: "user4",
    password: "password4",
    email: "user4@example.com",
    age: 28,
  },
  {
    id: 5,
    username: "user5",
    password: "password5",
    email: "user5@example.com",
    age: 26,
  },
  {
    id: 6,
    username: "user6",
    password: "password6",
    email: "user6@example.com",
    age: 32,
  },
  {
    id: 7,
    username: "user7",
    password: "password7",
    email: "user7@example.com",
    age: 27,
  },
];

const jwtSecretKey = "secretKey";

module.exports = {
  mentors,
  students,
  evenNumbers,
  studentDetails,
  usersDB,
  jwtSecretKey,
};
