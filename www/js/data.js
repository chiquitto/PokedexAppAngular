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
        {id: 1, identifier: 'normal', identifierAbbr: 'nor'},
        {id: 2, identifier: 'fighting', identifierAbbr: 'fig'},
        {id: 3, identifier: 'flying', identifierAbbr: 'fly'},
        {id: 4, identifier: 'poison', identifierAbbr: 'poi'},
        {id: 5, identifier: 'ground', identifierAbbr: 'gro'},
        {id: 6, identifier: 'rock', identifierAbbr: 'roc'},
        {id: 7, identifier: 'bug', identifierAbbr: 'bug'},
        {id: 8, identifier: 'ghost', identifierAbbr: 'gho'},
        {id: 9, identifier: 'steel', identifierAbbr: 'ste'},
        {id: 10, identifier: 'fire', identifierAbbr: 'fir'},
        {id: 11, identifier: 'water', identifierAbbr: 'wat'},
        {id: 12, identifier: 'grass', identifierAbbr: 'gra'},
        {id: 13, identifier: 'eletric', identifierAbbr: 'ele'},
        {id: 14, identifier: 'psychic', identifierAbbr: 'psy'},
        {id: 15, identifier: 'ice', identifierAbbr: 'ice'},
        {id: 16, identifier: 'dragon', identifierAbbr: 'dra'},
        {id: 17, identifier: 'dark', identifierAbbr: 'dar'},
        {id: 18, identifier: 'fairy', identifierAbbr: 'fai'},
        //{id: 19, identifier: 'curse', identifierAbbr: 'cur'},
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

        for (i = 1; i <= 151; i++) {
            pokemons.push(new Pokemon(i, 'Pokemon ' + i));
        }

        for (i = 1; i < types.length; i++) {
            types[i] = new Type(types[i]);
        }

        _.map(type_efficacy, function (item) {
            item.damage_factor = item.damage_factor / 100;
        });
    };

    this.calcEfficaciesInDefense = function (types) {
        var efficaciesInDefense = _.map(types[0].calcEfficacyInDefense(), function (item) {
            return {
                damage_type_id: item.damage_type_id,
                damage_factor: item.damage_factor,
            };
        });

        for (var i = 1; i < types.length; i++) {
            var tmp = types[i].calcEfficacyInDefense();

            var i2;
            for (i2 in tmp) {
                var x = _.find(efficaciesInDefense, function (item) {
                    return item.damage_type_id == this.damage_type_id;
                }, tmp[i2]);

                x.damage_factor = x.damage_factor * tmp[i2].damage_factor;
            }
        }

        /*_.map(efficaciesInDefense, function (item) {
         console.log(pokedex.getType(item.damage_type_id));
         console.log(item);
         });*/

        return efficaciesInDefense;
    };
    
    this.calcStat = function (stat, lv, base, iv, ev, nature) {
        // http://pycosites.com/pkmn/stat.js
        // Math.floor(Math.floor((((iv+(2*base[stat])+(ev/4)+100)*lvl)/100)+10)*nat);
        Math.floor(Math.floor((((iv+(2*base[stat])+(ev/4))*lvl)/100)+5)*nat)
        
        //(((82 * 2) + iv + (ev/4)) * (lv / 100)) + 5
        //(((82 * 2) + 31 + Math.floor(0/4)) * (50 / 100)) + 5
    };

    this.getMove = function (id) {
        return moves[id];
    };

    this.getMoveDamageClass = function (id) {
        return moveDamageClasses[id];
    };

    this.getMoves = function () {
        return moves;
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

    this.getTypes = function () {
        return types;
    };

    this.init();
};

