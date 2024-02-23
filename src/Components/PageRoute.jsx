import React from 'react'
import { Route } from 'react-router-dom'
import Detils from './Detils'

function PageRoute() {
  return (
	<div>
		<Route path='/Details' element={<Detils/>}></Route>
	</div>
  )
}

export default PageRoute