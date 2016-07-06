var bands = [
  {
    name: "Joe",
    email: "Joe@Icansingreallyhigh.com",
    artist: "Queen"
  },
  {
    artist: "LedZepplin",
    email: "DeadMepplin@gmail.com",
    name: "Dead Mepplin"
  },
  {
    artist: "DavidBowie",
    name: "Johnny Depp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  },
  {
    name: "Joe",
    email: "Joe@Icansingreallyhigh.com",
    artist: "Queen"
  },
  {
    artist: "LedZepplin",
    email: "DeadMepplin@gmail.com",
    name: "Dead Mepplin"
  },
  {
    artist: "DavidBowie",
    name: "Johnny Depp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  },
  {
    name: "Joey",
    email: "Joe@Icansingreallyhigh.com",
    artist: "BritneySpears"
  },
  {
    artist: "LedZepplin",
    email: "DeadMepplin@gmail.com",
    name: "Dead Mepplin"
  },
  {
    artist: "DavidBowie",
    name: "Johnny Mepp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  },
   {
    artist: "DavidBowie",
    name: "Johnny Gepp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  },
   {
    artist: "DavidBowie",
    name: "Johnny Smepp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  }
];


function requests(array) {
	var counts = {};
	for (var i = 0; i < array.length; i++) {
		if (counts[array[i].artist]) {
			counts[array[i].artist]++
		}
		else {
			counts[array[i].artist] = 1;
		}
	}
	return counts;
}

requests(bands);
