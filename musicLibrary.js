
var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

var playlists = library.playlists;
var tracks = library.tracks;

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (let i in playlists) {
    console.log(playlists[i].id + ": " + playlists[i].name + " - " + playlists[i].tracks.length + " tracks");
  }
}

// printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (let i in tracks) {
    console.log(tracks[i].id + ": " + tracks[i].name + " by " + tracks[i].artist + " (" + tracks[i].album + ")");
  }
}

// printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var plTracks = playlists[playlistId].tracks;
  console.log(playlists[playlistId].id + ": " + playlists[playlistId].name + " - " + playlists[playlistId].tracks.length + " tracks");
  for (i = 0; i < plTracks.length; i++) {
    let currentTrackId = tracks[plTracks[i]];
    console.log(currentTrackId.id + ": " + currentTrackId.name + " by " + currentTrackId.artist + " (" + currentTrackId.album + ")");
  }
}

// printPlaylist("p01");

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var trackAdd = playlists[playlistId].tracks;
  trackAdd.push(trackId);
  console.log(playlists[playlistId].tracks);
}

// addTrackToPlaylist("t03", "p01");


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// console.log(uid());
// adds a track to the library

var addTrack = function (name, artist, album) {
  var i = uid();
  tracks[i] = {id: i, name: name, artist: artist, album: album};
}

addTrack("ABCs", "anonymous", "children");


// adds a playlist to the library

var addPlaylist = function (name) {
  var id = uid();
  playlists[id] = {id: id, name: name, tracks: [""]};
  console.log(playlists);
}

addPlaylist("JIM");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}