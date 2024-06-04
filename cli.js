#!/usr/bin/env node

const path = require('path');
const startProcessing = require('./index');

const directoryPath = process.argv[2] || path.resolve('.');
startProcessing(directoryPath);
