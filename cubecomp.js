console.clear()
const fetch = require("node-fetch");
const url = 'https://m.cubecomps.com/api/v1/competitions/';
const compName = 'Altai Special';
const competitor = 'Artem Kuminov'

//GET ACTIVE COMPS
var compNames = fetch(url)
  .then(function(response)
    {
    console.log('GOT COMPS');
    return response.json();
    }).then(function(comps)
      {
      console.log('comps');
      //  console.log(comps);
      checkRunningComp(comps);
      });

//LOOK FOR OUR COMP
/*
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
        if(comps.in_progress[i].name == compName)
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
        getCompetitorInfo(ourComp);
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
  */
var checkRunningComp = function(comps)
{
  //LOOK FOR OUR COMP
  var complen = comps.in_progress.length;
  console.log('complen is: '+complen);
  compID(comps);
  if(complen === 1)
  {
    getCompID(comps); 
  }
  else
  {
    console.log(compName + ' is not taking place right now.');
  }
}
var compID = (comps) => 
{
  for(var i = 0; i < comps.in_progress.length; i++)
  {
    if(comps.in_progress[i].name == compName)
    {
      const compID = comps.in_progress[i].id;
      return compID;
    }
  }
}
function checkRunningComps()
{
}
function getCompetitorInfo(info)
{
}
