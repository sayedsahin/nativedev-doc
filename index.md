---
layout: home
title: NativeDev Documentation

hero:
  name: NativeDev
  text: Native Linux development, managed
  tagline: A GTK4 control plane for the Nginx, PHP-FPM, database, and Node.js services already on your Debian or Ubuntu system — no containers, no bundled runtime, no private server stack.
  image:
    src: /images/hero-terminal.svg
    alt: A terminal window showing NativeDev detecting native Nginx, PHP-FPM, and MariaDB services
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: Why NativeDev exists
      link: /why-nativedev
    - theme: alt
      text: View on GitHub
      link: https://github.com/sayedsahin/nativedev

features:
  - title: Dashboard
    details: One place to see PHP status, installed services, local sites, and port conflicts — with safe, non-destructive conflict resolution built in.
    link: /features/dashboard
  - title: Local Development
    details: Park a projects folder and get HTTP at project.test, optional HTTPS at project.secure.test, per-project PHP versions, wildcard routing, and mkcert-managed local TLS.
    link: /features/local-development
  - title: PHP Management
    details: Run your distro's System PHP as-is, or opt into Multi-PHP to install and switch between side-by-side versions, extensions, and FPM pools.
    link: /features/php
  - title: Node.js Management
    details: Manage System Node or NVM-installed LTS versions with proper shell integration, without a bundled Node runtime.
    link: /features/nodejs
  - title: Services & Databases
    details: Nginx, MariaDB, PostgreSQL, Redis, Memcached, Composer, and mkcert — installed from your distro's own repositories and managed through systemd.
    link: /features/services-and-databases
  - title: Developer Tools
    details: Persistent phpMyAdmin, Adminer, and other *.localhost tools, bound to whichever PHP-FPM version you choose.
    link: /features/developer-tools
---
