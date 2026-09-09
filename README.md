# Web Kit Agents

A reusable toolkit for AI-assisted web development. It combines specialist agents, practical skills, repeatable workflows, security checks, MCP guidance, and frontend quality standards in one installable package.

## What is included

- **Agents** for frontend, backend, QA, security, databases, DevOps, planning, and orchestration.
- **Skills** for clean code, API design, database design, vulnerability scanning, testing, MCP servers, and frontend design.
- **Workflows** for planning, creation, debugging, testing, preview, deployment, and multi-agent orchestration.
- **Security coverage** for authorization, injection, SSRF, resource exhaustion, race conditions, supply chain risks, and bounded availability testing.
- **Runtime scripts** for security scans, test execution, project checklists, previews, and verification.

## Install with npm

Install the package as a development dependency in the project that will use the kit:

```bash
npm install --save-dev web-kit-agents
```

Initialize the kit in the project root:

```bash
npx web-kit-agents init
```

This creates:

```text
your-project/
└── .agents/
    ├── agents/
    ├── skills/
    ├── workflows/
    ├── rules/
    ├── scripts/
    └── mcp/
```

Existing `.agents/` entries are preserved by default. To replace the installed entries deliberately:

```bash
npx web-kit-agents init --force
```

### Install directly from GitHub

After publishing this repository, the kit can also be installed directly from GitHub:

```bash
npm install --save-dev github:<github-user>/<github-repository>
npx web-kit-agents init
```

Replace the placeholders with the actual GitHub account and repository name.

## Local package development

To test the package before publishing:

```bash
npm pack
mkdir ../web-kit-agents-example
cd ../web-kit-agents-example
npm init -y
npm install ../.agents/web-kit-agents-1.0.0.tgz --save-dev
npx web-kit-agents init
```

The CLI is intentionally explicit: installing the npm package does not silently overwrite project files. Use `--force` only when replacing an existing kit is intentional.

## First checks after installation

From the consuming project:

```bash
python .agents/skills/vulnerability-scanner/scripts/security_scan.py . --fail-on high
python .agents/skills/testing-patterns/scripts/test_runner.py .
python .agents/scripts/checklist.py .
```

For browser projects, run the relevant UX and Playwright checks after starting the local application.

## Recommended workflow

```text
Plan -> Build a vertical slice -> Test behavior and abuse cases -> Audit security and UX -> Preview -> Deploy
```

Use `/plan`, `/create`, `/test`, `/debug`, `/preview`, and `/deploy` when the host agent supports slash workflows. Read the relevant agent and skill instructions before making changes.

## Security boundary

This kit is for authorized development and defensive security testing. Availability checks are bounded and isolated. It does not authorize volumetric DDoS, botnet use, source spoofing, reflection/amplification, credential theft, or testing systems without written permission.

## Repository layout

```text
agents/       Specialist agent definitions
skills/       Reusable technical skills and validation scripts
workflows/    Planning and execution protocols
rules/        Workspace-wide agent rules
scripts/      Project lifecycle helpers
mcp/          MCP server configuration examples
.shared/      Shared design data and helpers
```

## Requirements

- Node.js 18 or newer for the npm installer.
- Python 3.9 or newer for the validation scripts.
- Project-specific tools such as Playwright, npm, pytest, or Lighthouse only when their related checks are used.

## Contributing

Keep additions focused, documented, testable, and compatible with the existing agent conventions. New runtime scripts should include usage instructions and a focused validation path. Security-related changes should include negative tests and explicit scope boundaries.
