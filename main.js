// mixed messages random generator

// random generated character names of Mass Effect
// create object squadAndEnemy with methods
const randomSquadMemberAndEnemy = () => {
  const characterNames = [
    "Commander Shepard",
    "Jacob Taylor",
    "Kaidan Alenko",
    "Ashley Williams",
    "Garrus Vakarian",
    "Urdnot Wrex",
    "Tali'Zorah",
    "Liara T'Soni",
    "Miranda Lawson",
    "EDI",
    "Mordin Solus",
    "Jack",
    "Grunt",
    "Thane Krios",
    "Samara",
    "Morinth",
    "Legion",
    "Zaeed Massani",
    "Kasumi Goto",
    "James Vega",
    "Javik",
  ];

  const randomEnemy = [
    "The Reapers",
    "Saren Arterius",
    "Matriarch Benezia",
    "Donnel Udina",
    "The Thorian",
    "Cerberus",
    "Kai Leng",
    "Oleg Petrovsky",
    "The Collectors",
    "The Shadow Broker",
    "Dr. Amanda Kenson",
    "Maya Brooks",
    "The Kett",
  ];

  const squadAndEnemy = {
    firstSquadMember: "",
    secondSquadMember: "",
    enemy: "",
    sentence: "",

    create() {
      this.firstSquadMember =
        characterNames[randomNumber(characterNames.length)];
      this.secondSquadMember =
        characterNames[randomNumber(characterNames.length)];
      this.enemy = randomEnemy[randomNumber(randomEnemy.length)];
      while (this.firstSquadMember === this.secondSquadMember) {
        this.secondSquadMember =
          characterNames[randomNumber(characterNames.length)];
      }
    },

    setSentence() {
      const random = Math.floor(Math.random() * 2);
      switch(random) {
        case 0:
          this.sentence = `Your squad members to fight against \'${this.enemy}\' will be \'${this.firstSquadMember}\' and \'${this.secondSquadMember}\'.`;
          break;
        case 1:
          this.sentence = `Your squad members \'${this.firstSquadMember}\' and \'${this.secondSquadMember}\' are scared of our enemy \'${this.enemy}\'. Their health and damage is reduce by 50%.`;
          break;
        case 2:
          this.sentence = `Your squad members \'${this.firstSquadMember}\' and \'${this.secondSquadMember}\' aren\'t scared of our enemy \'${this.enemy}\'. Their health and damage is increased by 25%.`;
          break;
        default:
          this.sentence = `Something is not quite right.`;
          break;
      }
    },
  };

  squadAndEnemy.create();
  squadAndEnemy.setSentence();

  return squadAndEnemy;
};

// generate random number interval <1,number>
const randomNumber = (number) => {
  if (typeof number !== "number") {
    console.log("Bad input argument!");
    return;
  }

  if (number < 1) {
    console.log("Input number cannot be less then 1");
    return;
  }

  let randomNumber = Math.floor(Math.random() * (number - 1));
  return randomNumber;
};


console.log(randomSquadMemberAndEnemy().sentence);