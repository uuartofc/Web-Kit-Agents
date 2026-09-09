---
name: mcp-builder
description: MCP (Model Context Protocol) server building principles. Tool design, resource patterns, best practices.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# MCP Builder

> Principles for building MCP servers.

---

## 1. MCP Overview

### What is MCP?

Model Context Protocol - standard for connecting AI systems with external tools and data sources.

### Core Concepts

| Concept | Purpose |
|---------|---------|
| **Tools** | Functions AI can call |
| **Resources** | Data AI can read |
| **Prompts** | Pre-defined prompt templates |

---

## 2. Server Architecture

### Project Structure

```
my-mcp-server/
├── src/
│   └── index.ts      # Main entry
├── package.json
└── tsconfig.json
```

### Transport Types

| Type | Use |
|------|-----|
| **Stdio** | Local, CLI-based |
| **SSE** | Web-based, streaming |
| **WebSocket** | Real-time, bidirectional |

---

## 3. Tool Design Principles

### Good Tool Design

| Principle | Description |
|-----------|-------------|
| Clear name | Action-oriented (get_weather, create_user) |
| Single purpose | One thing well |
| Validated input | Schema with types and descriptions |
| Structured output | Predictable response format |

### Input Schema Design

| Field | Required? |
|-------|-----------|
| Type | Yes - object |
| Properties | Define each param |
| Required | List mandatory params |
| Description | Human-readable |

---

## 4. Resource Patterns

### Resource Types

| Type | Use |
|------|-----|
| Static | Fixed data (config, docs) |
| Dynamic | Generated on request |
| Template | URI with parameters |

### URI Patterns

| Pattern | Example |
|---------|---------|
| Fixed | `docs://readme` |
| Parameterized | `users://{userId}` |
| Collection | `files://project/*` |

---

## 5. Error Handling

### Error Types

| Situation | Response |
|-----------|----------|
| Invalid params | Validation error message |
| Not found | Clear "not found" |
| Server error | Generic error, log details |

### Best Practices

- Return structured errors
- Don't expose internal details
- Log for debugging
- Provide actionable messages

---

## 6. Multimodal Handling

### Supported Types

| Type | Encoding |
|------|----------|
| Text | Plain text |
| Images | Base64 + MIME type |
| Files | Base64 + MIME type |

---

## 7. Security Principles

### Input Validation

- Validate all tool inputs
- Sanitize user-provided data
- Limit resource access

### API Keys

- Use environment variables
- Don't log secrets
- Validate permissions

### Capability and Trust Boundaries

- Expose the smallest capability surface; every tool needs an owner, purpose, and resource scope.
- Enforce authorization inside the server, never rely on the model or client to hide tools.
- Use explicit path, host, tenant, and operation allow-lists; reject traversal and ambiguous identifiers.
- Treat tool arguments, resource contents, and third-party responses as untrusted data.
- Apply timeouts, size limits, pagination, cancellation, rate limits, and idempotency to side effects.
- Require confirmation for destructive operations and provide dry-run behavior where practical.
- Redact secrets and personal data from logs and results; never return raw stack traces.

### Protocol and Transport Safety

- Prefer stdio for local integrations; authenticate and authorize network transports.
- Validate origin, connection lifecycle, message size, and request correlation for HTTP transports.
- Keep credentials in the host environment or a secret manager, not prompts or committed config.
- Pin dependencies and review server updates as supply-chain changes.

---

## 8. Configuration

### Claude Desktop Config

| Field | Purpose |
|-------|---------|
| command | Executable to run |
| args | Command arguments |
| env | Environment variables |

---

## 9. Testing

### Test Categories

| Type | Focus |
|------|-------|
| Unit | Tool logic |
| Integration | Full server |
| Contract | Schema validation |

### Required Test Matrix

For each tool, test valid input, missing fields, wrong types, boundary sizes, unknown fields, unauthorized scope, timeout/cancellation, downstream failure, malformed downstream data, and repeated side-effecting calls. Assert the structured result and that forbidden state changes did not occur.

For resources, test URI parsing, traversal/tenant escape, access revocation, pagination limits, stale data, and redaction. For prompts, test variable escaping and instruction injection through user-controlled values.

### Release Gates

- [ ] Tool schemas are versioned and examples match the implementation
- [ ] Every tool has authorization and negative tests
- [ ] Side effects have idempotency or an explicit confirmation boundary
- [ ] Logs and errors contain no secrets or uncontrolled user content
- [ ] Integration tests use a disposable fixture server
- [ ] Shutdown, cancellation, and partial failure leave resources clean

---

## 10. Best Practices Checklist

- [ ] Clear, action-oriented tool names
- [ ] Complete input schemas with descriptions
- [ ] Structured JSON output
- [ ] Error handling for all cases
- [ ] Input validation
- [ ] Environment-based configuration
- [ ] Logging for debugging
- [ ] Timeouts, cancellation, limits, and authorization tests

---

> **Remember:** MCP tools should be simple, focused, and well-documented. The AI relies on descriptions to use them correctly.
