class Album {
    title:string
    songs:string[]
    constructor(theTitle:string, theSongs:string[]){  
        this.title = theTitle;
        this.songs = theSongs;
    }
}

class Banda {
    members:string[]
    albums:Album[]
    constructor(theMembers:string[], theAlbums:Album[]) {
        this.members = theMembers;
        this.albums = theAlbums;
    }
}

////

function main() {

    const Album1 = {
        title: "Sui en vivo",
        songs: ["The Canterville Ghost", "Quizá porque", "Fabricante de Mentiras"],
    };
    
    const Banda1 = new Banda(["Charly", "Nito"], [Album1]);

    console.log(Banda1.albums);
    console.log("somebody changed this code");
}

main();
