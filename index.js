import { useState } from 'react';

function Header(){
	return (<h1>Header Component</h1>)
}
function Footer(){
	return (<h1>Footer Component</h1>)
}
function Body({title}){
	const [likes,setLikes] = useState(0);
	const incrementLike = ()=>{
		setLikes(likes + 1);
	}
	return (<h1>Body Component of {title} <button onClick={incrementLike}>likes {likes}</button></h1>)
}

function App(){
	return(<><Header/><Body title="Homepage"/> <Body title="About Us"/> <Body title="Contact Us"/><Footer/></>
	)
}

	
