const { args } = Deno;
import { parse } from "https://deno.land/std/flags/mod.ts";

export let readFlags = () => {
  //Store the deno startup flags into a value
  const flags = parse(args);

  //Check if the 'l' -flag is a number and return it
  if(typeof flags.l == "number") {
    return flags.l;
  } else {
    return 10; //Otherwise return this default value
  }
}
