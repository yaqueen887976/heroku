var searchDict  = {
    //side
    FriedRice: [5.99,"image/side1.PNG"],
    ChowMein: [5.99,"image/side2.PNG"],
    WhiteRice: [5.99,"image/side3.PNG"],
    BrownRice: [5.99,"image/side4.PNG"],

    //shrimp
    WokFriedShrimp: [9.99,"image/shrimp1.PNG"],
    HoneyWalnutShrimp: [9.99,"image/shrimp2.PNG"],

    //beef
    BeijingBeef: [8.99,"image/beef1.PNG"],
    BroccoliBeef: [8.99,"image/beef2.PNG"],
    ShanghaiAngusBeef: [8.99,"image/beef3.PNG"],

    //chicken
    OrangeChicken: [8.99,"image/chicken1.PNG"],
    StringBeanChickenBreast: [8.99,"image/chicken2.PNG"],
    SweetFireChickenBreast: [8.99,"image/chicken3.PNG"],
    KungPaoChicken: [8.99,"image/chicken4.PNG"],
    MushroomChicken: [8.99,"image/chicken5.PNG"],
    BlackPepperChicken: [8.99,"image/chicken6.PNG"],
    GrilledTeriyakiChicken: [8.99,"image/chicken7.PNG"],


    //appetizers
    ChickenPotsticker: [6.99,"image/appetizer1.PNG"],
    CreamCheeseRangoon: [6.99,"image/appetizer2.PNG"],
    ChickenEggRoll: [6.99,"image/appetizer3.PNG"],
    VegetableSpringRoll: [6.99,"image/appetizer4.PNG"],

    //drink
    Sprite: [2.49,"image/drink1.PNG"],
    Crush: [2.49,"image/drink2.PNG"],
    DietCoke: [2.49,"image/drink3.PNG"],
    CocaCola: [2.49,"image/drink4.PNG"],
    Fanta: [2.49,"image/drink5.PNG"],
    DrPepper: [2.49,"image/drink6.PNG"]
};


function createSide(){
  var food = document.getElementById('item');
  food.innerHTML="";
  var table = document.getElementById('myTable');
  table.innerHTML="";
  var side1 = [searchDict["FriedRice"][1],"FriedRice"];
  var side2 = [searchDict["ChowMein"][1],"ChowMein"];
  var side3 = [searchDict["WhiteRice"][1],"WhiteRice"];
  var side4 = [searchDict["BrownRice"][1],"BrownRice"];

  foodDiv(side1[0],side1[1]);
  foodDiv(side2[0],side2[1]);
  foodDiv(side3[0],side3[1]);
  foodDiv(side4[0],side4[1]);
}


function createShrimp(){
  var food = document.getElementById('item');
  food.innerHTML="";
  var table = document.getElementById('myTable');
  table.innerHTML="";

  var shirmp1 = [searchDict["WokFriedShrimp"][1],"WokFriedShrimp"];
  var shirmp2 = [searchDict["HoneyWalnutShrimp"][1],"HoneyWalnutShrimp"];

  foodDiv(shirmp1[0],shirmp1[1]);
  foodDiv(shirmp2[0],shirmp2[1]);
}

function createBeef(){
  var food = document.getElementById('item');
  food.innerHTML="";
  var table = document.getElementById('myTable');
  table.innerHTML="";

  var beef1 = [searchDict["BeijingBeef"][1],"BeijingBeef"];
  var beef2 = [searchDict["BroccoliBeef"][1],"BroccoliBeef"];
  var beef3 = [searchDict["ShanghaiAngusBeef"][1],"ShanghaiAngusBeef"];


  foodDiv(beef1[0],beef1[1]);
  foodDiv(beef2[0],beef2[1]);
  foodDiv(beef3[0],beef3[1]);
}

