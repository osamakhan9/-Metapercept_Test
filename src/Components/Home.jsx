import React from 'react'
import './style/Home.css'
import Data from './class.json'
import { Link } from 'react-router-dom'

console.log(Data)

function Home() {
  return (
	<div>
		<div className='main'>
			<h1>Title</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus labore fugiat libero earum ea dolore sunt? Nemo soluta architecto explicabo, voluptas amet ipsum sint dolore nostrum animi odio officiis ducimus sed sequi ipsam magni.</p>
			
			<button>Read More</button>
			

		</div>

		<div className='datahere'>
              <div>
				<h1>Classes</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptates velit expedita perferendis odit facilis officia magni optio laboriosam quaerat.</p>

			  </div>

           {/* Append data here */}
			  <div className='grid'>
                  {
					Data.map((e)=>(
						<div>
							<div id='image'>ADD IMAGE</div>
							{/* <img src={e.ImageUrl} alt="" /> */}
							<h2>{e.Name}</h2>
							<p>{e.ShortDesc}</p>
							<button>View</button>
						</div>
					))
				  }
			  </div>
		</div>



	</div>
  )
}

export default Home