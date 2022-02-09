import React from 'react';
import './App.css';
import Listitems from './Listitems'
// import 
//structure of class 
// The constructor is a method used to initialize an object's state in a class.
// It automatically called during the creation of an object in a class.
// super its inherit from father component
//state is inside constructer
//create obj 
//bind to coneccte this func

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:'',
        isComplete:false,
      }
    } //state done 
    // connect the func to reconize this
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteOneItem = this.deleteOneItem.bind(this);
    this.ItemComplete= this.ItemComplete.bind(this)
    this.ediItem = this.ediItem.bind(this)


  }//constructr end

  // functions  up the render ..

  //the first function is to add item 
  // e.preventDefault() for prevent load page when add btn 
  // inside form onsubmit 
  addItem(e){
    e.preventDefault();
    // create var and assign to currentItem {text:'',key:'',isComplete:false,}
    //create a copie to ubdate them and dont change the original 
    const newItem = this.state.currentItem;
    // newItem==currentItem
    // condition if the text is empty dont do anything
    if(newItem.text ==""){
     return
    }
    // create arr items == add objnewItem and this.state.items spread ...
    // _:_ like .push ,arr of obj
    const items = [newItem,...this.state.items];
    // change the state
    this.setState({
      // items [] = [newItem,...this.state.items];
      items: items,
      // to remove from txt bar 
      currentItem:{
        text:'',
        key:''
      }
    })
  }

  ediItem(text,key){
    const items = this.state.items;
    items.map(item=>{
     if(item.key === key) {
      item.text = text

     }
    })
    this.setState({
      items: items
    })

  }

  handleInput(e){
    // change the state  of currentItem
    // inside the onchang in input  text box 
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  deleteItems(){
    this.setState({
      items: [],
      currentItem:{
        text:'',
        key:''
      }
    })
    
  }

  ItemComplete(key){
    // console.log(key);
    let mapped = this.state.items.map(item => {
      //------- isComplete is key  value item.isCompletae != 
       return item.key == key ? {...item, isComplete: !item.isComplete } : {...item};
     
     });
   this.setState({
     // first empty arr = mapped 
     items: mapped
   })

 }

  deleteOneItem(key){
    // filter creates a new array with all elements that pass the test  true 
    // if true  push inside the filteItems faluse go out 
      const filteItems= this.state.items.filter(item =>
        item.key !== key);

      this.setState({
        items: filteItems
      })
  
    }

  

 render(){
  return (
    <div className="todo-App">
      <header>
        {/* // inside   the  form onsubmit */}
        <form className='todo-form' onSubmit={this.addItem}>
             {/* alays use vale and onChange */}
             <input type="text" placeholder="Enter task" 
               value= {this.state.currentItem.text} onChange={this.handleInput}>
              </input>
              <button type="submit">Add</button>
        </form>
        <button className='delete' 
        type="submit" 
        onClick={()=> this.deleteItems()}>Clear</button>
       
        <p>{this.state.items.text}</p>
          <Listitems items={this.state.items} 
           deleteOneItem={this.deleteOneItem}
          ItemComplete={this.ItemComplete} 
          ediItem={this.ediItem}     
                />
         
      </header>
      
    </div>
  );
 }
}

export default App;


