/*
  async/await
*/

async function fetchData() {
  // fetch()の戻り値はResponseオブジェクトに解決されるPromise
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  // json()の戻り値はJSONに解決されるPromise
  let data = await response.json();
  console.log(data);

  return data;
}

// async function fetchData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let data = await response.json();
//     console.log(data);

//     return data;
//   } catch (error) {
//     console.error("データの取得中にエラーが発生しました:\n", error);
//   }
// }

fetchData();
