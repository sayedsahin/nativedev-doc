---
title: Why NativeDev
---

# Why NativeDev exists

Linux already ships the pieces of a capable local development environment: Nginx, PHP-FPM, databases, Redis, Node.js, systemd, APT, and standard filesystem and networking tools. The difficult part is not that these components are missing — it is that configuring and operating them together usually means remembering package names, service units, configuration paths, permissions, local DNS rules, PHP-FPM sockets, and privileged commands.

NativeDev exists to make that native Linux stack easier to use **without replacing it with another stack**.

## The problem NativeDev solves

A typical local project can require several independent system tasks:

- install and manage Nginx, PHP-FPM, databases, Redis, Composer, and related tools
- switch or pin PHP versions without breaking the distribution's own configuration
- route local project names to a parked projects directory
- keep PHP-FPM file ownership aligned with the logged-in developer
- configure local DNS and optional trusted HTTPS
- start, stop, enable, disable, update, and diagnose system services
- perform the small set of root operations these tasks require without turning the whole desktop application into a root process

All of those tasks are possible from a terminal. NativeDev provides one graphical control plane for them while leaving the underlying services visible and usable outside NativeDev.

## Native first, not an isolated replacement

NativeDev deliberately does not bundle a private copy of Nginx, PHP, Node.js, or a database server. It does not require a VM or an always-running container stack. The services it manages remain normal Linux resources:

```text
APT packages
    +
systemd services
    +
standard configuration files
    +
normal project directories
    ↓
NativeDev management layer
```

That means the same Nginx, PHP, database server, Composer, or Node.js installation can still be inspected and used with the normal Linux tools you already know. NativeDev is an orchestrator, not a replacement operating environment.

## Local development stays simple

With the default local TLD, a parked project named `example` has two clear addresses:

```text
HTTP   → http://example.test
HTTPS  → https://example.secure.test
```

HTTP is the normal local-development path. HTTPS is optional and uses a separate `secure` namespace so one trusted wildcard certificate can cover local projects without generating a new certificate for every project. The **Projects** page exposes both destinations directly with **Open HTTP** and **Open HTTPS** actions.

If the local TLD is changed, the same model is preserved: `project.<TLD>` for HTTP and `project.secure.<TLD>` for HTTPS.

## NativeDev still has a security boundary

A desktop management application sometimes needs root access, but NativeDev does not run its GTK interface as root and does not expose a generic “run this command as root” path. Privileged changes go through a restricted, versioned helper that accepts named operations and validates their inputs again on the root side.

This keeps the convenience layer separate from the privilege boundary. See the [Security Model](security.md) for the detailed contract.

## NativeDev and containers can coexist

NativeDev is not an argument that every project should avoid containers. Some applications need exact production images, multiple isolated service versions, or a team-standard container workflow. NativeDev is for the other common case: when you want a fast, transparent local environment built from the Linux services already installed on the workstation.

Docker, Podman, VMs, and NativeDev can live on the same machine. NativeDev simply makes the native path a first-class option.

## Where to go next

- [Getting Started](getting-started.md) — install NativeDev and configure the first environment
- [Local Development](features/local-development.md) — parked projects, HTTP/HTTPS routing, PHP selection, DNS, and mkcert
- [Architecture](architecture.md) — the internal controller/manager/system-layer design
- [Security Model](security.md) — how privileged operations are constrained
