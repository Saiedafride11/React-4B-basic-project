import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const greenColor = {
    color: 'green'
  }

  const nayoks = ['Rubel', 'Bapparaz', 'Joy'];
  const nayikas = ['sabana', 'Vobita', 'sabnur'];

  const cinema = [
    {nayok: 'Salman Khan', nayika:'sabnur'},
    {nayok: 'Amir Khan', nayika: 'sabana'}
  ]

  const products = [
    {name:"laptop", price:5500},
    {name:"watch", price:1200},
    {name:"mobile", price:88800},
  ]
  return (
    <div className="App">
        <p style={{color: 'red'}}>Inline style check</p>
        <p style={greenColor}>External style check</p>

        <Person></Person>
        <Player name="Musfik" profession="Cricketer"></Player>
        <Friend name="Akash" address="Feni"></Friend>
        <Nayoks name={nayoks[0]}></Nayoks>

        <ul>
          {
            // nayikas.map(nayika => console.log(nayika))
            nayikas.map(nayika => <Nayika name={nayika}></Nayika>)
          }
        </ul>

          {
            cinema.map(movie => <Movie nayok={movie.nayok} nayika={movie.nayika}> </Movie>)
          }

          {
            products.map(product => <Product name={product.name} price={product.price}></Product>)
          }

          <Counter></Counter>

          <ExternalUsers></ExternalUsers>

          <LoadComments></LoadComments>
    </div>
  );
}

function Person(){
  const colorBlue = {
    backgroundColor: 'blue'
  }
  return (
    <div className="design">
      <h1 style={colorBlue}>Shakib Al Hasan</h1>
      <h4>Cricketer</h4>
    </div>
  )
}

function Player(props){
  const colorBlue = {
    backgroundColor: 'blue'
  }
  return (
    <div className="design">
      <h1 style={colorBlue}>{props.name}</h1>
      <h4>{props.profession}</h4>
    </div>
  )
}


function Friend(props){
  const colorBlue = {
    backgroundColor: 'blue'
  }
  return (
    <div className="design">
      <h1 style={colorBlue}>{props.name}</h1>
      <h4>{props.address}</h4>
    </div>
  )
}

function Nayoks(props){
  const colorBlue = {
    backgroundColor: 'blue'
  }
  return (
    <div className="design">
       <h1 style={colorBlue}>{props.name}</h1>
       <h4>Actor</h4>
    </div>
  )
}

function Nayika(props){
  const colorBlue = {
    backgroundColor: 'blue'
  }
  return (
    <div className="design">
       <h1 style={colorBlue}>{props.name}</h1>
       <h4>Actor</h4>
    </div>
  )
}


function Movie(props){
  const colorBlue = {
    backgroundColor: 'blue'
  }
  return(
    <div className="design">
      <h1 style={colorBlue}>{props.nayok}</h1>
      <h4>{props.nayika}</h4>
    </div>
  )
}

function Product(props){
  const {name, price} = props;
  const colorBlue = {
    backgroundColor: 'blue'
  }
  return (
    <div className="design">
        <h1 style={colorBlue}>{name}</h1>
        <h4>{price}</h4>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0)
  const handleIncreaseClick = () => {
    // console.log("Click me");
    const newCount = count + 1;
    setCount(newCount)
  }

  const handleDecreaseClick = () => setCount(count - 1)
  return(
    <div style={{paddingBottom: '50px'}}>
      <h1>Count : {count}</h1>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
    </div>
  )
}



function ExternalUsers(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      setUsers(data)
    })
  }, [])
  return(
    <div style={{backgroundColor: 'cyan'}}>
      <h1>External Users</h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  const {name, email} = props;
  return(
    <div>
      <h1>{name}</h1>
      <h4>{email}</h4>
    </div>
  )
}

function LoadComments(){
  const [comments, setComment] = useState([])
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComment(data))
  }, [])
  return(
    <div>
      {
        comments.map(comment => <li style={{listStyle: 'none', color: 'red'}}>{comment.id} : {comment.email}</li>)
      }
    </div>
  )
}

export default App;
