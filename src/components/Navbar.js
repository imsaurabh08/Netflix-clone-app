import React,{useEffect,useState} from 'react'
import './Navbar.css';
function Navbar ()  {
    const [show, setshow] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(window.scrollY>100)
        {
            setshow(true);
        }
        else{
            setshow(false);
        }
      })
    
      return () => {
        window.removeEventListener('scroll',()=>{});
      };
    }, [])
    
  return (
    <div className={`nav ${show && "nav_black" }`}>
    <img className='nav_logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAG2I4i4yD8IciruoIu2ymiAma1_cl4LyqDjtis_V&s" alt="Netflix Logo" />
<img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Logo" />
</div>
  )
}

export default Navbar