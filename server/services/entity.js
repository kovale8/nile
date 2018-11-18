const db = require('../db');

class Entity {

    constructor(table, processFn) {
        this.table = table;
        this.processFn = processFn;
    }

    getAll() {
        return db.query(`
            SELECT *
            FROM ${this.table}
        `).then(this.processFn);
    }
}

module.exports = Entity;
