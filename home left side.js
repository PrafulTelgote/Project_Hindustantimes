
  var h4 = document.createElement("h4")
  h4.innerText = "LATEST NEWS"
  document.querySelector(".latest_news").append(h4)

  
   
//   one sub div created
var arr1 =[]
var latest_news1 = {
  heading: "SC refuses to stay Jharkhand panchayat polls, junks petition",
  date_time:"Published on May 05, 2.23 PM IST"
};
arr1.push(latest_news1)

var arr2 = []
var latest_news2={
  heading:"Why is the West wooing New Delhi?",
  date_time:"Published on May 04, 3.03 PM IST"
};
arr2.push(latest_news2)

var arr3 = []
var latest_news3={
  heading:"Produce maximum power in view of increasing demand, UP govt tells private producers",
  date_time:"Published on May 04, 6.53 PM IST"
};
arr3.push(latest_news3)

var arr4 = []
var latest_news4={
  heading:"Northeast is natural gateway to South East Asia and beyond: President Kovind",
  date_time:"Published on May 05, 12.00 PM IST"
};
arr4.push(latest_news4)



arr1.forEach(function (ele){
  var latest_news_subdiv1 = document.createElement("div")
  latest_news_subdiv1.setAttribute("class","maindiv_shadow")

  var p = document.createElement("p")
  p.innerText = ele.heading
  p.setAttribute("class","latest_news_heading")

  var p1 = document.createElement("p")
  p1.innerText = ele.date_time
  p1.style.color = "#757575"

  latest_news_subdiv1.append(p,p1)
  document.querySelector(".latest_news").append(latest_news_subdiv1)
})

arr2.forEach(function (ele){
  var latest_news_subdiv2 = document.createElement("div")

  var p = document.createElement("p")
  p.innerText = ele.heading
  p.setAttribute("class","latest_news_heading")

  var p1 = document.createElement("p")
  p1.innerText = ele.date_time
  p1.style.color = "#757575"

  latest_news_subdiv2.append(p,p1)
  document.querySelector(".latest_news").append(latest_news_subdiv2)
})

arr3.forEach(function (ele){
  var latest_news_subdiv3 = document.createElement("div")

  var p = document.createElement("p")
  p.innerText = ele.heading
  p.setAttribute("class","latest_news_heading")

  var p1 = document.createElement("p")
  p1.innerText = ele.date_time
  p1.style.color = "#757575"

  latest_news_subdiv3.append(p,p1)
  document.querySelector(".latest_news").append(latest_news_subdiv3)
})

arr4.forEach(function (ele){
  var latest_news_subdiv4 = document.createElement("div")

  var p = document.createElement("p")
  p.innerText = ele.heading
  p.setAttribute("class","latest_news_heading")

  var p1 = document.createElement("p")
  p1.innerText = ele.date_time
  p1.style.color = "#757575"

  var see_more = document.createElement("p")
  see_more.innerText = "See More >"
  see_more.setAttribute("class","see_more")
  document.querySelector(".latest_news").append(see_more)

  latest_news_subdiv4.append(p,p1,see_more)
  document.querySelector(".latest_news").append(latest_news_subdiv4)
})

//latest news end

//top news
var h4 = document.createElement("h4")
h4.innerText = "TOP NEWS"
document.querySelector(".top_news").append(h4)


 
//   one sub div created
var arr1 =[]
var top_news1 = {
heading: "Russia on its way out of Ukraine's Mariupol - US. UN chief calls war 'senseless'",
date_time:"Published on May 06, 2.23 PM IST"
};
arr1.push(top_news1)

var arr2 = []
var top_news2={
heading:"J&K delimitation panel ‘extension of BJP’: Opposition",
date_time:"Published on May 06, 6.03 PM IST"
};
arr2.push(top_news2)

var arr3 = []
var top_news3={
heading:"Pakistan’s bid to disrupt Amarnath Yatra foiled: BSF",
date_time:"Published on May 06, 6.53 PM IST"
};
arr3.push(top_news3)

var arr4 = []
var top_news4={
heading:"Breaking: Kedarnath Temple opens to pilgrims; CM Pushkar Dhami present",
date_time:"Published on May 06, 12.00 PM IST"
};
arr4.push(top_news4)



arr1.forEach(function (ele){
var top_news_subdiv1 = document.createElement("div")
top_news_subdiv1.setAttribute("class","maindiv_shadow")

var h3 = document.createElement("h3")
h3.innerText = "WORLD NEWS"
h3.style.color = "#00b1cd"

var p = document.createElement("p")
p.innerText = ele.heading
p.setAttribute("class","latest_news_heading")

var p1 = document.createElement("p")
p1.innerText = ele.date_time
p1.style.color = "#757575"

top_news_subdiv1.append(h3,p,p1)
document.querySelector(".top_news").append(top_news_subdiv1)
})
        // --------------

arr2.forEach(function (ele){
var top_news_subdiv2 = document.createElement("div")

var h3 = document.createElement("h3")
h3.innerText = "INDIA NEWS"
h3.style.color = "#00b1cd"

var p = document.createElement("p")
p.innerText = ele.heading
p.setAttribute("class","latest_news_heading")

var p1 = document.createElement("p")
p1.innerText = ele.date_time
p1.style.color = "#757575"

top_news_subdiv2.append(h3,p,p1)
document.querySelector(".top_news").append(top_news_subdiv2)
})
 
 //-----------------------
arr3.forEach(function (ele){
var top_news_subdiv3 = document.createElement("div")

var h3 = document.createElement("h3")
h3.innerText = "CHANDIGARH NEWS"
h3.style.color = "#00b1cd"

var p = document.createElement("p")
p.innerText = ele.heading
p.setAttribute("class","latest_news_heading")

var p1 = document.createElement("p")
p1.innerText = ele.date_time
p1.style.color = "#757575"

top_news_subdiv3.append(h3,p,p1)
document.querySelector(".top_news").append(top_news_subdiv3)
})
 
 //=------==---=--
arr4.forEach(function (ele){
var top_news_subdiv4 = document.createElement("div")

var h3 = document.createElement("h3")
h3.innerText = "INDIA NEWS"
h3.style.color = "#00b1cd"

var p = document.createElement("p")
p.innerText = ele.heading
p.setAttribute("class","latest_news_heading")

var p1 = document.createElement("p")
p1.innerText = ele.date_time
p1.style.color = "#757575"

var see_more = document.createElement("p")
see_more.innerText = "See More >"
see_more.setAttribute("class","see_more")
document.querySelector(".top_news").append(see_more)

top_news_subdiv4.append(h3,p,p1,see_more)
document.querySelector(".top_news").append(top_news_subdiv4)
})



