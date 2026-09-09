# 🚀 Web-ag-kit

<p align="left">
  <a href="https://www.npmjs.com/package/@uuartofc/web-ag-kit"><img src="https://img.shields.io/npm/v/@uuartofc/web-ag-kit?logo=npm&color=CB3837" alt="npm version"></a>
  <a href="https://github.com/uuartofc/AG-Kits"><img src="https://img.shields.io/github/stars/uuartofc/AG-Kits?style=flat&logo=github" alt="GitHub stars"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/uuartofc/AG-Kits?color=blue" alt="MIT license"></a>
</p>

Um workspace de agentes de IA para desenvolvimento web full-stack. Instale uma vez e equipe seus projetos com especialistas, skills, workflows e verificacoes de qualidade.

## ⚡ Comece em segundos

Na raiz do projeto:

```bash
npx @uuartofc/web-ag-kit
```

O comando cria `.agents/` no projeto atual. Para instalar globalmente:

```bash
npm install -g @uuartofc/web-ag-kit
web-ag-kit
```

Tambem e possivel indicar outro diretorio:

```bash
web-ag-kit ./meu-projeto
```

> O instalador preserva uma instalacao existente por padrao. Use `--force` apenas para substitui-la deliberadamente.

## 🧠 O que e `.agents/`?

E a camada de contexto do projeto para seus agentes de desenvolvimento: regras, especialistas, conhecimento tecnico e comandos ficam versionados junto do codigo.

```text
.agents/
├── agents/       [agents] Papeis especializados
├── skills/       [skills] Conhecimento reutilizavel
├── workflows/    [flow] Processos de desenvolvimento
├── rules/        [rules] Regras do workspace
├── scripts/      [tools] Testes e auditorias
└── mcp/          [MCP] Integracoes externas
```

## 🎯 O que ele cobre

- **Frontend:** UX, acessibilidade, tipografia, responsividade e performance.
- **Backend:** APIs, bancos de dados, autenticacao e arquitetura.
- **Qualidade:** testes unitarios, integracao, E2E e checklists de release.
- **Seguranca:** OWASP, autorizacao, SSRF, injecao, supply chain e resiliencia.
- **Orquestracao:** agentes especializados para planejar e executar tarefas complexas.

## 🔄 Fluxo recomendado

```text
[idea] Ideia -> [plan] Plano -> [code] Implementacao -> [test] Testes -> [shield] Auditoria -> [ship] Deploy
```

Depois da instalacao, valide o projeto com:

```bash
python .agents/skills/vulnerability-scanner/scripts/security_scan.py . --fail-on high
python .agents/scripts/checklist.py .
```

## 🧰 Requisitos

- Node.js 18+
- Python 3.9+ para os scripts de auditoria

## 🔌 MCP

O kit inclui um template em `.agents/mcp/mcp_config.json`. Revise cada servidor e suas permissoes antes de adiciona-lo a configuracao global do seu agente.

## 🛡️ Uso responsavel

Use o kit apenas em projetos proprios ou autorizados. Os testes de disponibilidade sao controlados e isolados; nao incluem DDoS volumetrico, botnets, spoofing ou testes em terceiros.

## 📚 Documentacao

- [Arquitetura](ARCHITECTURE.md)
- [Catalogo de ataques](skills/vulnerability-scanner/attack-catalog.md)
- [MCP Builder](skills/mcp-builder/SKILL.md)
- [Frontend Design](skills/frontend-design/SKILL.md)

## 📄 Licenca

MIT. Consulte [LICENSE](LICENSE).
