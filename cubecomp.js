console.clear()
const fetch = require("node-fetch");
var url = 'https://m.cubecomps.com/api/v1/competitions/';
var theComp = 'Altai Special';
var competitor = 'Artem Kuminov'

/*

var testThis = $.ajax({
        url: 'https://m.cubecomps.com/api/v1/competitions',
        success: function(comp)
        {

            var theComp = 'Medan Farewell';
//var ongoing = comp.in_progress.find(theComp);

            for(var i = 0; i < comp.in_progress.length; i++)
            {
              if(comp.in_progress[i].name == theComp)
              {
                var compID = comp.in_progress[i].id;
                var compName = comp.in_progress[i].name;
//console.log('I SHIT MY OWN PANTS at competition: '+compID);
//console.log('I SHIT MY OWN PANTS at competition: '+compName);
//console.log(comp.in_progress[i]);
                                    return compID;
              }
            }

        }


//        beforeSend: function(xhr) {
//             //xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
//        }, success: function(data){
//            //alert(data);
//            //process the JSON data etc
//        }


})



console.log('--------------------------');
console.log(testThis.compID);
console.log('--------------------------');
*/


//////////////////////////////////////
//////////////////////////////////////
/*
var opts = {
  method: 'GET',      
  headers: {}
};
fetch('/get-data', opts).then(function (response) {
  return response.json();
})
.then(function (body) {
//doSomething with body;
});



var opts = {
  method: 'GET',      
  headers: {}
};
fetch(url, opts).then(function (response) {
  return response.json();
})
.then(function (body) {
//doSomething with body;
});

console.log(opts[0])
*/


//GET ACTIVE COMPS
var TheComps = fetch(url)
  .then(function(response)
    {
    return response.json();
    })

//LOOK FOR OUR COMP
  .then(function(comps)
    {

    var complen = comps.in_progress.length;
    console.log(complen);

    // Check if any competition is taking place, exit if not
    if (complen == 0)
    {
      console.log('None in progress...');
      process.exit();
    }
    else
    {
      for(var i = 0; i < comps.in_progress.length; i++)
      {
        if(comps.in_progress[i].name == theComp)
        {
          var compID = comps.in_progress[i].id;
          var compName = comps.in_progress[i].name;
          //console.log(compID);
          console.log(compName);
          return compID;
        }
      }
    }
    })

  // GET OUR COMPETITION INFORMATION
  .then(function(ourCompID)
    {
    console.log('ourCompID');
    console.log(ourCompID);
    fetch(url+ourCompID)
      .then(function(response)
        {
        return response.json()
        })
      .then(function(ourComp)
        {

        //SPLIT THIS PART OFF SO WE DON'T HAVE TO KEEP CHECKING THE COMPETITION

        // GET OUR COMPETITOR INFORMATION
        for(var i = 0; i < ourComp.competitors.length; i++)
        {
          if(ourComp.competitors[i].name == competitor)
          {
            console.log(competitor);
            var competitorID = ourComp.competitors[i].id;
            console.log(competitorID);
            return competitorID;

          }
        }    

        console.log(ourComp);

        })
      .then(function(competitorID)
        {

        console.log(competitorID); 

        // GET THE COMPETITOR'S CURRENT STATUS
        fetch(url+ourCompID+'/competitors/'+competitorID)
          .then(function(response)
            {
            console.log(response);
            return response.json()
            })
          .then(function(results)
            {
            console.log(results);
            })
        //https://m.cubecomps.com/api/v1/competitions/1094/competitors/43


        })
    })

function getCompetitorInfo(info)
{
}
/*
console.log(comps);

console.log('----------------------');
console.log('----------------------');
console.log('');
console.log('----------------------');
//console.log(comps.in_progress[1]);
console.log('----------------------');
console.log('----------------------');
*/

/*

            for(var i = 0; i < comps.in_progress.length; i++)
            {
              if(comps.in_progress[i].name == theComp)
              {
                var compID = comp.in_progress[i].id;
                var compName = comp.in_progress[i].name;
//console.log('I SHIT MY OWN PANTS at competition: '+compID);
//console.log('I SHIT MY OWN PANTS at competition: '+compName);
//console.log(comp.in_progress[i]);
              }
            }

*/
