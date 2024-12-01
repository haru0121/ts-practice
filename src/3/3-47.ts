function printMessage(message?: string) {
  if (message) {
    console.log(message);
  } else {
    console.log("No message provided.");
  }
}

printMessage("Hello, world!"); // Hello, world!
printMessage(); // No message provided.
