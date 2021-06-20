const db = firebase.firestore();

// db에서 가져오기
db.collection('product').get().then(res => {
  // DB 읽을때 권한이 필요함(규칙 if true 으로 수정)
  res.forEach(doc => {
    console.log(doc.data())
    const data = doc.data();
    appendHTML(data)
  })
})

function appendHTML(data) {
  const trade_date = data.date;
  
  console.log(trade_date)
  const html = `
    <div class="product">
      <img src="http://placehold.it/300x200" >
      <div class="info">
        <h4 class="title">${data.title}</h4>
        <p class="price">${data.price}</p>
        <p class="price">${trade_date}</p>
      </div>    
    </div>
  `

  document.getElementById('main').innerHTML += html;
}