import { program } from "commander";
import { seedCmd } from "./commands/seedCmd";
import { similarcarsCmd } from "./commands/similarcarsCmd";
import { initDB } from "./database";

console.log("MongoDB CLI");

initDB();

program.version("1.0.0").description("A CLI tool to seed data into MongoDB.");

program
  .command("similarcars")
  .description("show similar cars from MongoDB")
  .action(similarcarsCmd);

program
  .command("seed")
  .description("uploads cars into MongoDB")
  .action(seedCmd);

program.parse();
