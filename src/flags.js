const { args } = Deno;
import { parse } from "https://deno.land/std/flags/mod.ts";

export let readFlags = () => {
  const flags = parse(args);

  if(typeof flags.l == "number") {
    return flags.l;
  } else {
    return 8;
  }
}
