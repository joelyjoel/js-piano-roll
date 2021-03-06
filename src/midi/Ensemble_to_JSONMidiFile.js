function Ensemble_to_JSONMidiFile(group){
    group = new Ensemble(group);
    for(var i in group.tracks) {
        if(!group.tracks[i].isPianoRoll) {
            group.tracks[i] = group.tracks[i].toPianoRoll();
        }
    }

    var header = {
        "formatType": 0,
        "trackCount": group.tracks.length,
        "ticksPerBeat": 128
    }

    var tracks = [];
    for(var i in group.tracks) {
        var midiTrack = PianoRoll_to_JSONMidiTrack(group.tracks[i], header);
        tracks.push(midiTrack);
    }
    return {
        "header": header,
        "tracks": tracks
    }
}
module.exports = Ensemble_to_JSONMidiFile