var Move = function (idArg, identifierArg) {
    this.id = null;
    this.identifier = null;

    this.damageClass = null;
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

    this.getDamageClass = function () {
        if (!this.damageClass) {
            this.loadDamageClass();
        }

        console.log(this.damageClass);
        return this.damageClass;
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

    this.loadDamageClass = function () {
        this.damageClass = pokedex.getMoveDamageClass(this.damage_class_id);
    }

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
    this.evolutions = null;
    this.movesLv = null;
    this.stats = null;
    /* Types of pokemon */
    this.types = null;

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

    this.getBaseStats = function () {
        if (!this.baseStats) {
            this.loadBaseStats();
        }

        return this.baseStats;
    };

    this.getEfficaciesInDefense = function () {
        if (!this.efficaciesInDefense) {
            this.efficaciesInDefense = pokedex.calcEfficaciesInDefense(this.getTypes());
        }

        return this.efficaciesInDefense;
    };

    this.getEvolutions = function () {
        if (!this.evolutions) {
            this.loadEvolutions();
        }

        return this.evolutions;
    };

    this.getMovesLv = function () {
        if (!this.movesLv) {
            this.loadMovesLv();
        }

        return this.movesLv;
    };

    this.getTypes = function () {
        if (!this.types) {
            this.loadTypes();
        }

        return this.types;
    };

    this.loadBaseStats = function () {
        this.baseStats = new Stats();
        this.baseStats.setHp(new StatBaseHp(mt_rand(1, 51) * 5));
        this.baseStats.setAttack(new StatBaseAttack(mt_rand(1, 38) * 5));
        this.baseStats.setDefense(new StatBaseDefense(mt_rand(1, 38) * 5));
        this.baseStats.setSpcAttack(new StatBaseSpcAttack(mt_rand(1, 38) * 5));
        this.baseStats.setSpcDefense(new StatBaseSpcDefense(mt_rand(1, 38) * 5));
        this.baseStats.setSpeed(new StatBaseSpeed(mt_rand(1, 38) * 5));
    };

    this.loadEvolutions = function () {
        this.evolutions = [];

        var tmp = _.findWhere(pokemon_species, {id: this.getId()});
        tmp = _.where(pokemon_species, {evolution_chain_id: tmp.evolution_chain_id});

        this.evolutions = _.map(tmp, function (item) {
            return new PokemonEvolution(item);
        });
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
    };

    this.loadTypes = function () {
        var i2;
        this.types = [];
        for (var i = 0; i < 2; i++) {
            this.types.push(pokedex.getType(mt_rand(1, 18)));
        }
    };

    this.init();
};

var PokemonEvolution = function (pokemonEvolution) {

    //var id, identifier, generation_id, evolves_from_species_id, evolution_chain_id, color_id, shape_id, habitat_id, gender_rate, capture_rate, base_happiness, is_baby, hatch_counter, has_gender_differences, growth_rate_id, forms_switchable, order, conquest_order;

    this.id = null;
    this.evolves_from_species_id = null;
    this.evolution_chain_id = null;

    this.init = function () {
        this.setId(pokemonEvolution.id);
        this.setEvolvesFromSpeciesId(pokemonEvolution.evolves_from_species_id);
        this.setEvolutionChainId(pokemonEvolution.evolution_chain_id);
    };

    this.getEvolvesFromSpeciesId = function () {
        return this.evolves_from_species_id;
    };

    this.getEvolutionChainId = function () {
        return this.evolution_chain_id;
    };

    this.getId = function () {
        return this.id;
    };

    this.getPokemon = function () {
        return pokedex.getPokemon(this.getId())
    };

    this.setEvolvesFromSpeciesId = function (evolves_from_species_id) {
        this.evolves_from_species_id = evolves_from_species_id;
    };

    this.setEvolutionChainId = function (evolution_chain_id) {
        this.evolution_chain_id = evolution_chain_id;
    };

    this.setId = function (id) {
        this.id = id;
    };

    this.init();
};

var StatBase = function (base) {
    this.base = base;
    this.maxBase = 190;
    this.identifier = '';
    this.id = 0;

    this.getBase = function () {
        return this.base;
    };

    this.getBase100Max = function () {
        return Math.ceil(this.base / this.maxBase * 100);
    };

    this.getMaxBase = function () {
        return this.maxBase;
    };

    this.getIdentifier = function () {
        return this.identifier;
    };

    this.setBase = function (base) {
        this.base = base;
    };
};

var StatBaseHp = function () {
    StatBase.apply(this, arguments);

    this.maxBase = 255;
    this.id = 1;
    this.identifier = 'Hp';
}
// StatBaseHp.prototype = StatBase.prototype;
// StatBaseHp.prototype.constructor = StatBaseHp;

var StatBaseAttack = function () {
    StatBase.apply(this, arguments);

    this.id = 2;
    this.identifier = 'Attack';
}
// StatBaseAttack.prototype = StatBase.prototype;
// StatBaseAttack.prototype.constructor = StatBaseAttack;

var StatBaseDefense = function () {
    StatBase.apply(this, arguments);

    this.id = 3;
    this.identifier = 'Defense';
}
// StatBaseDefense.prototype = StatBase.prototype;
// StatBaseDefense.prototype.constructor = StatBaseDefense;

var StatBaseSpcAttack = function () {
    StatBase.apply(this, arguments);

    this.id = 4;
    this.identifier = 'Sp.Atk';
}
// StatBaseSpcAttack.prototype = StatBase.prototype;
// StatBaseSpcAttack.prototype.constructor = StatBaseSpcAttack;

var StatBaseSpcDefense = function () {
    StatBase.apply(this, arguments);

    this.id = 5;
    this.identifier = 'Sp.Def';
}
// StatBaseSpcDefense.prototype = StatBase.prototype;
// StatBaseSpcDefense.prototype.constructor = StatBaseSpcDefense;

var StatBaseSpeed = function () {
    StatBase.apply(this, arguments);

    this.id = 6;
    this.identifier = 'Speed';
}
// StatBaseSpeed.prototype = StatBase.prototype;
// StatBaseSpeed.prototype.constructor = StatBaseSpeed;

var Stats = function () {
    this.hp = null;
    this.attack = null;
    this.defense = null;
    this.spcAttack = null;
    this.spcDefense = null;
    this.speed = null;

    this.init = function () {

    };

    this.getHp = function () {
        return this.hp;
    };

    this.getAttack = function () {
        return this.attack;
    };

    this.getDefense = function () {
        return this.defense;
    };

    this.getSpcAttack = function () {
        return this.spcAttack;
    };

    this.getSpcDefense = function () {
        return this.spcDefense;
    };

    this.getSpeed = function () {
        return this.speed;
    };

    this.getStat = function (stat) {
        return this[stat];
    };

    this.setHp = function (hp) {
        this.hp = hp;
    };

    this.setAttack = function (attack) {
        this.attack = attack;
    };

    this.setDefense = function (defense) {
        this.defense = defense;
    };

    this.setSpcAttack = function (spcAttack) {
        this.spcAttack = spcAttack;
    };

    this.setSpcDefense = function (spcDefense) {
        this.spcDefense = spcDefense;
    };

    this.setSpeed = function (speed) {
        this.speed = speed;
    };

    this.init();
};

var Type = function (type) {
    this.id = null;
    this.identifier = null;
    this.identifierAbbr = null;
    this.immunities = null;
    this.resistances = null;
    this.weaknesses = null;

    var typeIsto = this;

    this.init = function () {
        this.id = type.id;
        this.identifier = type.identifier;
        this.identifierAbbr = type.identifierAbbr;
    };

    this.calcEfficacyInDefense = function () {
        return _.filter(type_efficacy, function (data) {
            return (data.target_type_id == typeIsto.getId());
        });
    };

    this.getId = function () {
        return this.id;
    };

    this.getIdentifier = function () {
        return this.identifier;
    };

    this.getIdentifierAbbr = function () {
        return this.identifierAbbr;
    };

    this.getImmunities = function () {
        if (!this.immunities) {
            this.loadImmunities();
        }
        return this.immunities;
    };

    this.getResistances = function () {
        if (!this.resistances) {
            this.loadResistances();
        }
        return this.resistances;
    };

    this.getWeaknesses = function () {
        if (!this.weaknesses) {
            this.loadWeaknesses();
        }
        return this.weaknesses;
    };

    this.loadImmunities = function () {
        var tmp = _.filter(type_efficacy, function (item) {
            return (item.target_type_id == typeIsto.getId())
                    && (item.damage_factor == 0)
                    ;
        });

        this.immunities = _.map(tmp, function (item) {
            return pokedex.getType(item.damage_type_id);
        });
    };

    this.loadResistances = function () {
        var tmp = _.filter(type_efficacy, function (item) {
            return (item.target_type_id == typeIsto.getId())
                    && (item.damage_factor < 1)
                    && (item.damage_factor > 0)
                    ;
        });

        this.resistances = _.map(tmp, function (item) {
            return pokedex.getType(item.damage_type_id);
        });
    };

    this.loadWeaknesses = function () {
        var tmp = _.filter(type_efficacy, function (item) {
            return (item.target_type_id == typeIsto.getId()) && (item.damage_factor > 1);
        });

        this.weaknesses = _.map(tmp, function (item) {
            return pokedex.getType(item.damage_type_id);
        });
    };

    this.init();
}

var pokedex = new Pokedex();
