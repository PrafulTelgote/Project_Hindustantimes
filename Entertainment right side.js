//imp this is entire one section like in pic

var h4 = document.createElement("h4")
h4.innerText = "BOLLYWOOD"
h4.style.textAlign="center"
h4.style.color = "#00b1cd"
document.querySelector("#right").append(h4)


 
//   one sub div created
var arr1 =[]         //1st subdiv right big
var right_side = {
heading: "Madhuri Dixit, Raja Kumari groove to new song Made In India. ",
image:"https://images.hindustantimes.com/img/2022/05/06/550x309/madhuri__1651844843347_1651844852750.png"
};
arr1.push(right_side)

arr1.forEach(function (ele){
    var right_side_div = document.createElement("div")
    right_side_div.setAttribute("class","maindiv_shadow")

    var right_side_subdiv = document.createElement("div")
    right_side_subdiv.setAttribute("class","div_shadow")
  
    var p = document.createElement("p")
    p.innerText = ele.heading
    p.setAttribute("class","latest_news_heading")
    
  
    var img = document.createElement("img")
    img.setAttribute("src",ele.image) 
    img.setAttribute("class","right_1_big_img")
  
    right_side_subdiv.append(p,img)
    right_side_div.append(right_side_subdiv)
    document.querySelector("#right").append(right_side_div)
  })
                //--------------------
  var arr1 =[]         //2nd subdiv right big
  var right_side = {
  heading: "Mumtaz discharged from hospital, says her 'delicate Iranian skin' gave doctors a hard time",
  image:"https://images.hindustantimes.com/img/2022/05/06/550x309/mumtaz-pic_1651808618986_1651808627761.jpg"
  };
  arr1.push(right_side)
  
  arr1.forEach(function (ele){
      var right_side_div = document.createElement("div")
      right_side_div.setAttribute("class","maindiv_shadow")
  
      var right_side_subdiv = document.createElement("div")
      right_side_subdiv.setAttribute("class","div_shadow")
    
      var p = document.createElement("p")
      p.innerText = ele.heading
      p.setAttribute("class","latest_news_heading")
    
      var img = document.createElement("img")
      img.setAttribute("src",ele.image) 
      img.setAttribute("class","right_1_big_img")
    
      right_side_subdiv.append(p,img)
      right_side_div.append(right_side_subdiv)
      document.querySelector("#right").append(right_side_div)
    })

                  //----------------------
    var arr1 =[]         //3rd subdiv right big
var right_side = {
heading: "Inside Kareena Kapoor, Karan Johar's dinner at Karisma Kapoor's home. See pics",
image:"https://images.hindustantimes.com/img/2022/05/06/550x309/kareena-malaika_1651818083201_1651818096430.jpg"
};
arr1.push(right_side)

arr1.forEach(function (ele){
    var right_side_div = document.createElement("div")
    right_side_div.setAttribute("class","maindiv_shadow")

    var right_side_subdiv = document.createElement("div")
    right_side_subdiv.setAttribute("class","div_shadow")
  
    var p = document.createElement("p")
    p.innerText = ele.heading
    p.setAttribute("class","latest_news_heading")
  
    var img = document.createElement("img")
    img.setAttribute("src",ele.image) 
    img.setAttribute("class","right_1_big_img")
  
    right_side_subdiv.append(p,img)
    right_side_div.append(right_side_subdiv)
    document.querySelector("#right").append(right_side_div)
  })

              //--------------------
  var arr1 =[]         //4th subdiv right big
var right_side = {
heading: "Doctor Strange in the Multiverse of Madness premiere: Benedict Cumberbatch, Rachel McAdams and more",
image:"https://images.hindustantimes.com/img/2022/05/03/550x309/Benedict_Cumberbatch_1651577616742_1651577669009.jpg"
};
arr1.push(right_side)

    
arr1.forEach(function (ele){
    var right_side_div = document.createElement("div")
    right_side_div.setAttribute("class","maindiv_shadow")

    var right_side_subdiv = document.createElement("div")
    right_side_subdiv.setAttribute("class","div_shadow")
  
    var p = document.createElement("p")
    p.innerText = ele.heading
    p.setAttribute("class","latest_news_heading")
  
    var img = document.createElement("img")
    img.setAttribute("src",ele.image) 
    img.setAttribute("class","right_1_big_img")
  
    right_side_subdiv.append(p,img)
    right_side_div.append(right_side_subdiv)
    document.querySelector("#right").append(right_side_div)
  })

              //=-=-=-=-=--=-=-=-=-=-=--
  var arr1 =[]         //5th subdiv right big
  var right_side = {
    heading: "Mother's Day 2022: Kareena Kapoor Khan to Malaika Arora, 6 Bollywood celeb moms who swear by all things fitness",
    image:"https://images.hindustantimes.com/img/2022/05/05/550x309/1_(34)_1651770771287_1651770849900.jpg"
    };
    arr1.push(right_side)

arr1.forEach(function (ele){
    var right_side_div = document.createElement("div")
    right_side_div.setAttribute("class","maindiv_shadow")

    var right_side_subdiv = document.createElement("div")
    right_side_subdiv.setAttribute("class","div_shadow")
  
    var p = document.createElement("p")
    p.innerText = ele.heading
    p.setAttribute("class","latest_news_heading")
  
    var img = document.createElement("img")
    img.setAttribute("src",ele.image) 
    img.setAttribute("class","right_1_big_img")
  
    right_side_subdiv.append(p,img)
    right_side_div.append(right_side_subdiv)
    document.querySelector("#right").append(right_side_div)
  })


  
  
   //------=========---------========------===== one section  over

