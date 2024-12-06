Create and configure the workspace file.

1. In VSCode, with your project open:
   - Press `Cmd+Shift+P` (Mac) to open the command palette
   - Type "Workspace" and select "Save Workspace As..."
   - Name it `ancestry-app.code-workspace` and save it in your project root directory (~/Projects/ancestry-app)

2. Once the file is created, open it and I'll provide the configuration to paste in:



```json
{
    "folders": [
        {
            "path": ".",
            "name": "Root"
        },
        {
            "path": "services/auth",
            "name": "Auth Service"
        },
        {
            "path": "services/user",
            "name": "User Service"
        },
        {
            "path": "services/family-tree",
            "name": "Family Tree Service"
        },
        {
            "path": "services/media",
            "name": "Media Service"
        },
        {
            "path": "services/story",
            "name": "Story Service"
        },
        {
            "path": "services/book",
            "name": "Book Service"
        },
        {
            "path": "services/gedcom",
            "name": "GEDCOM Service"
        },
        {
            "path": "infrastructure",
            "name": "Infrastructure"
        }
    ],
    "settings": {
        "files.exclude": {
            "**/.git": true,
            "**/.DS_Store": true,
            "**/node_modules": true,
            "**/__pycache__": true,
            "**/.pytest_cache": true,
            "**/.venv": true
        },
        "editor.formatOnSave": true,
        "editor.rulers": [80, 100],
        "editor.tabSize": 2,
        "editor.detectIndentation": true,
        "files.insertFinalNewline": true,
        "files.trimTrailingWhitespace": true,
        
        // Python settings
        "python.linting.enabled": true,
        "python.linting.pylintEnabled": true,
        "python.formatting.provider": "black",
        
        // JavaScript settings
        "javascript.updateImportsOnFileMove.enabled": "always",
        "typescript.updateImportsOnFileMove.enabled": "always",
        "[javascript]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[typescript]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        
        // Git settings
        "git.enableSmartCommit": true,
        "git.confirmSync": false,
        "git.autofetch": true
    },
    "extensions": {
        "recommendations": [
            "eamodio.gitlens",
            "ms-azuretools.vscode-docker",
            "ms-python.python",
            "dbaeumer.vscode-eslint",
            "esbenp.prettier-vscode",
            "rangav.vscode-thunder-client",
            "amazonwebservices.aws-toolkit-vscode"
        ]
    }
}

```

3. After pasting this configuration:
   - Save the file (`Cmd+S`)
   - VS Code will ask if you want to open the workspace - click "Open Workspace"
   - VS Code will reload with the new workspace configuration

You should now see the folder structure in your explorer pane (left side) organized as defined in the workspace file.

