/*
  truthy と falsy
*/

/*
  falsy な値
  - false
  - 0
  - -0
  - 0n
  - ""
  - null
  - undefined
  - NaN
*/

// falsy
if ("") {
  console.log("実行されない！");
}

// truthy
if ({}) {
  console.log("{} は truthy な値！");
}
