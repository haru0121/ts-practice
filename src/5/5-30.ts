class Fish {
  swim() {
    console.log("The fish is swimming.");
  }
}

class Bird {
  fly() {
    console.log("The bird is flying.");
  }
}

function move(animal: Fish | Bird) {
  if (animal instanceof Fish) {
    // animalはFish型として扱われる
    animal.swim();
  } else {
    // animalはBird型として扱われる
    animal.fly();
  }
}
