// mixed messages random generator

// random generated character names of Mass Effect
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

};

// generate random number interval <1,number>
const randomNumber = (number) => {
  if(typeof number !== 'number') {
    console.log('Bad input argument!');
    return;
  }

  if( number < 1) {
    console.log('Input number cannot be less then 1');
    return;
  }


  let randomNumber = Math.floor(Math.random() * number + 1);
  return randomNumber;
}
