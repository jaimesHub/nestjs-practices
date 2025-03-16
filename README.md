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
- Commands
  ```bash
      $ npx prisma # how to use prisma cli
      $ npx prisma init # create your initial Prisma setup
      $ npx prisma db push # sync up with db
      $ npx prisma studio # Browser: http://localhost:5555/
  ```
- Summary
  1. [Create nestjs project](https://docs.nestjs.com/recipes/prisma#create-your-nestjs-project)
  2. [Setup prisma](https://docs.nestjs.com/recipes/prisma#set-up-prisma)
  3. Getting more info `Prisma CLI`: `$ npx prisma`
  4. Create your initial Prisma setup: `$ npx prisma init`
  5. [Set the DB Connection](https://docs.nestjs.com/recipes/prisma#set-the-database-connection)
     5.1. Update [schema file](./crud-prisma/prisma/schema.prisma) with `provider = "sqlite"`
     5.2. Update `.env` file: `DATABASE_URL="file:./dev.db"`
  6. Update the [schema file](./crud-prisma/prisma/schema.prisma) with models
  7. Sync up with DB: `$ npx prisma db push`
  8. Browse your data: `$ npx prisma studio`
