#!/bin/bash

npm run langium:generate
npm run build
npm run build:worker
npm run build:web
npm run serve