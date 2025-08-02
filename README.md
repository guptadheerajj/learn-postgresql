# Express Template

A clean and well-configured Express.js template with ESLint and Prettier for rapid development.

## Features

- 🚀 **Express.js** - Fast, unopinionated web framework
- 🔍 **ESLint** - Code linting with flat config format
- 💅 **Prettier** - Code formatting
- 📝 **Multi-format support** - JavaScript, JSON, Markdown, CSS
- 🛠️ **Development tools** - Hot reload with `--watch` flag
- 📦 **Template ready** - Pre-configured for quick project starts

## Quick Start

1. Clone or download this template
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint and fix issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted
- `npm run lint-and-format` - Run linting and formatting together

## Configuration

### ESLint Configuration (`eslint.config.mjs`)

- Uses ESLint flat config format
- Supports JavaScript, JSON, Markdown, and CSS files
- Integrated with Prettier to avoid conflicts
- Global ignore patterns for common files/directories

### Prettier Configuration (`.prettierrc`)

```json
{
	"semi": true,
	"singleQuote": true,
	"tabWidth": 2,
	"useTabs": true,
	"trailingComma": "all",
	"printWidth": 80,
	"bracketSpacing": true,
	"arrowParens": "avoid"
}
```

### File Structure

```
├── app.js              # Main application file
├── package.json        # Dependencies and scripts
├── eslint.config.mjs   # ESLint configuration
├── .prettierrc         # Prettier configuration
├── .prettierignore     # Files to ignore for formatting
└── README.md           # This file
```

## Development Workflow

1. **Code** - Write your Express.js application
2. **Lint** - Use `npm run lint` to check for issues
3. **Format** - Use `npm run format` to format code
4. **Fix** - Use `npm run lint-and-format` for both operations

## Adding Dependencies

### Production Dependencies

```bash
npm install <package-name>
```

### Development Dependencies

```bash
npm install -D <package-name>
```

## API Routes

The template includes basic routes:

- `GET /` - Welcome message with timestamp
- `GET /health` - Health check endpoint

## Extending the Template

This template is designed to be easily extended:

1. Add new routes in `app.js`
2. Create middleware in separate files
3. Add environment variables for configuration
4. Include database connections as needed

## Code Quality

This template enforces code quality through:

- **ESLint** - Catches potential bugs and enforces coding standards
- **Prettier** - Ensures consistent code formatting
- **Git hooks** - Can be added with husky for pre-commit checks

## License

This template is free to use for any purpose.

## Contributing

Feel free to submit issues and enhancement requests!
