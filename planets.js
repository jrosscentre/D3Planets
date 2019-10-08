var Names = ["johnny","jerry","janie"];
d3.select("#A1").append("p").text(Names)

d3.select("#A2").selectAll("span").data(Names).enter().append("span").text(function(d){return Names})


planetpromise = d3.json ("planets.json");
planetpromise.then(function(plntdata)
                  {
    console.log("works",plntdata)
    
})

var plntimg = funtion(plntdata)
{
    var imgs = d3.select("#B3").data(plntdata).append("ul")
    var plntlist {plntlist.selectAll("li")
    .data(plntdata)
    .append("li")
    .enter()
        items.append("img").attr("src",function(d){return d.picture})
}

 
