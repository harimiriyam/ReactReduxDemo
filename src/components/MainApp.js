import EcommCardList from './EcommCardListContainer'
import { StatisticsCount } from './Statistics'
import AddProduct  from './AddProductContainer'
import React from 'react'
import { EcommMenu } from './EcommMenu'
import { Footer } from './Footer'

export const MainApp = (props) =>  {
		return (
			<div>
			 <EcommMenu />
				{(props.location.pathname === "/addproduct") ?
					<AddProduct /> :
			 (props.location.pathname === "/dashboard") ?
			 	<StatisticsCount electronics={100}
						 apparel = {200}
						 groceries = {300}
				/> :
			 	<EcommCardList />		 
			}
			<Footer />
			</div>
		)
}