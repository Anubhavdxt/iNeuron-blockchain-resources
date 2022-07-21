// 0 == Monday
// 1 == Tuesday
// 2 == Wednesday
// 3 == Thursday
// 4 == Friday
// 5 == Saturday
// 6 == Sunday

let value = "";
let holiday = "yes";

switch (value) {
  case 0:
    if (holiday === "yes") {
      console.log("Today is holiday");
    } else {
      console.log("The day is Monday");
    }
    break;
  case 1:
    console.log("The day is Tuesday");
    break;
  case 2:
    console.log("The day is Wednesday");
    break;
  case 3:
    console.log("The day is Thursday");
    break;
  case 4:
    console.log("The day is Friday");
    break;
  case 5:
    console.log("The day is Saturday");
    break;
  case 6:
    console.log("The day is Sunday");
    break;

  default:
    console.log("Wrong Day");
    break;
}
