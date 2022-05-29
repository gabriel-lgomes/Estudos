export default function initBitcoinFetch () {

} 

fetch('https://blockchain.info/ticker')
.then(response => response.json())
.then(data => {
  const div   = document.querySelector('[data-bitcoin]');
  const bitcoin = (1000 / data.BRL.sell).toFixed(4);
  div.innerText = bitcoin;
}).catch(erro => {
  console.log(Error(erro));
});
 