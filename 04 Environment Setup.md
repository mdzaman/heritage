I'll help you set up the development environment on your MacBook. Let's go through this step by step.





# Development Environment Setup Guide for MacBook

## Prerequisites
Before we begin, ensure your MacBook has:
- At least 16GB RAM (8GB minimum)
- At least 50GB free disk space
- macOS Monterey (12.0) or later
- Active internet connection

## 1. Install Command Line Tools

1. Open Terminal:
   - Press `Command + Space` to open Spotlight
   - Type "Terminal" and press Enter

2. Install Xcode Command Line Tools:
```bash
xcode-select --install
```
- Click "Install" when prompted
- Wait for installation to complete (10-15 minutes)

## 2. Install Package Manager

1. Install Homebrew:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Follow the terminal prompts to complete installation

3. Verify installation:
```bash
brew --version
```

## 3. Install Development Tools

1. Install Git:
```bash
brew install git
```

2. Install Node.js and npm:
```bash
brew install node
```

3. Install Docker Desktop:
```bash
brew install --cask docker
```
- Open Docker Desktop from Applications
- Complete the onboarding process

4. Install Visual Studio Code:
```bash
brew install --cask visual-studio-code
```

5. Install AWS CLI:
```bash
brew install awscli
```

## 4. Install Database Tools

1. Install PostgreSQL:
```bash
brew install postgresql@14
```

2. Start PostgreSQL:
```bash
brew services start postgresql@14
```

## 5. Configure Development Environment

1. Configure Git:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

2. Configure AWS CLI:
```bash
aws configure
```
- You'll need your AWS access key ID and secret access key
- Use 'us-east-1' as default region
- Use 'json' as default output format

## 6. Install Project-Specific Tools

1. Install Python:
```bash
brew install python@3.11
```

2. Install Java Development Kit:
```bash
brew install openjdk@17
```

## 7. Verify Installations

Run these commands to verify everything is installed correctly:
```bash
git --version
node --version
npm --version
docker --version
code --version
aws --version
python3 --version
java --version
psql --version
```

## 8. Set Up Development Workspace

1. Create a project directory:
```bash
mkdir ~/Projects
mkdir ~/Projects/ancestry-app
cd ~/Projects/ancestry-app
```

2. Initialize Git repository:
```bash
git init
```

3. Open VS Code in project directory:
```bash
code .
```

## 9. Install VS Code Extensions

Open VS Code and install these extensions:
1. Docker
2. AWS Toolkit
3. Python
4. Java Extension Pack
5. JavaScript and TypeScript
6. ESLint
7. Prettier
8. GitLens

## 10. Security Best Practices

1. Set up SSH key for GitHub:
```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```

2. Start SSH agent:
```bash
eval "$(ssh-agent -s)"
```

3. Add SSH key to agent:
```bash
ssh-add ~/.ssh/id_ed25519
```

## Troubleshooting

Common issues and solutions:

1. If Homebrew installation fails:
   - Ensure you have administrator privileges
   - Check your internet connection
   - Try running `xcode-select --install` again

2. If Docker fails to start:
   - Ensure virtualization is enabled
   - Restart your MacBook
   - Reinstall Docker Desktop

3. If PostgreSQL fails to start:
   - Run `brew services restart postgresql@14`
   - Check logs with `brew services list`

## Next Steps

After completing this setup:
1. Verify all tools are working correctly using the verification commands
2. Set up your AWS account if you haven't already
3. Clone the project repository (will be created in later steps)
4. Review basic Git commands and workflows
5. Familiarize yourself with VS Code interface and basic shortcuts

Need help with any of these steps? Please ask for clarification!


I've created a comprehensive setup guide for your development environment. This guide:
1. Breaks down the setup into logical steps
2. Includes all necessary tools for development
3. Provides verification steps
4. Includes troubleshooting information
5. Sets you up for the next phases of development

Would you like me to:
1. Explain any specific step in more detail?
2. Show you how to verify that everything is working correctly?
3. Move on to setting up the AWS infrastructure?
4. Create a basic project structure?

Let me know what would be most helpful to focus on next!
