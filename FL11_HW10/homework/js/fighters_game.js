const militant1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const militant2 = new Fighter({name: 'Jim', damage: 40, hp: 150, agility: 45});
function Fighter(object) {
    this.getName = function() {
        return object.name;
    };
    this.getDamage = function() {
        return object.damage;
    };
    this.getAgility = function() {
        return object.agility;
    };
    this.getHealth = function() {
      return object.hp;
    };
    object.loss = 0;
    object.win = 0;
    this.logCombatHistory = function() {
        console.log('Name: ' +this.getName()+ ', Wins: '+ object.win +', Losses:' +object.loss);
    };
    this.heal = function(addHealth) {
        object.hp += addHealth;
    };
    this.dealDamage = function(damaging) {
        const dead = 0;
        object.hp = object.hp - damaging;
        if (object.hp <= dead) {
            object.hp = 0
        }
    };
    this.attack = function(fighter) {
        const min = 0;
        const max = 100;
        const numb = 1;
        let checking = Math.floor(Math.random() * (max - min + numb)) + min;
        if (checking > fighter.getAgility()) {
            console.log(this.getName()+ ' make '+ this.getDamage() + ' damage to ' + fighter.getName());
            fighter.dealDamage(this.getDamage());
        } else {
            console.log(this.getName() + ' attack missed');
        }
    };

    this.addWin = function() {
        return object.win++;
    };
    this.addLoss = function() {
        return object.loss++;
    }
}
function battle(militant1, militant2) {
    const dead = 0;
    if (militant1.getHealth() === dead) {
        console.log(militant1.getName() +' is dead and can\'t fight.');
    } else {
        if (militant2.getHealth() === dead) {
            console.log(militant2.getName() +' is dead and can\'t fight.');
        }
    }
    let notDead = true;
    start: while (notDead) {
        militant1.attack(militant2);
        if (militant2.getHealth()!== dead) {
            militant2.attack(militant1);
            if (militant1.getHealth()!== dead) {
                continue start;
            } else {
                militant1.addLoss();
                militant2.addWin();
                notDead = false;
            }
        } else {
            militant2.addLoss();
            militant1.addWin();
            notDead = false;
        }
    }
}
battle(militant1,militant2);