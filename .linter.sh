#!/bin/bash
cd /home/kavia/workspace/code-generation/minimalhabit-tracker-46172-00f1f514/streakflow_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

