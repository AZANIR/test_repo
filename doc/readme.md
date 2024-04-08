# Installation instruction fo monorepo


1. Clone the repository and you should know are you have acces to the repository or not [migration-data](https://github.com/ballerine-io/wf-data-migration). If you have access to the repository, you can clone the repository using the following command. If you don't have access to the repository, you can clone the repository using the following command.
```bash
git clone https://github.com/ballerine-io/ballerine.git --recursive
```

2. Run `pnpm install` to install all the dependencies
3. Run `pnpm monorepo:init` to init the monorepo
4. to run docker DB 
```bash
npm run docker:db --prefix services/workflows-service
```
5. To update DB schema run 
```bash
npm run db:reset:dev:with-data --prefix services/workflows-service
```
5. Run `pnpm dev` ithe folders as **services/workflows-service** and **apps/backoffice** and **apps/kyb-app** will be started or run 
```bash
npm pkg set scripts.testrun="concurrently \"nx run @ballerine/workflows-service:dev\" \"wait-on http://localhost:3000/api/v1/_health/ready && nx run-many --target=dev --projects=@ballerine/kyb-app,@ballerine/backoffice-v2\""

pnpm run testrun
```

After this you should be ready to go to start running flows using the Postman collection.
