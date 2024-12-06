




# Visual Studio Code Setup Guide for Ancestry Application Development

## 1. Basic Installation and Setup

### Install VSCode
1. Download VS Code from https://code.visualstudio.com/
2. Install for your MacBook
3. Launch VS Code

### Initial Workspace Setup
```bash
# Create project directory
mkdir -p ~/Projects/ancestry-app
cd ~/Projects/ancestry-app

# Create basic structure
mkdir -p {services,infrastructure,docs,scripts}
mkdir -p services/{auth,user,family-tree,media,story,book,gedcom,face-recognition,analytics}

# Initialize git repository
git init

# Create workspace file
touch ancestry-app.code-workspace
```

### Workspace Configuration
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
        }
        // Add other services as needed
    ],
    "settings": {
        "files.exclude": {
            "**/.git": true,
            "**/.DS_Store": true,
            "**/node_modules": true,
            "**/__pycache__": true,
            "**/.pytest_cache": true
        },
        "editor.formatOnSave": true,
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        },
        "python.linting.enabled": true,
        "java.configuration.updateBuildConfiguration": "automatic"
    }
}
```

## 2. Essential Extensions

### General Development
1. GitLens
2. Git History
3. Docker
4. Remote Development
5. Thunder Client (API Testing)

### Python Development
1. Python
2. Pylance
3. Python Test Explorer
4. Python Debugger

### JavaScript/Node.js Development
1. ESLint
2. Prettier
3. npm Intellisense
4. JavaScript (ES6) code snippets
5. Node.js Extension Pack

### Java Development
1. Extension Pack for Java
2. Spring Boot Extension Pack
3. Gradle for Java

### Database Tools
1. MongoDB for VS Code
2. PostgreSQL
3. Redis Client

### AWS Development
1. AWS Toolkit
2. CloudFormation Linter
3. AWS CDK Tools

### Additional Tools
1. YAML
2. JSON Tools
3. Markdown All in One
4. Error Lens
5. Code Spell Checker

## 3. Extension Settings

### Git Configuration
```json
{
    "git.enableSmartCommit": true,
    "git.confirmSync": false,
    "git.autofetch": true,
    "gitlens.currentLine.enabled": true,
    "gitlens.hovers.currentLine.over": "line"
}
```

### Python Configuration
```json
{
    "python.linting.pylintEnabled": true,
    "python.linting.enabled": true,
    "python.formatting.provider": "black",
    "python.testing.pytestEnabled": true,
    "python.analysis.typeCheckingMode": "basic"
}
```

### JavaScript Configuration
```json
{
    "javascript.updateImportsOnFileMove.enabled": "always",
    "typescript.updateImportsOnFileMove.enabled": "always",
    "eslint.validate": [
        "javascript",
        "typescript"
    ],
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### Java Configuration
```json
{
    "java.configuration.updateBuildConfiguration": "automatic",
    "java.dependency.packagePresentation": "hierarchical",
    "java.completion.importOrder": [
        "java",
        "javax",
        "org",
        "com"
    ]
}
```

## 4. Debugging Configurations

### Create Launch Configurations
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python: FastAPI",
            "type": "python",
            "request": "launch",
            "module": "uvicorn",
            "args": [
                "main:app",
                "--reload",
                "--port",
                "8000"
            ],
            "jinja": true,
            "justMyCode": true
        },
        {
            "name": "Node.js: Express",
            "type": "node",
            "request": "launch",
            "program": "${workspaceFolder}/src/index.js",
            "skipFiles": [
                "<node_internals>/**"
            ]
        },
        {
            "type": "java",
            "name": "Spring Boot App",
            "request": "launch",
            "mainClass": "com.ancestry.Application"
        }
    ]
}
```

## 5. Snippets Configuration

### Create Custom Snippets
1. Press `Cmd+Shift+P`
2. Type "Configure User Snippets"
3. Select appropriate language

Example for Python:
```json
{
    "FastAPI Route": {
        "prefix": "faroute",
        "body": [
            "@router.${1|get,post,put,delete|}'/${2:path}')",
            "async def ${3:function_name}():",
            "    try:",
            "        $0",
            "    except Exception as e:",
            "        raise HTTPException(status_code=500, detail=str(e))"
        ]
    }
}
```

## 6. Terminal Configuration

### Integrated Terminal Settings
```json
{
    "terminal.integrated.defaultProfile.osx": "zsh",
    "terminal.integrated.fontFamily": "MesloLGS NF",
    "terminal.integrated.fontSize": 12,
    "terminal.integrated.scrollback": 10000
}
```

## 7. Theme and Appearance

### Recommended Settings
```json
{
    "workbench.colorTheme": "GitHub Dark",
    "workbench.iconTheme": "material-icon-theme",
    "editor.fontSize": 14,
    "editor.fontFamily": "JetBrains Mono, Menlo, Monaco, 'Courier New', monospace",
    "editor.lineHeight": 24,
    "editor.minimap.enabled": false
}
```

## 8. Project-Specific Tasks

### Create tasks.json
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Start All Services",
            "type": "shell",
            "command": "./scripts/start-services.sh",
            "problemMatcher": []
        },
        {
            "label": "Run Tests",
            "type": "shell",
            "command": "./scripts/run-tests.sh",
            "group": {
                "kind": "test",
                "isDefault": true
            }
        }
    ]
}
```


To get started with this setup:

1. First steps:
   - Install VS Code
   - Create the workspace structure
   - Install essential extensions

2. For each service you develop:
   - Create appropriate debug configurations
   - Set up language-specific settings
   - Configure testing framework

Would you like me to:
1. Detail the setup for a specific service type (Python/Node.js/Java)?
2. Show how to configure debugging for a particular service?
3. Create additional custom snippets for common patterns?
4. Explain how to set up specific extensions in more detail?

Let me know which aspect you'd like to explore further!

Remember to regularly update VS Code and extensions to get the latest features and security updates.
