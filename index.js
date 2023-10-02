const { Wild } = require("./information");
console.log(Wild);

let cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello I'm ${Wild.name} from ${Wild.campus}`,
    e: "oO",
    T: "U ",
  })
);
