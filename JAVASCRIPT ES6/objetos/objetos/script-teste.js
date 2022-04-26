const data = {
  "filters": [
      {
          "gender": "Gênero"
      }
  ],
  "items": [
    {
      "id": 10,
      "sku": "sku-10",
      "path": "calca-social",
      "name": "Calça Social",
      "image": "",
      "price": 39.9,
      "specialPrice": 29.9,
      "filter": [
        {
          "gender": "Masculina"
        }
      ]
    },
    {
      "id": 11,
      "sku": "sku-11",
      "path": "calca-feminina",
      "name": "Calça Feminina",
      "image": "",
      "price": 24.15,
      "filter": [
          {
            "gender": "Feminina"
          }
      ]
    },
    {
      "id": 12,
      "sku": "sku-12",
      "path": "calca-la-feminina",
      "name": "Calça de Lã Feminina",
      "image": "",
      "price": 61.49,
      "filter": [
          {
            "gender": "Feminina"
          }
      ]
    },
    {
      "id": 13,
      "sku": "sku-13",
      "path": "calca-caminhada-masculina",
      "name": "Calça Caminhada Masculina",
      "image": "",
      "price": 70.0,
      "specialPrice": 58,
      "filter": [
        {
          "gender": "Masculina"
        }
      ]
    },
    {
      "id": 14,
      "sku": "sku-14",
      "path": "calca-caminhada-feminina",
      "name": "Calça Caminhada Feminina",
      "image": "",
      "price": 70.0,
      "filter": [
        {
          "gender": "Feminina"
        }
      ]
    }
  ]
}

const list = document.querySelector('ul');

data.items.forEach((item) => { 

  var filter = item.filter;
  
  console.log(filter[0].gender);

  var newLi = document.createElement('li');
  var content = `${item.id} ${item.name} ${item.price}`; 
  list.append(newLi);
  newLi.append(content);
})