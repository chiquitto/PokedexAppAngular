//console.log('=========================>window:' + JSON.stringify(window));
//console.log('=========================>OPA1:' + JSON.stringify(window.plugins.sqlDB));
console.log('=========================>OPA1:', window.plugins.sqlDB);
window.plugins.sqlDB.copy("pokemon.db", 0, function () {
    //db = $cordovaSQLite.openDB({name: "pokemon.sqlite"});
    //db = $cordovaSQLite.openDB("pokemon.sqlite");
    //db = window.sqlitePlugin.openDatabase({name: "pokemon.sqlite", location: 1});
    db = window.sqlitePlugin.openDatabase({name: "pokemon.sqlite", createFromLocation: 1});
    console.log('=========================>OK1:' + JSON.stringify(db));
}, function (error) {
    //console.error("There was an error copying the database: " + error);
    console.log('=========================> ERRO1:' + JSON.stringify(error));
    try {
        //db = $cordovaSQLite.openDB({name: "pokemon.sqlite"});
        //db = $cordovaSQLite.openDB("pokemon.sqlite");
        //db = window.sqlitePlugin.openDatabase({name: "pokemon.sqlite", location: 1});
        db = window.sqlitePlugin.openDatabase({name: "pokemon.sqlite", createFromLocation: 1});
        console.log('=========================> OK2:' + JSON.stringify(db));
    }
    catch (e) {
        console.log('=========================> ERRO2:' + JSON.stringify(e.message));
    }

});
//console.log('=========================>OPA2:' + JSON.stringify(window.plugins.sqlDB));
console.log('=========================>OPA2:');