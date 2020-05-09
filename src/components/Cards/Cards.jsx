import React from 'react';
import CountUp from 'react-countup';

const Cards = props => {
	const { confirmed, recovered, deaths, lastUpdate } = props.data;
	if (!confirmed) {
		return 'Loading...'	
	}
	
	return (
		<div>
			<section className="bg-secondary"> 
				<div className="container py-5 ">				
					<div className="row">
						<div className="col text-center">
							<h1 className="display-4 text-uppercase text-dark mb-0">
								<strong>Covid 19 Update</strong>
							</h1>
							<div className="title-underline bg-danger"></div>
							<p className="mt-2 text-capitalize text-muted">Lorem ipsum dolor sit amet, consectetur.</p>
						</div>
					</div>
			
					<div className="row">
					{/*Card*/}
					<div className="col-md-4 my-4">
						<div className="card infected">						
							<div className="card-header bg-primary text-white text-uppercase text-center py-4">
								<h3>infected</h3>
							</div>						
							<div className="card-title text-center my-3">
								<h4>
									<CountUp start={0} end={confirmed.value} duration={2.5} separator=","
									/>
								</h4>
							</div>
							
							<div className="card-body">
								As at: {new Date(lastUpdate).toDateString()}
							</div>						
						
							<div className="card-footer">
								<p>Number of active cases of COVID 19</p>
							</div>						
						</div>
					</div>
					{/* end of card */}
								
					{/*Card*/}
					<div className="col-md-4 my-4">
						<div className="card recovered">						
							<div className="card-header bg-success text-white text-uppercase text-center py-4">
								<h3>recovered</h3>
							</div>						
							<div className="card-title text-center my-3">
								<h4>
									<CountUp start={0} end={recovered.value} duration={2.5} separator=","
									/>
								</h4>
							</div>
							
							<div className="card-body">
								As at: {new Date(lastUpdate).toDateString()}
							</div>						
						
							<div className="card-footer">
								<p>Number of active cases of COVID 19</p>
							</div>						
						</div>
					</div>
					{/* end of card */}

					{/*Card*/}
					<div className="col-md-4 my-4">
						<div className="card deaths">						
							<div className="card-header bg-danger text-white text-uppercase text-center py-4">
								<h3>deaths</h3>
							</div>						
							<div className="card-title text-center my-3">
								<h4>
									<CountUp start={0} end={deaths.value} duration={2.5} separator=","
									/>
								</h4>
							</div>
							
							<div className="card-body">
								As at: {new Date(lastUpdate).toDateString()}
							</div>						
						
							<div className="card-footer">
								<p>Number of active cases of COVID 19</p>
							</div>						
						</div>
					</div>
					{/* end of card */}
					</div>
				</div>
			</section>
		</div>
	)
}

export default Cards;