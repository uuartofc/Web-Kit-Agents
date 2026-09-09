#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const PACKAGE_ROOT = path.resolve(__dirname, "..");
const KIT_ENTRIES = [
  "agents",
  "skills",
  "workflows",
  "rules",
  "scripts",
  "mcp",
  ".shared",
  "ARCHITECTURE.md"
];

function printUsage() {
  console.log(`Web Kit Agents

Usage:
  web-kit-agents init [target] [--force]

Commands:
  init    Install the kit into <target>/.agents (default: current directory)

Options:
  --force  Replace existing files in the target .agents directory
`);
}

function copyEntry(source, destination, force) {
  if (fs.existsSync(destination) && !force) {
    return { copied: false, skipped: true };
  }

  fs.cpSync(source, destination, {
    recursive: true,
    force,
    errorOnExist: false
  });
  return { copied: true, skipped: false };
}

function installKit(targetDirectory, force) {
  const destinationRoot = path.resolve(targetDirectory, ".agents");
  fs.mkdirSync(destinationRoot, { recursive: true });

  let copied = 0;
  let skipped = 0;

  for (const entry of KIT_ENTRIES) {
    const source = path.join(PACKAGE_ROOT, entry);
    const destination = path.join(destinationRoot, entry);

    if (!fs.existsSync(source)) {
      throw new Error(`Package entry is missing: ${entry}`);
    }

    const result = copyEntry(source, destination, force);
    copied += result.copied ? 1 : 0;
    skipped += result.skipped ? 1 : 0;
  }

  console.log(`Web Kit Agents installed in ${destinationRoot}`);
  console.log(`Entries copied: ${copied}`);
  if (skipped > 0) {
    console.log(`Entries preserved: ${skipped} (use --force to replace them)`);
  }
}

function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === "--help" || command === "-h") {
    printUsage();
    return;
  }

  if (command !== "init") {
    console.error(`Unknown command: ${command}`);
    printUsage();
    process.exitCode = 1;
    return;
  }

  const force = args.includes("--force");
  const target = args.find((arg) => arg !== "init" && arg !== "--force") || process.cwd();

  try {
    installKit(target, force);
  } catch (error) {
    console.error(`Installation failed: ${error.message}`);
    process.exitCode = 1;
  }
}

main();
