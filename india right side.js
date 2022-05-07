//imp this is entire one section like in pic

var h4 = document.createElement("h4")
h4.innerText = "MOST POPULAR"
h4.style.textAlign="center"
h4.style.color = "#00b1cd"
document.querySelector("#right").append(h4)


 
//   one sub div created
var arr1 =[]         //1st subdiv right big
var right_side = {
heading: "Easy tips to beat the heat and prevent dehydration in summer",
image:"https://images.hindustantimes.com/img/2022/05/06/550x309/dehydration_thumb_1651828125630_1651828153037.jpg"
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
heading: "Supreme Court greenlights Amitabh Bachchan-starrer Jhund movie’s OTT release",
image:"https://images.hindustantimes.com/img/2022/05/05/550x309/9fcbb0dc-cc88-11ec-aa8a-3e772098118b_1651765553820.jpg"
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
h4.innerText = "TRENDING"
h4.style.textAlign="center"
h4.style.color = "#00b1cd"
document.querySelector("#right").append(h4)

var arr1 =[]         //1st subdiv right big
  var right_side = {
  heading: "Watch: David Warner gives epic response to Shane Watson's 'ex-captain of Sunrisers Hyderabad' introduction",
  image:"https://images.hindustantimes.com/img/2022/05/06/550x309/FSBKSSRacAA53uQ_1651815721845_1651815731622.jpg"
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
    heading: "Royal Challengers Bangalore vs Chennai Super Kings, IPL 2022: Action in images",
    image:"https://images.hindustantimes.com/img/2022/05/04/550x309/PTI05-04-2022-000231B-0_1651686443433_1651686563756.jpg"
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
  heading: "AR Rahman's daughter Khatija Rahman gets married, she calls it 'most awaited day in my life'. See pics",
  image:"https://images.hindustantimes.com/img/2022/05/06/550x309/khatija-rahman-wedding_1651801105877_1651801139590.jpg"
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
      heading: "PM Modi meets Queen of Denmark Margrethe II at Amalienborg Palace in Copenhagen",
      image:"https://images.hindustantimes.com/img/2022/05/04/550x309/DENMARK-INDIA-POLITICS-DIPLOMACY-4_1651638126845_1651638209337.jpg"
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
  