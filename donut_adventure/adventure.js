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
    console.log(this.name + ' : ' + this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
  }
  announceHealthInitial(){
    console.log(this.name + ' : My health is a whopping ' + this.health + '!')
  }
  announceHealthAfter(){
    console.log(this.name + ' : Yikes! My health is ' + this.health + '!')
  }
  fight(enemy){
    console.log(this.name + ' : i\'m ready to rumble');
    console.log(this.name + ' : take ' + this.weapons.sprinkleSpray + ' hitpoints!');
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
    console.log(this.name + ' : ' + this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
  }
  announceHealthInitial(){
    console.log(this.name + ' : My health is a solid ' + this.health + '!')
  }
  announceHealthAfter(){
    console.log(this.name + ' : Oh no! My health is ' + this.health + '!')
  }
  fight(enemy){
    console.log(this.name + ' : i\'m gonna flatten you like a slice of pepperoni!');
    console.log(this.name + ' : take ' + this.weapons.pepperoniStars + ' hitpoints!');
    enemy.health -= this.weapons.pepperoniStars;
    console.log(enemy.name + ' got hit by pepperoniStars! His health is now ' + enemy.health + ' .');
  }

}

const dougie = new Hero('Dougie the Donut');
const pizzaRat = new Enemy('Pizza Rat');
dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealthInitial();
pizzaRat.announceHealthInitial();
pizzaRat.fight(dougie);
dougie.fight(pizzaRat);
pizzaRat.announceHealthAfter();
dougie.announceHealthAfter();
