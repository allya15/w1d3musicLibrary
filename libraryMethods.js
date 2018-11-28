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
             },
  printPlaylists: function () {
  for (let i in this.playlists) {
    console.log(this.playlists[i].id + ": " + this.playlists[i].name + " - " + this.playlists[i].tracks.length + " tracks");
    }
  },
  printTracks: function () {
  for (let i in this.tracks) {
    console.log(this.tracks[i].id + ": " + this.tracks[i].name + " by " + this.tracks[i].artist + " (" + this.tracks[i].album + ")")
    }
  },
  printPlaylist: function (playlistId) {
    var plTracks = this.playlists[playlistId].tracks;
    console.log(this.playlists[playlistId].id + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks");
    for (i = 0; i < plTracks.length; i++) {
      let currentTrackId = this.tracks[plTracks[i]];
      console.log(currentTrackId.id + ": " + currentTrackId.name + " by " + currentTrackId.artist + " (" + currentTrackId.album + ")");
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    var trackAdd = this.playlists[playlistId].tracks;
    trackAdd.push(trackId);
    console.log(this.playlists[playlistId].tracks);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var i = this.uid();
    this.tracks[i] = {id: i, name: name, artist: artist, album: album};
  },
  addPlaylist: function (name) {
    var id = this.uid();
    this.playlists[id] = {id: id, name: name, tracks: [""]};
    console.log(this.playlists);
  }
}