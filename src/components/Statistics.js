import React from 'react'
import { Statistic, Label, Divider, Container } from 'semantic-ui-react'

const calcVisit = (electronics,apparel,groceries)  =>  electronics+apparel+groceries;
	

export const StatisticsCount = (props) =>  (	
			<Container>
				<Label color="blue" size="huge">Site visits by Category</Label>
				<Statistic.Group>
					  <Statistic>
						<Statistic.Value>{props.electronics}</Statistic.Value>
						<Statistic.Label>Electronics</Statistic.Label>
					  </Statistic>
					  <Statistic>
						<Statistic.Value>{props.apparel}</Statistic.Value>
						<Statistic.Label>Apparel</Statistic.Label>
					  </Statistic>
					   <Statistic>
						<Statistic.Value>{props.groceries}</Statistic.Value>
						<Statistic.Label>Groceries</Statistic.Label>
					  </Statistic>
				</Statistic.Group>
				<Divider />
				 <Statistic color="red">
					  <Statistic.Value>{calcVisit(
							props.electronics, 
							props.apparel,
							props.groceries
						)}</Statistic.Value>
					  <Statistic.Label>Total Visits</Statistic.Label>
				 </Statistic>
			</Container>
)