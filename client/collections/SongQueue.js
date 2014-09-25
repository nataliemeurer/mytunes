// SongQueue - a collection of SongModels that represents all songs in our
//queue. It has three methods: enqueue, dequeue, and playFirst.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('ended', function(){
      this.dequeue(this.at(0));
    }, this);

    this.on('dequeue', function(song){
      this.dequeue(song);
    }, this);
  },


  dequeue: function(song){
    this.remove(song);
    if (this.length > 0){
      console.log("played");
      this.playFirst();
    }
  },
  enqueue: function(song){
    this.add(song);
    if(this.length ===1 ) {
      this.playFirst();
    }
  },
  playFirst: function(){
    this.at(0).play();
  }
});
