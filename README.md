<br/>

<div align="center">
	<h1>Pokemon-Api</h1>
</div>

<br/>

A REST API that, given a Pokemon name, returns its Shakespearean description.


## Setup

- Download this source code into a working directory.

    ```sh
    git clone 

- Install the requirements dependencies using npm:

    ```sh
    npm install
    # This will install all the required packages and dependencies for using PokemonAPI
    ```

- Run the API server using the following command:

    ```sh
    npm run start
    ```

Visit [localhost:3000](localhost:3000) to see the running API!

The option to build individual portions of the database was removed in order to increase performance of the build script.

## Database

This API by default uses in-memory `db.json` file with the help of a DataSource connector called `Juggler` provided by `loopback-cli`

We can also use other Databases like `MondoDB, MySQL, CouchDB` etc.
For more information on these Data Sources and `Juggler` refer (https://loopback.io/doc/en/lb4/DataSource.html)

## Docker Setup


To run this API on docker use the following commands. This will allow you to deploy a production-like environment quickly.

```sh
docker build -t pokemon-api . 
docker run -it -p 3000:3000 pokemon-api
```

Unfortunately, unlike the `docker` command, there is no command line arguments to specify ports. If you want to change them, edit the `Dockerfile`.


Browse [localhost/explorer](http://localhost/explorer) or [localhost/pokemon/bulbasaur/](http://localhost/pokemon/bulbasaur/)



## Tests

It uses `Mocha` for acceptance tests. Currently there are five tests but you can also add more tests in the `__test__/acceptance` directory.

To run the tests run the following command:

```sh
npm run test
```

## If you face any linting errors

Run the following command to fix:

```sh
npm run lint:fix
```

