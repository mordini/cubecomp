console.clear()
const fetch = require("node-fetch");
const url = 'https://m.cubecomps.com/api/v1/competitions/';
const compName = 'Altai Special';
const competitor = 'Artem Kuminov'

var testName =
  {
    test1: function () {
      console.log('test1');
      return 'butt';
    },
    test2: function () {
      console.log('test2');
      var test3 = this.test1();
      console.log(test3);
    }

  }

var competition_2 = {

  competition2: async function() {
    console.log('Getting comps');
    try {
      const result = await fetch(url)
      const data = result.json();
      return data;
    } catch(error) {
      console.log('error: ' + error); 
    }
  },

  past: async function() {
    console.log('past');
    let comps;
    competition2().then(compsPast => {
      comps = compsPast;
      console.log('check past comps man');
      console.log(comps.past);
    });
  },

  upcoming: function() {
  },

  in_progress: function() {
    console.log('in progress');
    let comps;
    competition2().then(compsPresent => {
      comps = compsPresent;
      console.log('check present comps man');
      console.log(comps.in_progress);
      return comps.in_progress;
    });
  },

  // use this to track a competition
  trackComp: function() {

  },

  find: function(comp) {
    //take comp as string
    let comps;
    //get comps
    competition2().then(compsPresent => {
      comps = compsPresent;
      console.log('got comps for find function');
      //console.log(comps.in_progress);
      //Object.keys(comps).forEach(function(value,key,map){
      //console.log(comps.in_progress);
      //console.log(comps.length);
      //for(let i = 0; i < comps.length; i++) {
      console.log(Object.getOwnPropertyNames(comps));
      for(i in comps) {
        //console.log(comps);
        //console.log(`KEY: [${key}] = VALUE: ${value}`);
        //console.log(comps[i][0].name);
        //console.log(comps.past.length);
        //console.log(typeof value);
        //console.log(typeof key);
        //console.log(typeof map);
        //console.info(map);
        //console.log(map.value);
        //console.log(comps[value]);
        //console.log(key[0][0].name);
        for(n in comps[i]) {
          //console.log(comps[i][n].name); 
          if(comps[i][n].name === comp) {
            console.log(comp + ' is in the list, under "' + i +'" !');  
            console.log(comps[i][n]);
            //console.log(Object.getOwnPropertyNames(comps)[0]);
            //console.log(comps[i]);
            console.log(comps[i][n].id);
            return comps[i][n].id;
          };
        };
        //for (var i = 0; i < value.length; i++) {
        /*
          if (comps[i].name == comp) {
            var competitionID = comps.[i].id;
            var compName = comps.[i].name;
            console.log(competitionID);
            console.log(compName);
            return competitionID;
          }
          */

      };//);

    }).catch((error) => {
      console.log('ERROR: ' + error); 
    });
    //go through list
    //console.log(comps.length);



    /*
    for (var i = 0; i < comps.length; i++) {
      if (comps[i].name == compName) {
        var competitionID = comps.[i].id;
        var compName = comps.[i].name;
        console.log(competitionID);
        console.log(compName);
        return competitionID;
      }
    //if comp do something
    //if doesn't exist, what are you thinking?
    //consider using "like"
    */
  }
}
//console.log(competition_2);
//console.log(typeof competition_2);
//competition_2.past();
competition_2.find('Gold Coast Spring');

// WORKING!
async function competition2() {
  console.log('Getting comps');
  try {
    const result = await fetch(url)
    const data = await result.json();
    return data;
  } catch(error) {
    console.log('error: ' + error); 
  }
}


async function past() {
  console.log('past');
  let comps;
  competition2().then(compsPast => {
    comps = compsPast;
    console.log('check my comps man');
    console.log(comps);
    //comps = compsPast;
    //console.log('past got comps');
    //console.log(comps);
  });
}
// END WORKING!

