var Pokedex = function () {
    var moveDamageClasses = [
        null,
        {id: 1, identifier: 'status'},
        {id: 2, identifier: 'physical'},
        {id: 3, identifier: 'special'},
    ];

    var moves = [null];
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
        var i, tmp;

        for (i = 1; i < 51; i++) {
            tmp = new Move(i, 'Move #' + leadingZero(i, 3));
            tmp.setTypeId(mt_rand(1, types.length - 1));
            tmp.setPower(mt_rand(5, 30) * 5);
            tmp.setAccuracy(mt_rand(6, 20) * 5);
            tmp.setPp(mt_rand(1, 8) * 5);
            tmp.setDamageClassId(mt_rand(1, 3));

            moves.push(tmp);
        }

        for (i = 1; i <= 30; i++) {
            pokemons.push(new Pokemon(i, 'Pokemon ' + i));
        }

        for (i = 1; i < types.length; i++) {
            types[i] = new Type(types[i].id, types[i].identifier);
        }
    };

    this.getMove = function (id) {
        return moves[id];
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

var Move = function (idArg, identifierArg) {
    this.id = null;
    this.identifier = null;
    this.type = null;

    this.type_id = null;
    this.power = null;
    this.accuracy = null;
    this.pp = null;
    this.damage_class_id = null;

    this.init = function () {
        this.id = idArg;
        this.identifier = identifierArg;
    };

    this.getAccuracy = function () {
        return this.accuracy;
    };

    this.getDamageClassId = function () {
        return this.damage_class_id;
    };

    this.getId = function () {
        return this.id;
    };

    this.getIdentifier = function () {
        return this.identifier;
    };

    this.getPower = function () {
        return this.power;
    };

    this.getPp = function () {
        return this.pp;
    };

    this.getType = function () {
        if (!this.type) {
            this.loadType();
        }

        return this.type;
    };

    this.getTypeId = function () {
        return this.type_id;
    };

    this.loadType = function () {
        this.type = pokedex.getType(this.type_id);
    }

    this.setAccuracy = function (accuracy) {
        this.accuracy = accuracy;
    };

    this.setDamageClassId = function (damage_class_id) {
        this.damage_class_id = damage_class_id;
    };

    this.setPower = function (power) {
        this.power = power;
    };

    this.setPp = function (pp) {
        this.pp = pp;
    };

    this.setTypeId = function (typeId) {
        this.type_id = typeId;
    };

    this.init();
}

var MoveLv = function (idArg, identifierArg) {
    Move.apply(this, arguments);

    this.level = null;

    this.getLevel = function () {
        return this.level;
    };

    this.setLevel = function (level) {
        this.level = level;
    };
}

MoveLv.prototype = Move.prototype;        // Set prototype to Person's
MoveLv.prototype.constructor = MoveLv;   // Set constructor back to Robot

var Pokemon = function (idArg, identifierArg) {
    this.id = null;
    this.identifier = null;
    this.movesLv = null;
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

    this.getMovesLv = function () {
        if (!this.movesLv) {
            this.loadMovesLv();
        }

        return this.movesLv;
    }

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

    this.loadMovesLv = function () {
        var i, max, tmp, move;
        this.movesLv = [];

        max = mt_rand(5, 15);
        for (i = 0; i < max; i++) {
            tmp = pokedex.getMove(mt_rand(1, 50));

            move = new MoveLv(tmp.getId(), tmp.getIdentifier());
            move.setLevel(i * 5);
            move.setTypeId(tmp.getTypeId());
            move.setPower(tmp.getPower());
            move.setAccuracy(tmp.getAccuracy());
            move.setPp(tmp.getPp());
            move.setDamageClassId(tmp.getDamageClassId());

            this.movesLv.push(move);
        }
    }

    this.loadTypes = function () {
        var i2;
        this.types = [];
        for (var i = 0; i < 2; i++) {
            this.types.push(pokedex.getType(mt_rand(1, 18)));
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
