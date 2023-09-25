

// Küçük Sayaçlar (Counters)
const counters = [0, 0, 0, 0];

const counterElements = document.querySelectorAll('[id^="counter"]');

function updateCounter(counterIndex) {
  counterElements[counterIndex].textContent = counters[counterIndex];
}
// azaltma
for (let i = 0; i < counters.length; i++) {
  const btn = document.getElementById(`btn${i + 1}`);
  
  btn.addEventListener('click', () => {

    if (counters[i] > 0) {
            counters[i]--;
           
          }else{
           
          }
 
    updateCounter(i);
  });

 
}
// ----2 ekeleme

function update(counterIndex) {
    counterElements[counterIndex].textContent = counters[counterIndex];
  }
  for (let i = 0; i < counters.length; i++) {
        const btnn = document.getElementById(`btnn${i + 1}`);
        
        btnn.addEventListener('click', () => {
          counters[i]++;
          update(i);
        });}
  
// Büyük Sayaç (Big Counter)
const bigCounter = document.getElementById('bigCounter');
const bigCounte = document.getElementById('bigCounte');
const bigBtn = document.getElementById('bigBtn');
const bigBt = document.getElementById('bigBt');



// ekleme
bigBtn.addEventListener('click', () => {
  for (let i = 0; i < counters.length; i++) {
    counters[i]++;
  
    update(i);
  }
  bigCounter.textContent = parseInt(bigCounter.textContent) + 1;
});

bigBt.addEventListener('click', () => {
    for (let i = 0; i < counters.length; i++) {

    // 
      if (counters[i] > 0) {
        counters[i]--;
        // counters[i].innerHTML=counters
      }  
      updateCounter(i);
    }



if (parseInt(bigCounte.textContent) > 0){
    bigCounte.textContent = parseInt(bigCounte.textContent) -1;

      }
  bigCounter.textContent = parseInt(bigCounter.textContent) -1;

  
    
  });

