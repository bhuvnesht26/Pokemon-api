<br/>

<div align="center">
	<h1>Pokemon-Api</h1>
</div>

<br/>

A REST API that, given a Pokemon name, returns its Shakespearean description.


## Setup
- Make sure you have Node.js at v10 or greater is installed on your system.
- Clone the repository in a working directory.

    ```sh
    git clone https://github.com/bhuvnesht26/pokemon-api
    ```

- Install the required dependencies using npm:

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

## API calls

- Available methods

`GET POST PUT PATCH DELETE`

For eg. 

```sh
GET localhost:3000/pokemon/bulbasaur
```

Returns

```sh
{
  "name": "bulbasaur",
  "description": "Bulbasauro, known as fushigidane in japan, is the first pokémon in nintendo and game freak's pokémon franchise's cockatrices dictonary, did doth clepe a pokédex. Designed by atsuko nishida, bulbasaur debuted in pokémon red and green as a starter pokémon."
}
```

There is a browser based API explorer to test all the endpoints. It can be accessed at `localhoat:3000/explorer`

## Docker Install

Make sure you have Docker installed on your system and added to the system PATH.
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

