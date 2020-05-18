
var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          { 
            id:'1', 
            itemName:'漢堡',
            imgUrl:"https://i.imgur.com/Pnz3eEH.jpg",
            price:'500',
            count:'1'
          },
          {  
            id:'2',
            itemName:"牛肉麵",
            imgUrl:"https://i.imgur.com/MxLHdZC.jpg",
            price:'790',
            count:'1'
          },
          {
            id:'3',
            itemName:"redbull",
            imgUrl:"https://i.imgur.com/JGslzHw.jpg",
            price:'1200', 
            count:'1'
          },
          {
            id:'4',
            itemName:"足球",
            imgUrl:"https://i.imgur.com/X8992RE.jpg",
            price:'2300', 
            count:'1'
          },
    ]
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>1){
            item.count--;                
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        }
    },
    computed:{
 
    }
})
