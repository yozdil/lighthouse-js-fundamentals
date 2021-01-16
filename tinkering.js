// The array of cars objects with time and speed

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

// The speed that will be added into the array of cars

const speed = 38

// Function that adds the "speed" given the time right now into the cars array

const carPassing = function (cars, speed) {
  const car = {
    time: Date.now(),
    speed: speed
  }
  cars.push(car);  
  return cars;
}

console.log(carPassing(cars, speed));

