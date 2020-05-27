const { args } = Deno;
import { parse } from "https://deno.land/std/flags/mod.ts";

export let readFlags = () => {
  const flags = parse(args);

  if(flags.l != undefined || isNaN(flags.l)) {
    console.log(typeof flags.l);
  }

}