//2nd category  TRENDING

//   one sub div created
var h4 = document.createElement("h4")
h4.innerText = "LIFESTYLE"
h4.style.textAlign="center"
h4.style.color = "#00b1cd"
document.querySelector("#right").append(h4)

var arr1 =[]         //1st subdiv right big
  var right_side = {
  heading: "Positivity guide: 6 types of people to stay close to",
  image:"https://images.hindustantimes.com/img/2022/05/05/550x309/people_thumb_1651759921995_1651759965503.jpg"
  };
  arr1.push(right_side)
  
  arr1.forEach(function (ele){
      var right_side_div = document.createElement("div")
      right_side_div.setAttribute("class","maindiv_shadow")
  
      var right_side_subdiv = document.createElement("div")
      right_side_subdiv.setAttribute("class","div_shadow")
    
      var p = document.createElement("p")
      p.innerText = ele.heading
      p.setAttribute("class","latest_news_heading")
    
      var img = document.createElement("img")
      img.setAttribute("src",ele.image) 
      img.setAttribute("class","right_1_big_img")
    
      right_side_subdiv.append(p,img)
      right_side_div.append(right_side_subdiv)
      document.querySelector("#right").append(right_side_div)
    })
                  //--------------------
    var arr1 =[]         //2nd subdiv right big
    var right_side = {
    heading: "Follow these golden rules to prevent bloating post meals",
    image:"https://images.hindustantimes.com/img/2022/05/05/550x309/bloating_thumb_1651755725244_1651755756096.jpg"
    };
    arr1.push(right_side)
    
    arr1.forEach(function (ele){
        var right_side_div = document.createElement("div")
        right_side_div.setAttribute("class","maindiv_shadow")
    
        var right_side_subdiv = document.createElement("div")
        right_side_subdiv.setAttribute("class","div_shadow")
      
        var p = document.createElement("p")
        p.innerText = ele.heading
        p.setAttribute("class","latest_news_heading")
      
        var img = document.createElement("img")
        img.setAttribute("src",ele.image) 
        img.setAttribute("class","right_1_big_img")
      
        right_side_subdiv.append(p,img)
        right_side_div.append(right_side_subdiv)
        document.querySelector("#right").append(right_side_div)
      })
  
                    //----------------------
      var arr1 =[]         //3rd subdiv right big
  var right_side = {
  heading: "Sonakshi Sinha in all denim wear gives street-fashion a run for its money",
  image:"https://images.hindustantimes.com/img/2022/05/05/550x309/1_(27)_1651748475384_1651748504526.jpg"
  };
  arr1.push(right_side)
  
  arr1.forEach(function (ele){
      var right_side_div = document.createElement("div")
      right_side_div.setAttribute("class","maindiv_shadow")
  
      var right_side_subdiv = document.createElement("div")
      right_side_subdiv.setAttribute("class","div_shadow")
    
      var p = document.createElement("p")
      p.innerText = ele.heading
      p.setAttribute("class","latest_news_heading")
    
      var img = document.createElement("img")
      img.setAttribute("src",ele.image) 
      img.setAttribute("class","right_1_big_img")
    
      right_side_subdiv.append(p,img)
      right_side_div.append(right_side_subdiv)
      document.querySelector("#right").append(right_side_div)
    })
  
                //--------------------
    var arr1 =[]         //4th subdiv right big
  var right_side = {
  heading: "The freshest pics in freshest looks from Vicky Kaushal's Instagram",
  image:"https://images.hindustantimes.com/img/2022/04/23/550x309/Screenshot_2022-04-23_at_7.37.17_PM_1650722954647_1650723207027.png"
  };
  arr1.push(right_side)
  
      
  arr1.forEach(function (ele){
      var right_side_div = document.createElement("div")
      right_side_div.setAttribute("class","maindiv_shadow")
  
      var right_side_subdiv = document.createElement("div")
      right_side_subdiv.setAttribute("class","div_shadow")
    
      var p = document.createElement("p")
      p.innerText = ele.heading
      p.setAttribute("class","latest_news_heading")
    
      var img = document.createElement("img")
      img.setAttribute("src",ele.image) 
      img.setAttribute("class","right_1_big_img")
    
      right_side_subdiv.append(p,img)
      right_side_div.append(right_side_subdiv)
      document.querySelector("#right").append(right_side_div)
    })
  
                //=-=-=-=-=--=-=-=-=-=-=--
    var arr1 =[]         //last subdiv right big
    var right_side = {
      heading: "Easy tips to beat the heat and prevent dehydration in summer",
      image:"https://images.hindustantimes.com/img/2022/05/06/550x309/flavour_1651828257988_1651828272829.jpg"
      };
      arr1.push(right_side)
  
  arr1.forEach(function (ele){
      var right_side_div = document.createElement("div")
      right_side_div.setAttribute("class","maindiv_shadow")
  
      var right_side_subdiv = document.createElement("div")
      right_side_subdiv.setAttribute("class","div_shadow")
    
      var p = document.createElement("p")
      p.innerText = ele.heading
      p.setAttribute("class","latest_news_heading")
    
      var img = document.createElement("img")
      img.setAttribute("src",ele.image) 
      img.setAttribute("class","right_1_big_img")
    
      right_side_subdiv.append(p,img)
      right_side_div.append(right_side_subdiv)
      document.querySelector("#right").append(right_side_div)
    })
  