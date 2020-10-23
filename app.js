// local reviews data
const reviews = [
  // {
  //   id: 1,
  //   name: "Cassie Davidson",
  //   job: "Web Developer",
  //   img:
  //     "https://images.pexels.com/photos/3771127/pexels-photo-3771127.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  //   text:
  //     "As a UX developer i was very impressed on the way the UI and UX transitioned to fluid.",
  // },
  // {
  //   id: 2,
  //   name: "James Lin",
  //   job: "Ex-partner",
  //   img:
  //     "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  //   text:
  //     "I hate that i didnt thought of this first now ill have to take a back sit and watch your success, lol",
  // },
  // {
  //   id: 3,
  //   name: "Earl Milford",
  //   job: "Former Boss",
  //   img:
  //     "https://images.pexels.com/photos/3831187/pexels-photo-3831187.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  //   text:
  //     "Very user friendly even for the new user or not tech savvy",
  // },
    {
    id: 1,
    name: "Samuel L. Jaxton",
    job: "UFC Champion!!!",
    img:
      "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text:
      "... really? im a pug! i cant speak!!! ps; I dont host 'DOG FIGHTING' at my basement anymmore! stop emailing me!!!!",
  },
    {
    id: 2,
    name: "Baby Chloe",
    job: "infant",
    img:
      "https://images.pexels.com/photos/789786/pexels-photo-789786.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text:
      "'love the product for so long glad to have to opportunity to be a part of the brand!' ........ well, i cant read or write yet, so we both know that my broke ass parents wrote this. lol",
  },
  {
    id: 3,
    name: "Megan Quinn",
    job: "Vegan/Dumdum",
    img:
      "https://images.pexels.com/photos/3629537/pexels-photo-3629537.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text:
      "'yyyaaahhh! im vegan, cos i care about the environment, im always tired though... probably the malnutrition...... but i chastised everyone i know for not being one, so cant stop now... im f#$ked!!!",
  },
  {
    id: 4,
    name: "Almows Ded",
    job: "Homeless Dude",
    img:
      "https://images.pexels.com/photos/3831136/pexels-photo-3831136.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text:
      "just need the money dudes, they gave me a suit and VR for $10 pic",
  },
  {
    id: 5,
    name: "Big Mike",
    job: "Some Guy from the Warehouse",
    img:
      "https://images.pexels.com/photos/3932291/pexels-photo-3932291.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text:
      "well... not really sure why im here, but yeah i was paid $5 to say.  Quote: 'its vey good company from the production to distribution' end-Quote: ... so can i go now? ps: did the Homeless dude got $10?!!!! jeff? i better get my $5!",
  },  
]






// select items
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")



