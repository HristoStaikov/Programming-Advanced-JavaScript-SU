// function solve(obj) {
//   if (obj.dizziness === false || obj.dizziness === "undefind") {
   
//     return obj
//   }
//   const water = 0.1 * obj.weight * obj.experience;

//   obj.levelOfHydrated += water;
//   obj.dizziness = false;
//   return obj
// }
// console.log(solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }));
// console.log(solve({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true }));

function solve(obj) {
    if (obj.dizziness !== false && obj.dizziness !== undefined) {
      // Create a new object to avoid modifying the input obj
      const worker = {
        weight: obj.weight,
        experience: obj.experience,
        levelOfHydrated: 0,
        dizziness: false,
        levelOfHydratedFunction: function () {
          this.levelOfHydrated = 0.1 * this.weight * this.experience + this.levelOfHydrated;
        },
        dizzinessFunction: function () {
          this.dizziness = false;
        }
      };
      
      worker.levelOfHydratedFunction(); // Call the levelOfHydrated function
      worker.dizzinessFunction(); // Call the dizziness function
      
      return worker;
    } else {
      return obj; // Return the input obj if dizziness is already false or undefined
    }
  }
  
  const result = solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
  console.log(result);
 