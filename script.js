Vue.component('listing',{
  props:['name','brand','price','type','img','desc','idx'],
  template:'<div class = "listing"><h2>{{brand}} {{name}}</h2> <div class = "gridcontainer"><div class = "grid1"><h3>${{price}}</h3></div><div class = "grid2"><p><img :src =img></p> </div><div class = "grid3"><p>{{type}}</p></div><div class = "grid4">{{desc}}</div><dov class = "grid5"><button v-on:click="removeItem">add to cart</button</div></div></div>',
  methods:{

    removeItem:function(){
      app._data.instruments[this.idx].inCart = true;
      vueHeader._data.cartSize++;
    }
    
  }
})
var vueHeader = new Vue({
  el:"#vueHeader",
  data:{
    cartSize:0,
    cartItems:[]
  },
  methods:{
    addItem:function(){
      app._data.hideShow.invisible = !app._data.hideShow.invisible;
    },
    clearCart:function(){
      for(var i = 0; i < app._data.instruments.length; i++){
        app._data.instruments[i].inCart = false;
      }
    vueHeader._data.cartSize = 0;
    }
  }
})
var app = new Vue({
  el:'#app',
  data:{
    hideShow:{
      invisible:false,
      addItemInvis:false
    },
    addBrand:"",
    addName:"",
    addPrice:"",
    addType:"",
    addDesc:"",
    instruments:[
      {
        brand:"Fender",
        name:"EOB Stratocaster Electric Guitar",
        type:"Electric Guitar",
        price:1124.99,
        img:"https://media.guitarcenter.com/is/image/MMGS7/EOB-Stratocaster-Electric-Guitar-Olympic-White/K35831000001000-00-220x220.jpg",
        desc:"Ed O’Brien’s ambient, ethereal and orchestral guitar style is an essential part of the sonic identity of Radiohead. We partnered with this groundbreaking player to create the EOB Stratocaster — an instrument as unique as his sound.",
        inCart: false,
        indx:0,
        class:{
          activeFender: true}
      },
      {
        brand:"Fender",
        name:"Player Precision Bass Pau Ferro Fingerboard Capri Orange",
        type:"Electric Bass Guitar",
        price:699.99,
        img:"https://media.musiciansfriend.com/is/image/MMGS7/Player-Jazz-Bass-Pau-Ferro-Fingerboard-Capri-Orange/L21571000007000-00-220x220.jpg",
        desc:"There’s nothing more classic than a Fender electric bass, and the Player Precision Bass is as authentic as it gets—genuine Fender style and the rumbling, seismic sound that spawned a thousand imitations. With its smooth playing feel and spotlight-ready style, this thunderous bass is ready to enter the studio or prowl the stage and help show the world your creative vision.",
        inCart: false,
        indx:1,
        class:{
          activeFender: true}
      },
      {
        brand:"Fender",
        name:"CD-60 Dreadnought V3 Acoustic Guitar Natural",
        type:"Acoustic Guitar",
        price:199.99,
        img:"http://media.musiciansfriend.com/is/image/MMGS7/CD-60-Dreadnought-Acoustic-Guitar-Natural/H70152000001000-00-500x500.jpg",
        desc:`The CD-60 dreadnought V3 boasts features you’d expect on much more expensive instruments, with a spruce top and choice of natural, sunburst and black finishes. If you're a beginning guitar player, the best choice you can make is getting a guitar with a sound and feel that will inspire you to keep playing. The CD-60 dreadnought V3 is that guitar. This affordable genuine Fender provides nicely balanced tone and plenty of volume thanks to its dreadnought body style and spruce top with scalloped "X"-bracing.`,
        inCart: false,
        indx:2,
        class:{
          activeFender: true}
      },
      {
        brand:"Yamaha",
        name:"P-45 88-Key Weighted Action Digital Piano",
        type:"Keyboard",
        price:499.99,
        img:"https://cdn.bestadvisor.com/catalog/86/95/8695aa2c400fe9112a4c8d2cea5c5d7d_w560.jpg",
        desc:"The P-45 is the lowest-cost, 88-note, Graded Hammer Standard weighted action digital piano that Yamaha offers. This digital piano has a basic set of features, ideal for the needs of the beginner piano student. It features 88 blocked-end Graded Hammer Standard weighted keys, built-in speakers and best of all, Yamaha's legendary piano sound.",
        inCart: false,
        indx:3,
        class:{
          activeYamaha: true}
      },
      {
        brand:"Yamaha",
        name:"DTX432K Electronic Drum Set",
        type:"Electronic Drums",
        price:599.99,
        img:"https://media.music123.com/is/image/MMGS7/DTX432K-Electronic-Drum-Set/L25703000000000-00-750x750.jpg",
        desc:"The DTX402 series electronic drums bring Yamaha quality and technology to a new level of affordability. The DTX432K is powered by the DTX402 module that features 287 professional acoustic drum and percussion sounds with Accent Articulation for dynamic expression.",
        inCart: false,
        indx:4,
        class:{
          activeYamaha: true}
      },
      {
        brand:"Yamaha",
        name:"TRBX174 Electric Bass Guitar",
        type:"Electric Bass Guitar",
        price:199.99,
        img:"https://media.musiciansfriend.com/is/image/MMGS7/TRBX174-Electric-Bass-Guitar-Blue-Metallic/J05929000004000-00-500x500.jpg",
        desc:"The TRBX174 represents a price breakthrough for the TRBX range, yet the quality is everything you'd expect from a Yamaha bass. ou're the bedrock of your music. You need an instrument with the strength and power to perform. That instrument must give you the freedom to innovate, to create and push the boundaries. You need a bass where everything˜s just right. Sound, feel, looks - nothing comes second.",
        inCart: false,
        indx:5,
        class:{
          activeYamaha: true}
      },
      {
        brand:"Maton",
        name:"EBG808C Tommy Emmanuel",
        type:"Acoustic Guitar",
        price:2499.99,
        img:"https://cdn.shopify.com/s/files/1/1339/6367/products/P1300841-EBG808TEC_19682_V1_400x.jpg?v=1574741665",
        desc:"It takes a great guitar to meet the demands of such a great player. Designed in conjunction with guitar great Tommy Emmanuel, the TE series guitars are an outstanding tribute to Tommy’s musicianship and Maton’s superior craftsmanship. Built to Tommys specifications, the TE series provides the huge tone and performance you would expect from a guitar bearing the name.",
        inCart: false,
        indx:6,
        class:{
          activeMaton: true}
      },
      {
        brand:"Maton",
        name:"Tenor Ukulele",
        type:"Ukulele",
        price:1139.99,
        img:"https://cdn.shopify.com/s/files/1/2161/9961/products/UKULELE_Tenor_Front_c489b92a-ac3c-4b08-b164-1363b53b1918_grande.jpg?v=1521765306",
        desc:"People of Australia be proud of a beautiful Tenor uke made right here on our shores. This great sounding all solid blackwood back and sides uke, Comes complete with a Maton hard case. Fantastic value.",
        inCart: false,
        indx:7,
        class:{
          activeMaton: true}
      },
      {
        brand:"Maton",
        name:"EBW808c Australian Blackwood",
        type:"Acoustic Electric Guitar",
        price:1999.99,
        img:"https://www.musoscorner.com.au/media/catalog/product/cache/1/image/1288x/9df78eab33525d08d6e5fb8d27136e95/e/b/ebw808c002.jpg",
        desc:"Simplicity and purity of tone lay at the heart of the Blackwood range of Guitars. Pure Blackwood tone -clear, bright trebles, strong mid range and full bass. The all Blackwood construction produces a unique compression, blending frequencies into a new, unique voice.",
        inCart: false,
        indx:8,
        class:{
          activeMaton: true}
      }
    ]
  },
  methods:{
    addNewItem() {
      if(app._data.addBrand.toLowerCase() == 'yamaha'){
        var newItem = {
           brand: app._data.addBrand,
           name: app._data.addName,
           type: app._data.addType,
           price: app._data.addPrice,
           img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Fno-image-icon-6.png&f=1&nofb=1",
          desc: app._data.addDesc,
          inCart: false,
          indx: app._data.instruments.length,
          class:{
          activeYamaha: true}
          };
          
        }
      else if(app._data.addBrand.toLowerCase() == 'maton'){
        var newItem = {
           brand: app._data.addBrand,
           name: app._data.addName,
           type: app._data.addType,
           price: app._data.addPrice,
           img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Fno-image-icon-6.png&f=1&nofb=1",
          desc: app._data.addDesc,
          inCart: false,
          indx: app._data.instruments.length,
          class:{
          activeMaton: true}
          };
          
        }
      else if(app._data.addBrand.toLowerCase() == 'fender'){
        var newItem = {
           brand: app._data.addBrand,
           name: app._data.addName,
           type: app._data.addType,
           price: app._data.addPrice,
           img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Fno-image-icon-6.png&f=1&nofb=1",
          desc: app._data.addDesc,
          inCart: false,
          indx: app._data.instruments.length,
          class:{
          activeFender: true}
          };
          
        }
      else{
        var newItem = {
           brand: app._data.addBrand,
           name: app._data.addName,
           type: app._data.addType,
           price: app._data.addPrice,
           img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Fno-image-icon-6.png&f=1&nofb=1",
          desc: app._data.addDesc,
          inCart: false,
          indx: app._data.instruments.length,
          class:{
          activeOther: true}
          };
          
        }

        app._data.instruments.push(newItem);
        app._data.hideShow.invisible = !app._data.hideShow.invisible;
     }
    },
  watch:{
    
  }
})



