---
description: Create new application command. Triggers App Builder skill and starts interactive dialogue with user.
---

# /create - Create Application

$ARGUMENTS

---

## Task

This command starts a new application creation process.

### Steps:

1. **Request Analysis**
   - Understand what the user wants
   - If a missing decision changes scope, ask one concise question; otherwise choose a reversible default and record it
   - Identify authentication, data sensitivity, accessibility, performance, and deployment constraints

2. **Project Planning**
   - Use `project-planner` agent for task breakdown
   - Determine tech stack
   - Plan file structure
   - Create plan file and proceed to building

3. **Application Building (After Approval)**
   - Orchestrate with `app-builder` skill
   - Coordinate expert agents:
     - `database-architect` → Schema
     - `backend-specialist` → API
     - `frontend-specialist` → UI
    - Keep a vertical slice runnable before adding secondary features
    - Add authorization and failure-path tests for every state-changing flow

4. **Preview**
   - Start with `auto_preview.py` when complete
   - Present URL to user

### Completion Gate

Before reporting completion, run the narrowest relevant tests, a security scan, and a browser/accessibility audit when a UI exists. Record known gaps, test commands, and the preview URL. Do not claim completion when only the happy path compiles or renders.

---

## Usage Examples

```
/create blog site
/create e-commerce app with product listing and cart
/create todo app
/create Instagram clone
/create crm system with customer management
```

---

## Before Starting

If request is unclear, ask these questions:
- What type of application?
- What are the basic features?
- Who will use it?

Use defaults, add details later.
