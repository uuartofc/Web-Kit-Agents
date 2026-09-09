# 🤖 Web Kit Agents

> Um kit de agentes de IA para transformar seu projeto web em um ambiente de desenvolvimento mais organizado, seguro e produtivo.

Agentes especializados, skills reutilizáveis, workflows práticos e ferramentas de validação para trabalhar com IA sem começar cada projeto do zero.

## 🚀 Instalação rápida

Execute os comandos na raiz do projeto onde você quer usar o kit:

```bash
npm install --save-dev github:uuartofc/AG-Kits
npx web-kit-agents init
```

Pronto. O comando cria a pasta `.agents/` no projeto atual.

## 🧠 Como o `.agents/` funciona?

O `.agents/` é a memória operacional do seu projeto para agentes de desenvolvimento. Ele reúne instruções, especialistas e ferramentas que ajudam a IA a tomar decisões mais consistentes.

```text
.agents/
├── agents/       👥 Personas especializadas
├── skills/       🧩 Conhecimento técnico reutilizável
├── workflows/    🔄 Fluxos para planejar, criar, testar e publicar
├── rules/        📏 Regras gerais do workspace
├── scripts/      🛠️  Scans, testes e verificações automáticas
└── mcp/          🔌 Configurações para ferramentas MCP
```

### O fluxo de trabalho

```text
💡 Ideia
    ↓
🗺️  Planejamento
    ↓
👨‍💻 Implementação com agentes especializados
    ↓
🧪 Testes e security scan
    ↓
🎨 Auditoria de UX e acessibilidade
    ↓
🚢 Preview e deploy
```

Você pode pedir ao seu agente para usar, por exemplo:

- `frontend-specialist` para interfaces e UX;
- `backend-specialist` para APIs e regras de negócio;
- `security-auditor` para vulnerabilidades e autenticação;
- `test-engineer` para testes unitários, integração e E2E;
- `orchestrator` para coordenar tarefas complexas.

### 🔁 Atualizar uma instalação existente

Arquivos existentes são preservados por padrão. Para substituir o kit intencionalmente:

```bash
npx web-kit-agents init --force
```

## ✅ Depois da instalação

Execute uma verificação inicial:

```bash
python .agents/skills/vulnerability-scanner/scripts/security_scan.py . --fail-on high
python .agents/scripts/checklist.py .
```

## 📦 O que vem no kit

- 👥 Agentes para frontend, backend, QA, segurança, bancos de dados, DevOps e planejamento.
- 🧩 Skills para APIs, testes, vulnerabilidades, MCP, clean code e frontend design.
- 🔄 Workflows para planejar, desenvolver, depurar, testar, visualizar e publicar.
- 🔐 Catálogo de testes para autorização, injeção, SSRF, resource exhaustion e lógica de negócio.

## 🧰 Requisitos

- Node.js 18+
- Python 3.9+ para os scripts de validação

## 🛡️ Segurança

Use este kit apenas em projetos próprios ou autorizados. Os testes de disponibilidade são controlados e isolados; o kit não autoriza DDoS volumétrico, botnets, spoofing ou testes em sistemas de terceiros.

## 📚 Saiba mais

- [Arquitetura](ARCHITECTURE.md)
- [Catálogo de ataques](skills/vulnerability-scanner/attack-catalog.md)
- [Skill de MCP](skills/mcp-builder/SKILL.md)
- [Skill de frontend design](skills/frontend-design/SKILL.md)