function createChicken(){
  var food = document.getElementById('item');
  food.innerHTML="";
  var table = document.getElementById('myTable');
  table.innerHTML="";

  var chicken1 = [searchDict["OrangeChicken"][1],"OrangeChicken"];
  var chicken2 = [searchDict["StringBeanChickenBreast"][1],"StringBeanChickenBreast"];
  var chicken3 = [searchDict["SweetFireChickenBreast"][1],"SweetFireChickenBreast"];
  var chicken4 = [searchDict["KungPaoChicken"][1],"KungPaoChicken"];
  var chicken5 = [searchDict["MushroomChicken"][1],"MushroomChicken"];
  var chicken6 = [searchDict["BlackPepperChicken"][1],"BlackPepperChicken"];
  var chicken7 = [searchDict["GrilledTeriyakiChicken"][1],"GrilledTeriyakiChicken"];



  foodDiv(chicken1[0],chicken1[1]);
  foodDiv(chicken2[0],chicken2[1]);
  foodDiv(chicken3[0],chicken3[1]);
  foodDiv(chicken4[0],chicken4[1]);
  foodDiv(chicken5[0],chicken5[1]);
  foodDiv(chicken6[0],chicken6[1]);
  foodDiv(chicken7[0],chicken7[1]);
}


function createAppetizers(){
  var food = document.getElementById('item');
  food.innerHTML="";
  var table = document.getElementById('myTable');
  table.innerHTML="";

  var appetizer1 = [searchDict["ChickenPotsticker"][1],"ChickenPotsticker"];
  var appetizer2 = [searchDict["CreamCheeseRangoon"][1],"CreamCheeseRangoon"];
  var appetizer3 = [searchDict["ChickenEggRoll"][1],"ChickenEggRoll"];
  var appetizer4 = [searchDict["VegetableSpringRoll"][1],"VegetableSpringRoll"];


  foodDiv(appetizer1[0],appetizer1[1]);
  foodDiv(appetizer2[0],appetizer2[1]);
  foodDiv(appetizer3[0],appetizer3[1]);
  foodDiv(appetizer4[0],appetizer4[1]);
}


function createDrink(){
  var food = document.getElementById('item');
  food.innerHTML="";
  var table = document.getElementById('myTable');
  table.innerHTML="";

  var drink1 = [searchDict["Sprite"][1],"Sprite"];
  var drink2 = [searchDict["Crush"][1],"Crush"];
  var drink3 = [searchDict["DietCoke"][1],"DietCoke"];
  var drink4 = [searchDict["CocaCola"][1],"CocaCola"];
  var drink5 = [searchDict["Fanta"][1],"Fanta"];
  var drink6 = [searchDict["DrPepper"][1],"DrPepper"];


  foodDiv(drink1[0],drink1[1]);
  foodDiv(drink2[0],drink2[1]);
  foodDiv(drink3[0],drink3[1]);
  foodDiv(drink4[0],drink4[1]);
  foodDiv(drink5[0],drink5[1]);
  foodDiv(drink6[0],drink6[1]);
}

function foodDiv(imageLink,foodName){
  var item = document.getElementById("item");
  var food = document.createElement("div");
  var countDiv = document.getElementById("countItems");

  food.innerHTML = "<div class = 'item'><img src = "+imageLink+"><br>"+foodName.split(/(?=[A-Z])/).join(" ")+": $"+searchDict[foodName][0]+"<br><br><button class='add' onclick=addItem('"+foodName+"');countItems();>Add</button><br><button class='delete' onclick=deleteItem('"+foodName+"');countItems();>Delete</button></div>";

  item.appendChild(food);
  console.log(food);
  console.log(foodName);
}

var orderlist = {};
var total = 0;
var countFood = 0;

function countItems(){
  countFood = 0;

  var countDiv = document.getElementById("countItems");
  for(key in orderlist){
    countFood+=orderlist[key];
  }
  countDiv.innerHTML = "#items: "+countFood;

}



function addItem(item) {

  if (orderlist[item] >=1){
    orderlist[item]+=1;
  }else{
    orderlist[item]=1;
  }
  console.log(item);
  console.log(orderlist);
}

