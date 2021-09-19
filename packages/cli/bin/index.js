#!/usr/bin/env node

const { cli } = require('..')

// set default bundler
cli({ bundler: '@vuepress/bundler-webpack' })