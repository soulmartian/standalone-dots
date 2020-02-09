import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import serve from "rollup-plugin-serve";
import pkg from "./package.json";

const input = "src/index.ts";

export default [
  {
    input,
    output: {
      name: "StandaloneDots",
      file: pkg.browser,
      format: "umd"
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      ...(process.env.ROLLUP_WATCH && [serve({ contentBase: ["./build", "./demo"] })])
    ]
  },
  {
    input,
    output: [
      {
        file: pkg.main,
        format: "cjs"
      },
      {
        file: pkg.module,
        format: "esm"
      }
    ],
    plugins: [typescript()]
  }
];
