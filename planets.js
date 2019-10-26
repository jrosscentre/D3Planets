var Names = ["johnny","jerry","janie"];
d3.select("#A1").append("p").text(Names)

d3.select("#A2").selectAll("span").data(Names).enter().append("span").text(function(d){return Names})


planetpromise = d3.json ("planets.json");
planetpromise.then(
    
function(plntdata)
{
    console.log("works",plntdata)
    imgslist(plntdata); 
    imgsol(plntdata);
    maketable(plntdata);
    tablewnames(plntdata);
    fulltable(plntdata)
},
function(err)
{
    console.log("doesn't",err)
}
    )


    var imgslist = function (imgs)
    {
        d3.select("#B3")
        .selectAll("img")
        .data(imgs)
        .enter()
        .append("img")
        .attr("src",function(planet)
              {return planet.img;})
    }
     
    
    var imgsol = function(imgs)
    {
         d3.select("#B4")
        .selectAll("ol")
        .data(imgs)
        .enter()
        .append("li")
        .text(function(planet)
              {return planet.name;})
    }
    
    var maketable = function(imgs)
    {
        console.log("works")
        d3.select("#C1")
        .append("table")
        .selectAll("tr")
        .data(imgs)
        .enter()
        .append("tr")
    }
    
    var tablewnames = function(imgs)
    {
        console.log("works")
         d3.select("#C2")
        .append("table")
        .selectAll("tr")
        .data(imgs)
        .enter()
        .append("tr")
        .text(function(d)
               {return d.name;})
    }
    
    var fulltable = function(imgs)
    {
      console.log("works")
         d3.select("#C3")
        .append("table")
        .selectAll("tr")
        .data(imgs)
        .enter()
        .selectAll("tr")
        .append("tr")
        .text(function(d)
              {return d.name;})
        .append("td")
        .text(function(d)
             {return d.distance;})
        .append("td")
        .text(function(d)
             {return d.radius;})
        .append("td")
        .text(function(d)
             {return d.density;})
        .append("td")
        .text(function(d)
             {return d.moons})
        .append("tr")
        .append("td")
        .attr("src", function (d)
             {return d.img;})
    }
    
    


 
