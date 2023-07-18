type DOB = string | number;

let myDob: DOB = "June 10";
let anotherDob: DOB = 100092334;

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatType = Dog | Cat;

let dog: DogAndCatType = {
  name: "Buddy",
  barks: true,
  wags: false,
};

let cat: DogAndCatType = {
  name: "Bella",
  purrs: true,
};

let hybridAnimal: DogAndCatType = {
  name: "Hybrid",
  barks: true,
  purrs: true,
  wags: false,
};
