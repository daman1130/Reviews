// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Diljit Dosanjh',
    birth: 'born 1984',
    img: 'diljit.jpg',
    text: 'Daljit Singh Dosanjh, popularly known as Diljit Dosanjh, is a singer, actor, and television presenter who works in the Hindi and Punjabi film industry. He is a leading artiste in the music industry in Punjab. Dosanjh spent his life in Dosanjh Kalan before moving to Ludhiana, Punjab. He recently released his album ghost.',
  },
  {
    id: 2,
    name: 'Karan Aujla',
    birth: 'born 1997',
    img: 'Karan.jpg',
    text: 'Jaskaran Singh Aujla, known professionally as Karan Aujla, is an Indian singer, rapper and songwriter primarily associated with Punjabi music. He is known for his numerous tracks which have charted on the UK Asian chart published by the Official Charts Company, while seven have charted on the Global YouTube music chart.',
  },
  {
    id: 3,
    name: 'Sidhu moose wala',
    birth: 'born 1993',
    img: 'sidhu.jpg',
    text: 'Shubhdeep Singh Sidhu, known as Sidhu Moose Wala, was an Indian rapper and singer. He worked predominantly in Punjabi-language music and cinema. Moose Wala is generally regarded to have been one of the greatest Punjabi artists of his generation and to many, amongst the greatest Punjabi artists of all time.',
  },
  {
    id: 4,
    name: 'Shubh',
    birth: 'born 1997',
    img: 'Shubh.jpg',
    text: 'Shubhneet Singh, better known by his stage name Shubh, is an Indian rapper-singer and songwriter based in Canada associated with Punjabi music. Shubh rose to mainstream in 2021 with his single "We Rollin". In 2023, his song "Cheques" from his debut album Still Rollin peaked at number 3 on Billboard India Songs.',
  },
  {
    id: 5,
    name: 'Tegi Pannu',
    birth: 'born 1996',
    img: 'Tegi Pannu.png',
    text: 'Tegi Pannu is an Indian-Australian singer and songwriter who works fabulously in Punjabi music. He became known with his single "Into You" with Manni Sandhu. In 2019, Tegi Pannu pursued his career with Manni Sandhu releasing his single \'Into You\' followed by Fully Loaded and Schedule.',
  },
  {
    id: 6,
    name: 'Nirvair Pannu',
    birth: 'born 1999',
    img: 'nirvair.jpeg',
    text: 'Nirvair being a young singer released his first song after completing his senior secondary education. He got hit the region with his song "Bandook", which was released in 2020. The song received more than 4 Million views within a few days of releasing the songs. He has more songs like Ishq, sift and still.',
  },
  {
    id: 7,
    name: 'Amrinder Gill',
    birth: 'born 1976',
    img: 'amrinder.webp',
    text: 'Amrinder Singh Gill is a Punjabi singer, songwriter, actor and film producer. He started his singing career in 2000 with the album "Apni Jaan Ke". Gill was raised in Boorchand, Amritsar, Punjab. He has been nominated for twenty-four PTC Punjabi Film Awards, winning seven including three for Best Actor.',
  },
];

// select items
const img = document.getElementById('person-img');
const singer = document.getElementById('singer');
const birth = document.getElementById('birth');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const resetBtn = document.querySelector('.reset-btn');
const endBtn = document.querySelector('.end-btn');


// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  singer.textContent = item.name;
  birth.textContent = item.birth;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
// show random person
randomBtn.addEventListener('click', function () {

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});

// reset button
resetBtn.addEventListener('click', function () {
    currentItem = 0;
    showPerson();
})

// end button 
endBtn.addEventListener('click', function () {
  currentItem = reviews.length - 1;
  showPerson();
})