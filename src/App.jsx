import {useState, useEffect, useRef} from 'react'

function App() {
  
  const [generatedtext, changetext]=useState('');
  const [wantnumbers, setnumber] = useState(false);
  const [length, setlength] = useState(20);
  const textref = useRef();

  function selecttext(){
    window.navigator.clipboard.writeText(generatedtext)
    textref.current?.select()
  }

  useEffect(()=>{
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let textgg = ''
    if(wantnumbers) str+= '1234567890'

    for(let i =0; i<length; i++){
      let r_value = Math.floor(Math.random()*str.length+1)
      textgg+=str.charAt(r_value)
    }
    console.log(textgg);
    changetext(textgg)
  }, [length, wantnumbers])

  
  return (
    <>
    <div className="bg-green-200 h-lvh">
      <h1 className='text-center text-3xl'>RANDOM TEXT GENERATOR</h1>
      <div className="flex flex-row w-lvh h-56 w-3/4 bg-zinc-400 ml-56">
        <input type="text" 
        value={generatedtext}
          placeholder='Generate The Random Text'
          className='w-3/4 text-pretty'
          readOnly
          ref={textref}
          
        />
        <button className='h-20 w-32 bg-black text-white rounded-xl border-t-8' onClick={selecttext}>COPY-TEXT</button>
      </div>

      <div className='bg-red-200 h-48 w-3/4 ml-56 flex flex-wrap content-center'>
        <label className='bg-red-300'>Choose the length of text</label>
        <input type="range" 
        max={1000}
        min={20}
        onChange={(event)=>{setlength(event.target.value)}}
        />
        <label className='bg-red-300 ml-10'>You want Numbers in the Text</label>
        <input type="checkbox" 
          className='h-10 w-10'
          onChange={()=>{setnumber((prev)=>!prev)}}
        />
      </div>
    </div>

    </>

  )
}

export default App
