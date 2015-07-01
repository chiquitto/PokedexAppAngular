var Pokedex = function () {
    var moveDamageClasses = [
        null,
        {id: 1, identifier: 'status'},
        {id: 2, identifier: 'physical'},
        {id: 3, identifier: 'special'},
    ];

    var moves = [];
    var pokemons = [null];

    // types of pokemons/moves
    var types = [
        null,
        {id: 1, identifier: 'normal'},
        {id: 2, identifier: 'fighting'},
        {id: 3, identifier: 'flying'},
        {id: 4, identifier: 'poison'},
        {id: 5, identifier: 'ground'},
        {id: 6, identifier: 'rock'},
        {id: 7, identifier: 'bug'},
        {id: 8, identifier: 'ghost'},
        {id: 9, identifier: 'steel'},
        {id: 10, identifier: 'fire'},
        {id: 11, identifier: 'water'},
        {id: 12, identifier: 'grass'},
        {id: 13, identifier: 'eletric'},
        {id: 14, identifier: 'psychic'},
        {id: 15, identifier: 'ice'},
        {id: 16, identifier: 'dragon'},
        {id: 17, identifier: 'dark'},
        {id: 18, identifier: 'fairy'},
    ];

    this.init = function () {
        var i;

        for (i = 1; i <= 30; i++) {
            pokemons.push(new Pokemon(i, 'Pokemon ' + i));

            moves.push({
                id: i,
                identifier: 'Move ' + i,
                type_id: mt_rand(1, 18),
                power: mt_rand(5, 24) * 5,
                accuracy: mt_rand(6, 20) * 5,
                pp: mt_rand(1, 8) * 5,
                damage_class_id: mt_rand(1, 3),
            });
        }

        for (i = 1; i < types.length; i++) {
            types[i] = new Type(types[i].id, types[i].identifier);
        }
    };

    this.getPokemon = function (id) {
        return pokemons[id];
    };

    this.getPokemons = function () {
        return pokemons;
    };

    this.getType = function (id) {
        return types[id];
    };

    this.init();
};

var Pokemon = function (idArg, identifierArg) {
    this.id = null;
    this.identifier = null;
    /* Types of pokemon */
    this.types = null;
    this.weaknesses = null;

    this.init = function () {
        this.id = idArg;
        this.identifier = identifierArg;
    };

    this.getId = function () {
        return this.id;
    };

    this.getIdentifier = function () {
        return this.identifier;
    };

    this.getTypes = function () {
        if (!this.types) {
            this.loadTypes();
        }

        return this.types;
    };

    this.getWeaknesses = function () {
        if (!this.weaknesses) {
            this.loadWeaknesses();
        }

        return this.weaknesses;
    };

    this.loadTypes = function () {
        var i2;
        this.types = [];
        for (var i = 0; i < 2; i++) {
            i2 = mt_rand(1, 18);
            this.types.push(pokedex.getType(i2));
        }
    }
    this.loadWeaknesses = function () {
        var i2;
        this.weaknesses = [];
        for (var i = 0; i < 5; i++) {
            i2 = mt_rand(1, 18);
            
            type = clone(pokedex.getType(i2));
            type.multiplier = mt_rand(1, 2) * 2;
            
            this.weaknesses.push(type);
        }
    }

    this.init();
};

var Type = function (idArg, identifierArg) {
    this.id = null;
    this.identifier = null;

    this.init = function () {
        this.id = idArg;
        this.identifier = identifierArg;
    };

    this.getId = function () {
        return this.id;
    };

    this.getIdentifier = function () {
        return this.identifier;
    };

    this.init();
}

var pokedex = new Pokedex();
