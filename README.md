# NESTJS Take notes

## Commands

```bash
# create a new project
nest new <project-name>

# list of Nest's commands
nest

# create module
nest g mo posts

# create controller
nest g co posts

# create service
nest g s posts
```

## Update prettier

- Update `.prettierrc` file

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "semi": false,
  "arrowParens": "always",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "printWidth": 120
}
```

- Using nest-cli to format code

```bash
npm run format
```

- Update `eslint.config.mjs` file

```json
{
    // ...,
    {
        rules: {
            ...,
            'prettier/prettier': 'off',
        },
    },
}
```

## Init Database SQLite w Prisma

- [Nest docs](https://docs.nestjs.com/recipes/prisma)
