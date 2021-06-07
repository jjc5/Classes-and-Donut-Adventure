class Hero {
  constructor(name, health, weapons, catchPhrases){
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10,
    }
    this.catchPhrases = ['i\'m fresher than day old pizza',
 'you can\'t count my calories'];
  }
  talkSass(){
    console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
  }
  announceHealth(){
    console.log(this.name + ' : Yikes! My health is ' + this.health + ' !')
  }
  fight(enemy){
    console.log('i\'m ready to rumble');
    console.log('take ' + this.weapons.sprinkleSpray + ' hitpoints!');
    enemy.health -= this.weapons.sprinkleSpray;
    console.log(enemy.name + ' got hit by sprinkleSpray! His health is now ' + enemy.health + ' .');
  }
}

class Enemy {
  constructor(name, health, weapons, catchPhrases){
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    }
    this.catchPhrases = ['i\'m youtube famous',
'i\'m more dangerous than an uncovered sewer'];
  }
  talkSmack(){
    console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
  }
  announceHealth(){
    console.log(this.name + ' : Oh no! My health is ' + this.health + ' !')
  }
  fight(enemy){
    console.log('i\'m gonna flatten you like a slice of pepperoni!');
    console.log('take ' + this.weapons.pepperoniStars + ' hitpoints!');
    enemy.health -= this.weapons.pepperoniStars;
    console.log(enemy.name + ' got hit by pepperoniStars! His health is now ' + enemy.health + ' .');
  }

}

const dougie = new Hero('Dougie the Donut');
const pizzaRat = new Enemy('Pizza Rat');
dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();
pizzaRat.fight(dougie);
pizzaRat.fight(dougie);
dougie.fight(pizzaRat);
pizzaRat.announceHealth();
dougie.announceHealth();
