console.clear()
const fetch = require("node-fetch");
//const url = 'https://m.cubecomps.com/api/v1/competitions/';
const compName = 'Altai Special';
const competitorName = 'Artem Kuminov';

var competitor = {

  //get competitors
  retrieve: async function() {
    // var comps = getComps();
  }

  //find competitor by name
  //get competition competitor

}

// COMPETITION FUNCTIONS
var competition_2 = {

  retrieve: async function() {
    console.log('Getting Competitions');
    const url = 'https://m.cubecomps.com/api/v1/competitions/';
    
    try {
      const result = await fetch(url)
      const data = await result.json();
      return data;
    } catch(error) {
      console.log('error: ' + error); 
    }

  },

  past: async function() {
    console.log('Past');
    let comps;
    this.retrieve().then(compsRes => {
      comps = compsRes ;
      console.log('Check Past Competitions');
      console.log(comps.past);
    });
  },

  upcoming: function() {
    console.log('Upcoming');
    let comps;
    this.retrieve().then(compsRes => {
      comps = compsRes;
      console.log('Check Upcoming Competitions');
      console.log(comps.upcoming);
    });
  },

  in_progress: function() {
    console.log('In Progress');
    let comps;
    this.retrieve().then(compsPresent => {
      comps = compsPresent;
      console.log('Checking In-Progress Competitions');
      console.log(comps.in_progress.length);
      if(comps.in_progress.length === 0) {
        console.log('No competitions are taking place right now'); 
      } else {
        console.log('Competitions Taking Place');
        console.log(comps.in_progress);
        return comps.in_progress;
      }
    });
  },

  // use this to track a competition
  trackComp: function(id) {

  },

  find: function(compInput) {
    //take comp as string
    let comps;

    // object to hold found competitions
    var compList = new Map();

    //get comps
    this.retrieve().then(compsRes => {
      comps = compsRes;

      console.log(Object.getOwnPropertyNames(comps));

      // Iterate through ALL comps
      for(i in comps) {
        for(n in comps[i]) {
          var regex = new RegExp('^.*' + compInput + '.*$', 'i');
          let compName = comps[i][n].name;
          let compId = comps[i][n].id;
          var result = regex.test(compName);

          // TO DO: MAKE IT HAVE MULTIPLE RESULTS ADDED TO NEW ARRAY
          if(result === true) {
            console.log(compInput + ' is in the list, under "' + i +'" !');  
            console.log(compName);
            //console.log(Object.getOwnPropertyNames(comps)[0]);
            //console.log(comps[i]);
            console.log(compId);
            compList.set(compId, compName);
           // return compId;
          };
        };
      };
    console.log(compList);
    }).catch((error) => {
      console.log('ERROR: ' + error); 
    });
  }
}
//TESTING GROUNDS
//console.log(competition_2);
//console.log(typeof competition_2);
//competition_2.past();
//competition_2.find('spring');
competition_2.find('uk');
//competition_2.in_progress();
//competition_2.upcoming();
//competitor.retrieve();
//competition_2.retrieve();
//END TESTING GROUNDS

/*
// WORKING!
async function competition2_OLD() {
  console.log('Getting comps');
  try {
    const result = await fetch(url)
    const data = await result.json();
    return data;
  } catch(error) {
    console.log('error: ' + error); 
  }
}

async function past_OLD() {
  console.log('past');
  let comps;
  competition2().then(compsPast => {
    comps = compsPast;
    console.log('check my comps man');
    console.log(comps);
  });
}
// END WORKING!
*/

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
          if (ourComp.competitors[i].name == competitorName) {
            console.log(competitorName);
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
    if(ourComp.competitors[i].name == competitorName)
    {
      console.log(competitorName);
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
