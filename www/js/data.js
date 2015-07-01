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
    var id;
    var identifier;
    /* Types of pokemon */
    var types;

    this.init = function () {
        id = idArg;
        identifier = identifierArg;
    };

    this.getId = function () {
        return id;
    };

    this.getIdentifier = function () {
        return identifier;
    };

    this.getTypes = function () {
        if (!types) {
            var i2;
            types = [];
            for (var i = 0; i < 2; i++) {
                i2 = mt_rand(1, 18);
                types.push(pokedex.getType(i2));
            }
        }
        
        return types;
    };
    
    this.init();
};

var Type = function (idArg, identifierArg) {
    var id;
    var identifier;
    
    this.init = function () {
        id = idArg;
        identifier = identifierArg;
    };

    this.getId = function () {
        return id;
    };

    this.getIdentifier = function () {
        return identifier;
    };
}

var pokedex = new Pokedex();