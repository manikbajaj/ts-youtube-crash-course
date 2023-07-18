let booleanValue: boolean = true;

// Literal values
booleanValue = false;

// valid expressions of true or false
booleanValue = typeof "abc" == "string";
booleanValue = 1 > 0;

// You will get errors here
booleanValue = {};
booleanValue = "New York";

// Undefined and Null are not considered by boolean values
// they are separate types in typescript
// though they are used as boolean values when you use them in javascript and would return false
booleanValue = null;
booleanValue = undefined;
