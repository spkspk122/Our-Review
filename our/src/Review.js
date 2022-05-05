import React,{useState} from 'react'
import './Review.css'

function Review() {
  const[data,setData] = useState([
    {
      id: 1,
      name: 'Susan Smith',
      job: 'Web Developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'Web Designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'Intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'The Boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ]);
  const[index,setIndex]=useState(0)
  const handlenext=()=>{
    if(index===data.length-1){
      setIndex(0)
    }
    else{
      setIndex(index+1)
    }
     
  }
  const handleprevious=()=>{
    if(index===0){
      setIndex(3)
    }
    else{
      setIndex(index-1)
    }
  }
  const handlerandom=()=>{
          let randomValue=Math.floor(Math.random() * data.length);
          setIndex(randomValue)
          if(randomValue===index){
            randomValue=((randomValue+1)>(data.length-1))?0:randomValue+1
          }
          console.log(randomValue)

  }

  return (
    <div className='overall'>
        <div className='body'>Our Reviews</div>
        <div className='photo' ><br/>
          <span className='q'></span><img className='img' src={data[index].image} alt='img'/><br/>
          <div className='name'>{data[index].name}</div>
          <div className='job'>{data[index].job}</div>
          <div className='text'>{data[index].text}</div><br/>
          <div className='button'>
          <button className='btn2' onClick={handleprevious}>&#10094;</button>
          <button className='btn1' onClick={handlenext}>&#10095;</button><br/><br/>
           <button className='btn3' onClick={handlerandom}>Suprise Me</button>
          </div>

          
          
          
           </div>
        
    </div>
  )
}

export default Review