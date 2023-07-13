import { CAC } from "cac";
import { codegen, Document } from "./codegen";

import fs from "fs";
import yaml from "js-yaml";

export function registerTransformCommand(cli: CAC): void {
    cli.command("", "Generate TypeScript types from Flipt export", {
        allowUnknownOptions: true,
        ignoreOptionDefaultValue: true,
    })
        .option("--export <path>", "Path to export file to use instead of Stdin")
        .example((bin) => `flipt export | ${bin}`)
        .action(generate);
}

const STDIN_FILENO = 0;

export const generate = async (options: { export?: string }) => {
    try {
        const input = fs.readFileSync(options.export ?? STDIN_FILENO);
        const document = yaml.load(input.toString());
        const code = codegen(document as Document);
        console.log(`// Generated by flipt-node ${new Date()}`);
        console.log(code);
    } catch (error) {
        console.error(error instanceof Error ? `Error: ${error.message}` : String(error));
        process.exit(1);
    }
};