function deleteItem(item){
  if (orderlist[item] >=1){
    orderlist[item]-=1;
  }else{
    delete orderlist[item];
    //orderlist[item]=0;
  }
  console.log(item);
  console.log(orderlist);
}

function myOrderedList(){
  var setRows = 1;
  var types = 1;
  document.getElementById("myTable").innerHTML = "";
  document.getElementById("item").innerHTML = "";
  myTable = document.getElementById("myTable");
  firstRow = myTable.insertRow(0);
  cell1 = firstRow.insertCell(0);
  cell2 = firstRow.insertCell(1);
  cell3 = firstRow.insertCell(2);
  cell4 = firstRow.insertCell(3);
  cell1.innerHTML = "#";
  cell2.innerHTML = "Name:";
  cell3.innerHTML = "Amount:";
  cell4.innerHTML = "Price:";


  var food = document.createElement("div");
  for (var key in orderlist){
    rows = myTable.insertRow(setRows);
    cell1 = rows.insertCell(0);
    cell2 = rows.insertCell(1);
    cell3 = rows.insertCell(2);
    cell4 = rows.insertCell(3);
    cell1.innerHTML = types;
    cell2.innerHTML = key.split(/(?=[A-Z])/).join(" ");
    cell3.innerHTML = "<span><button class='addright' onclick=addItem('"+key+"');countItems();myOrderedList();>+</button>"+orderlist[key]+" <span><button class='addleft' onclick=deleteItem('"+key+"');countItems();myOrderedList()>-</button> </span>";
    cell4.innerHTML = "$" + searchDict[key][0];
    setRows+=1;
    types +=1;
  }


  // var totalDiv = document.createElement("div");
  // totalDiv.setAttribute("class", "total");
  var content = document.getElementById("content");
  var total = getTotal();
  total = getTotal().toFixed(2);
  content.innerHTML = "<p>Total: $"+total+"</p>" + "<button id='checkOut' onclick=checkOut();>Check Out</button>";
  
  // content.appendChild(totalDiv);
  // myTable.appendChild(totalDiv);
}





function checkOut(){
  var contents = document.getElementById("information");
  contents.innerHTML = "";
  var cardTypes = document.createElement("div");
  cardTypes.setAttribute("class", "checkout");
  cardTypes.innerHTML = "Processing...<br> <button class='card' onclick=getReceipt();>Credit</button> <button class='card' onclick=getReceipt();>Debit</button>";
  contents.appendChild(cardTypes);
}

function getReceipt(){
  var contents = document.getElementById("information");
  contents.innerHTML = ""
  var receipt = document.createElement("div");
  receipt.setAttribute("class", "receipt");
  receipt.innerHTML = "<p class='good'>Sucessful!</p><p>Do you need a recript?</p><form action = 'begin.html'><button class='receiptCheck'>Yes</button> <button class='receiptCheck'>No</button></form>";
  contents.appendChild(receipt);
}

function getTotal(){
  total=0;
  for (var key in orderlist){
    count = orderlist[key];
    total+=searchDict[key][0]*count;
    console.log(count);
    console.log()
  }
  return total;
}

function getSingleAmount(foodName){
  return orderlist[foodName];
}


function searchFood(){
  var food = document.getElementById('item');
  food.innerHTML="";
  var table = document.getElementById('myTable');
  table.innerHTML="";


  var inputT = document.getElementById("searchBox");
  var inputText = inputT.value;
  console.log(inputText);

  var check = [];
  for (key in searchDict){
    if(key.split(/(?=[A-Z])/).join(" ").toLowerCase().indexOf(inputText)>-1){
      console.log(key);
      check.push(key);
    }  
  }
  console.log(check);
  if(check.length == 0){
      inputT.value= "";
      alert('Oop! the "' + inputText + '" is not in our menu. Please talks to staff for help. Tips: please check your input:)');
    }else{
      for(var i=0; i<check.length; i++){
        foodDiv(searchDict[check[i]][1], check[i]);
      }
    }
}
