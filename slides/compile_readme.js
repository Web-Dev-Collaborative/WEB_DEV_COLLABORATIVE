#!/usr/bin/env node

const fs = require('fs');
const demoText = require('./frontend/util/demo_text');

fs.writeFileSync('README.md', demoText);
