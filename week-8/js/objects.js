// Objects

const person = {
    // Properties (variable that belong to this object)
    name: "Jules the Cools",
    hp: 8,
    def: 0,
    atk: 2,
    spd: 3,

// Methods (functions that belong to this object)
    attack(enemyDef) {
        const dmg = this.atk - enemyDef;
        if (dmg <= 0) {
            return 0;
        } else {
            return dmg;
        }
    },

    takeDamage(damageAmount) {
        this.hp -= damageAmount;
    },

}

const enemy = {
    name: "Slime",
    hp: 4,
    def: 3,
    atk: 1,
    spd: 1,

    attack() {
        return this.atk;
    },

    takeDamage(damageAmount) {
        this.hp -= damageAmount;
    },
};

//Jules attacks slime

const julesDmg = person.attack(enemy.def);
console.log(julesDmg);
console.log("Slime HP:", enemy.hp);

enemy.takeDamage(julesDmg);
console.log("Slime HP:", enemy.hp);