import { lstatSync } from "fs";

console.log("Hello from @homy/zigbee !!");
console.log("Dev Mod Working !");

console.log(lstatSync("/dev/ttyACM0").isCharacterDevice());
