       
var app = new Vue({  
    el:'#app',
    data:{     
        itemList:[
          {    
            id:'1',  
            itemName:'起司漢堡',
            imgUrl:"https://i.imgur.com/Sz96Tnz.jpg", 
            price:'89',
            count:'0'
          },
          {  
            id:'2',
            itemName:"炸雞",
            imgUrl:"https://i.imgur.com/HPlMbn0.jpg",
            price:'299',
            count:'0'
          },
          {
            id:'3',
            itemName:"薯條",
            imgUrl:"https://i.imgur.com/DG6LuyD.jpg",
            price:'29', 
            count:'0'
          },
          {
            id:'4',
            itemName:"海膽丼",
            imgUrl:"https://i.imgur.com/HtMVphP.jpg",
            price:'690', 
            count:'0'
          },
          {
            id:'5',
            itemName:"櫻桃鴨握壽司",
            imgUrl:"https://i.imgur.com/2TtIFIW.jpg",
            price:'600', 
            count:'0'
          },
          {
            id:'6',
            itemName:"涮涮鍋",
            imgUrl:"https://i.imgur.com/l7iLD6S.jpg",
            price:'2990', 
            count:'0'
          },     
          
          
    ]  
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>0){
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