/*
[done] There should be a list of 9 instruments having data points of at least Name, Instrument Type, Price, and Brand

[done] There can only be three different brands, Fender, Yamaha, and Maton, and there should be three of each Brand

[done] Display the image of each instrument in your HTML page with its name underneath

When I click on an Instrument, it should display its Name, Instrument Type, Price, and Brand in a div that is overall the content on the page.

[done] When I hover over an Instrument, Its background color should change to what brand it is as well as the font color changing to white. Once I hover off, it should go back to normal
  Fender=Red
  Yamaha=Green
  Maton=Blue

An Add to Cart button should be under the instrument's information in both the pop-up and normal divs. When I click on that button, it should add that instrument to my cart array and remove it from the store array.  The total items in the Cart array should be displayed in the top right-hand corner of the page. This removal of the item should be visible on the page (so the div containing that item should disappear)

[done] If all items from the store get removed, a message should appear saying "Store is Empty"

[done] Clicking on the cart should add all the items back to your store, and emptying the cart

[done]Another button next to my cart button should be for adding items to the store through a form. This should appear as a pop-up

[done]The Store item just needs to have a name that the user creates
  The user should be able to type out the name of the new instrument, select what brand it is, and type of instrument, then submit it, adding it to the store
  This should visually be represented in the store and have the correct interactivity when hovering and clicking on the item
  Since the product doesn't have an image, make it so the image just says "no-image" rather than a broken image tag
*/