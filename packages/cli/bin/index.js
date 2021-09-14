#!/usr/bin/env node

const { cli } = require('../src')

// set default bundler
cli({ bundler: '@vuepress/bundler-webpack' })