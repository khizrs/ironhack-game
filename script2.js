let map;

const data = [
  {id: 1, name: 'Cairo', image :'./1.jpg' , lat: 30.033333, lng: 31.233334 },
  {id: 2, name: 'Rio', image :'./2.jpg', lat: -22.908333, lng: -43.196388},
  {id: 3, name: 'Paris', image :'./3.jpg', lat: 48.864716  , lng: 2.349014}
]

var sec = 15;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
        location.reload();

    }
}

var score = 0
var currentIndex =0;
const img = document.getElementById('currentImg')
const sc = document.getElementById('score')

function selectNext(){
  currentIndex = (currentIndex +1) % data.length
  currentImg.src=data[currentIndex].image
  
}



function cityClicked(choosenCity) {
  if (currentIndex  >= 2) {
    window.alert("End of Game! Your score is " + score);
  }
  const currentCity = data[currentIndex]
  console.log(choosenCity, currentCity )
  if(currentCity != choosenCity) {
    window.alert("Wrong");
  }else { 
    score += 1
  }

  sc.innerText = score 

  if(score > 5) {
    alert(' TADA !!!')
  }
  selectNext()
  
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 3,
    // styles: [{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]}],
    // backgroundColor:"#eeeeee",
    mapId: '2793e25c75451b76'


  });



  data.forEach(city => {
    const pos = { lat:city.lat , lng: city.lng }
    const marker = new google.maps.Marker({
      position: pos,
      map: map,
      
    });
    marker.addListener('click', ()=> cityClicked(city))
    
  })

  
}


selectNext()
// const uluru = { lat: -25.344, lng: 131.036 };
// const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });

// console.log('google')