---
title: Getting Started
---

# Getting Started

## Installation

NativeDev currently supports Debian and Ubuntu based distributions.

Install the latest release package: [Download](https://github.com/sayedsahin/nativedev/releases/tag/v0.4.0)

```bash
sudo apt install ./nativedev_<version>_all.deb
```

## First Launch

After opening NativeDev:

1. Review the system requirements.
2. Allow required privileged operations when requested.
3. Configure your development preferences.
4. Configure Local Development wildcard DNS and Nginx routing when you are ready to serve parked projects.
5. Install/trust mkcert only if you want optional local HTTPS.


## Your first local project

With the default Local TLD, a project directory named `example` uses:

```text
HTTP   → http://example.test
HTTPS  → https://example.secure.test
```

HTTP is the default development path. HTTPS is optional. After Local Development routing is configured, the **Projects** page shows **Open HTTP** and **Open HTTPS** for each detected project; the HTTPS action becomes available after the local wildcard certificate is configured.

See [Local Development](features/local-development.md) for parking, DNS, PHP selection, and HTTPS setup.
