//top news
var h4 = document.createElement("h4")
h4.innerText = "TOP NEWS"
document.querySelector(".top_news").append(h4)


 
//   one sub div created
var arr1 =[]
var top_news1 = {
heading: "‘Well-hatched conspiracy’: Court orders framing of charges against Tahir Hussain, 5 others in a Delhi riots case",
date_time:"Updated on May 06 03:52 PM IST"
};
arr1.push(top_news1)

var arr2 = []
var top_news2={
heading:"‘Kejriwal's dictatorship': BJP's Kailash Vijayvargiya on Tajinder Bagga's arrest",
date_time:"Updated on May 06 04:02 PM IST"
};
arr2.push(top_news2)

var arr3 = []
var top_news3={
heading:"After Ajay Devgn-Kiccha Sudeep spat, Jaaved Jaaferi says: 'Even I thought that Hindi is national language'",
date_time:"Published on May 06, 6.53 PM IST"
};
arr3.push(top_news3)

var arr4 = []
var top_news4={
heading:"Watch: Ben Stokes goes 6, 6, 6, 6, 6, 4 in an over en route to 64-ball century, creates world record in County cricket",
date_time:"Published on May 06, 12.00 PM IST"
};
arr4.push(top_news4)



arr1.forEach(function (ele){
var top_news_subdiv1 = document.createElement("div")
top_news_subdiv1.setAttribute("class","maindiv_shadow")

var h3 = document.createElement("h3")
h3.innerText = "DELHI NEWS"
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
h3.innerText = "BOLLYWOOD NEWS"
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
h3.innerText = "CRICKET NEWS"
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

      //------=======-------======------
      //TRENDING TOPICS
var div = document.createElement("div")
div.setAttribute("class","div_shadow")
div.innerText = "TRENDING TOPICS"
div.style.textAlign = "center"
div.style.marginTop = "60px"
div.style.fontWeight = "bold"

var round_box = document.createElement("div")
round_box.setAttribute("class","round_box")


var p1 = document.createElement("p")
p1.innerText = "India Covid Cases"
round_box.append(p1)

var round_box = document.createElement("div")
round_box.setAttribute("class","round_box")
var p2 = document.createElement("p")
p2.innerText = "Happy Mothers Day"
round_box.append(p2)

var round_box1 = document.createElement("div")
round_box1.setAttribute("class","round_box")
var p3 = document.createElement("p")
p3.innerText = "Russia Ukraine war live"
round_box1.append(p3)

var round_box2 = document.createElement("div")
round_box2.setAttribute("class","round_box")
var p4 = document.createElement("p")
p4.innerText = "Horoscope Today"
round_box2.append(p4)

var round_box3 = document.createElement("div")
round_box3.setAttribute("class","round_box")
var p5 = document.createElement("p")
p5.innerText = "Masai School"
round_box3.append(p5)

var round_box4 = document.createElement("div")
round_box4.setAttribute("class","round_box")
var p6 = document.createElement("p")
p6.innerText = "Mother's day Receipe"
round_box4.append(p6)

var round_box5 = document.createElement("div")
round_box5.setAttribute("class","round_box")
var p7 = document.createElement("p")
p7.innerText = "IPL 2022 Point Table"
round_box5.append(p7)

div.append(round_box,round_box1,round_box2,round_box3,round_box4,round_box5)
document.querySelector(".top_news").append(div)







  
   
//   one sub div created

//latest news end

//DONT miss
var h4 = document.createElement("h4")
h4.innerText = "DONT MISS"
document.querySelector(".top_news").append(h4)


 
//   one sub div created
var arr1 =[]
var top_news1 = {
heading: "Shah Rukh Khan hosts diplomats at Mannat, Canada's consul general says she 'understands King Khan's charm now'",
date_time:"Published on May 06, 2.23 PM IST"
};
arr1.push(top_news1)

var arr2 = []
var top_news2={
heading:"Dance Deewane Junior: Ranveer Singh and Nora Fatehi groove to Garmi, fans say 'aag laga di'.",
date_time:"Published on May 06, 4.05 PM IST"
};
arr2.push(top_news2)

var arr3 = []
var top_news3={
heading:"Sachin could've got those 6 runs. Don't think 2 overs would've made a difference': Yuvraj on Multan declaration",
date_time:"Published on May 06, 6.53 PM IST"
};
arr3.push(top_news3)

var arr4 = []
var top_news4={
heading:"Heatwave: Doctors reveal all you need to know about its causes, symptoms, prevention tips and how it can lead to stroke",
date_time:"Published on May 06, 12.00 PM IST"
};
arr4.push(top_news4)



arr1.forEach(function (ele){
var top_news_subdiv1 = document.createElement("div")
top_news_subdiv1.setAttribute("class","maindiv_shadow")

var h3 = document.createElement("h3")
h3.innerText = "BOLLYWOOD NEWS" 
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
h3.innerText = "T.V"
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
h3.innerText = "CRICKET NEWS"
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
h3.innerText = "HEALTH NEWS"
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



