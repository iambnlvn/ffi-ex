import { FFIType, dlopen, viewSource } from "bun:ffi";
import fs from "fs";

const path = "./libmain.so";

const lib = dlopen(path, {
  add: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
    threadsafe: true,
  },
  print: {
    returns: FFIType.void,
    threadsafe: true,
  },
});

console.log(lib.symbols.add(12, 211));
lib.symbols.print();
//@ts-ignore
fs.writeFileSync("out.c", viewSource(lib.symbols[0]));
lib.close();
