# Web Kit Agents

Reusable AI agents, skills, workflows, security checks, and frontend guidance for web projects.

## Install

From the project where you want to use the kit:

```bash
npm install --save-dev github:uuartofc/AG-Kits
npx web-kit-agents init
```

That is all. The command creates `.agents/` in the current project.

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

### Replace an existing installation

Existing files are preserved by default. Replace the installed kit only when intentional:

```bash
npx web-kit-agents init --force
```

## After installation

Run a security scan and the project checklist:

```bash
python .agents/skills/vulnerability-scanner/scripts/security_scan.py . --fail-on high
python .agents/scripts/checklist.py .
```

## What you get

- Specialist agents for frontend, backend, QA, security, databases, DevOps, and planning.
- Skills for APIs, testing, vulnerability analysis, MCP servers, clean code, and frontend design.
- Workflows for planning, building, debugging, testing, preview, deployment, and orchestration.

## Requirements

- Node.js 18+
- Python 3.9+ for the validation scripts

## Security

Use this kit only on projects you own or are authorized to test. Availability checks are bounded and isolated; the kit does not authorize volumetric DDoS, botnets, spoofing, or testing third-party systems.

## Links

- [Architecture](ARCHITECTURE.md)
- [Security attack catalog](skills/vulnerability-scanner/attack-catalog.md)
- [MCP builder skill](skills/mcp-builder/SKILL.md)
- [Frontend design skill](skills/frontend-design/SKILL.md)