// competition functions
var competition = {
  //comps: function () {
  comps: async function() {
    console.log('Getting comps');
    fetch(url)
      .then(response => {
        console.log('GOT COMPS');
        return response.json();
      })
      .then(comps => {
        console.log('parsed as JSON');
        //console.log(comps);
        return comps;
      })
      .catch(error => {
        console.log('error: ' + error);
      });
  },

  past: async function() {
    console.log('past');
    let comps;

    competition.comps().then(compsPast => {
      console.log(compsPast);
      //comps = compsPast;
      //console.log('past got comps');
      //console.log(comps);
    });

    /*
    var pastPromise = new Promise(function(resolve, reject)
      {
      var comps = competition.comps();
      console.log('comps');
      console.log(comps)
      resolve();
      if(comps)
      {
        console.log('resolve');
        resolve();
      }

      console.log('pastPromise');
      console.log(comps);
      }).then(function(resp)
        {
        console.log(pastPromise);
        console.log('butterfinger');
        });

    pastPromise.then(function(val)
      {
      console.log('another butterfinger');
      })
    /*
      pastPromise.then(function(pastComps)
        {
        console.log('comps_1');
        console.log(comps);
        console.log('past comps');
        console.log(pastComps);
        });
        */
    //});
  },
  upcoming: function () {
  },
  in_progress: function () {
  },
  find: function () {
  }
}
//competition.past();
//console.log(typeof competition);
//console.log(typeof competition.past);

//COMMENT HERE
/*
//GET ACTIVE COMPS

var compNames = fetch(url)
  .then(function (response) {
    console.log('GOT COMPS');
    return response.json();
  }).then(function (comps) {
    console.log('comps');
//  console.log(comps);
    checkRunningComp(comps);
  });

//LOOK FOR OUR COMP
  .then(function (comps) {

    var complen = comps.in_progress.length;
    console.log(complen);

// Check if any competition is taking place, exit if not
    if (complen == 0) {
      console.log('None in progress...');
      process.exit();
    }
    else {
      for (var i = 0; i < comps.in_progress.length; i++) {
        if (comps.in_progress[i].name == compName) {
          var competitionID = comps.in_progress[i].id;
          var compName = comps.in_progress[i].name;
//console.log(competitionID);
          console.log(compName);
          return competitionID;
        }
      }
    }
  })

// GET OUR COMPETITION INFORMATION
  .then(function (ourCompID) {
    console.log('ourCompID');
    console.log(ourCompID);
    fetch(url + ourCompID)
      .then(function (response) {
        return response.json()
      })
      .then(function (ourComp) {
        getCompetitorInfo(ourComp);
//SPLIT THIS PART OFF SO WE DON'T HAVE TO KEEP CHECKING THE COMPETITION

// GET OUR COMPETITOR INFORMATION
        for (var i = 0; i < ourComp.competitors.length; i++) {
          if (ourComp.competitors[i].name == competitor) {
            console.log(competitor);
            var competitorID = ourComp.competitors[i].id;
            console.log(competitorID);
            return competitorID;

          }
        }

        console.log(ourComp);

      })
      .then(function (competitorID) {

        console.log(competitorID);

// GET THE COMPETITOR'S CURRENT STATUS
        fetch(url + ourCompID + '/competitors/' + competitorID)
          .then(function (response) {
            console.log(response);
            return response.json()
          })
          .then(function (results) {
            console.log(results);
          })
//https://m.cubecomps.com/api/v1/competitions/1094/competitors/43


      })
  })
*/
//END COMMENT HERE
var checkRunningComp = function (comps) {
  //LOOK FOR OUR COMP
  var complen = comps.in_progress.length;
  console.log('complen is: ' + complen);
  if (complen === 1) {
    console.log('We have live competitions!');
    competitionID(comps);
  }
  else {
    console.log('No competition is taking place right now.');
  }
}

// Get Comp ID
var competitionID = (comps) => {
  console.log('COMPS:');
  console.log(comps);

  for (var i = 0; i < comps.in_progress.length; i++) {
    if (comps.in_progress[i].name == compName) {
      const competitionID = comps.in_progress[i].id;
      return competitionID;
    }
  }
}
/*
// GET THE COMPETITOR'S ID
var competitorID = (competitionID) =>
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

// GET THE COMPETITOR'S CURRENT STATUS
var competitorStats = (competitorID) =>
{
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
}

var competitor =
  {

    id: function(competition.id)
    {
    }
    stats: function(id)
    {
    }

  };
  */
