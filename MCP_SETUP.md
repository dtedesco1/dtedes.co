# MCP Setup for dtedes.co

This document outlines the Model Context Protocol (MCP) servers recommended for this Next.js MDX project.

## Project-Specific MCP Installation

To install MCPs specifically for this project (not globally), use the `-s project` flag:

```bash
# Essential MCPs for MDX development
claude mcp add context7 -s project -- npx -y @upstash/context7-mcp@latest
claude mcp add filesystem -s project -- npx -y @modelcontextprotocol/server-filesystem@latest

# Recommended for development workflow
claude mcp add github -s project -- npx -y @modelcontextprotocol/server-github@latest

# Highly recommended for visual debugging
claude mcp add playwright -s project -- npx -y @playwright/mcp@latest
```

## Recommended MCPs for This Project

### 1. Context7 MCP (Essential)
- **Purpose**: Real-time, version-specific documentation
- **Benefits**: Current Next.js 15, MDX, Tailwind CSS documentation
- **Usage**: Add "use context7" to your prompts
- **Installation**: 
  ```bash
  claude mcp add context7 -s project -- npx -y @upstash/context7-mcp@latest
  ```

### 2. File System MCP (Essential)
- **Purpose**: Read, write, and manage local files
- **Benefits**: Perfect for MDX content management
- **Use Cases**: Creating new posts, organizing content, file operations
- **Installation**:
  ```bash
  claude mcp add filesystem -s project -- npx -y @modelcontextprotocol/server-filesystem@latest
  ```

### 3. GitHub MCP (Recommended)
- **Purpose**: GitHub API integration
- **Benefits**: Manage PRs, issues, commits from Claude
- **Use Cases**: Repository management, code reviews, issue tracking
- **Installation**:
  ```bash
  claude mcp add github -s project -- npx -y @modelcontextprotocol/server-github@latest
  ```

### 4. Sequential Thinking MCP (Optional)
- **Purpose**: Break down complex tasks
- **Benefits**: Better planning for content architecture
- **Use Cases**: Content strategy, site structure planning

### 5. Playwright MCP (Highly Recommended for Debugging)
- **Purpose**: Cross-browser automation and visual debugging
- **Benefits**: See your MDX site as users do, debug layout issues, test responsiveness
- **Use Cases**: Visual debugging, E2E testing, screenshot capture, responsive design testing
- **Installation**:
  ```bash
  claude mcp add playwright -s project -- npx -y @playwright/mcp@latest
  ```
- **Alternative (Execute Automation version)**:
  ```bash
  claude mcp add playwright-ea -s project -- npx -y @executeautomation/playwright-mcp-server
  ```

### 6. Puppeteer MCP (Alternative to Playwright)
- **Purpose**: Chrome-focused browser automation
- **Benefits**: Lighter weight, Chrome-specific testing
- **Use Cases**: Basic screenshot capture, simple automation
- **Installation**:
  ```bash
  claude mcp add puppeteer -s project -- npx -y puppeteer-mcp-server
  ```

## Project Configuration

After installation, MCPs will be configured in `.mcp.json` in the project root. This file can be committed to version control for team collaboration.

## Usage Examples

### With Context7:
```
use context7

Help me implement a new MDX component using the latest Next.js 15 patterns
```

### With File System MCP:
```
Create a new blog post about "Getting Started with MCPs" in the going-deep folder
```

### With GitHub MCP:
```
Check the latest issues in this repository and create a PR for the new MCP setup
```

### With Playwright MCP for Visual Debugging:
```
Use playwright mcp to open my development site at localhost:3000 and take a screenshot of the homepage

Navigate to the /web page and check if all the project thumbnails are loading correctly

Test the responsive design by resizing to mobile viewport and capture screenshots
```

### Advanced Debugging Workflows:
```
Start the dev server, then use playwright to:
1. Navigate to localhost:3000
2. Take a screenshot of the current homepage
3. Click through to each content section
4. Verify all MDX components render correctly
5. Test dark/light mode switching
```

## Security Note

Project-scoped MCPs require user approval before use for security. You can reset approval choices with:

```bash
claude mcp reset-project-choices
```

## Team Collaboration

The `.mcp.json` file ensures all team members have access to the same MCP tools when working on this project.