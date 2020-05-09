import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import axios from 'axios';

const CountryPicker = () => {
		const [userPick, setUserPick] = useState('Nigeria')
		const [countries, setCountries] = useState([])
		const [country, setCountry] = useState({})

	
		useEffect(() => {
			const fetchData = async () => {
	    	const result = await axios.get(`https://covid19.mathdro.id/api/countries/${userPick}`)
	    	setCountry(result.data)
	    	const allCountries = await axios.get(`https://covid19.mathdro.id/api/countries/`)
	 	    setCountries(allCountries.data.countries)
  		}
			fetchData()
		})

		useEffect(() => {
			const fetchData = async () => {
	    	const result = await axios.get(`https://covid19.mathdro.id/api/countries/${userPick}`)
	    	setCountry(result.data)
  		}
			fetchData()
		}, [userPick])
		
		
		const { confirmed, recovered, deaths, lastUpdate } = country;

		const displayCountry = userPick || "Nigeria"
		if (!confirmed) {
			return 'Loading...'	
		}
		if (!countries) {
			return 'Loading...'	
		}
		return(
			<div>
				<section className="bg-secondary"> 
					<div className="container py-5 "> 
						<div className="row">
							<div class="form-group col flex-item text-center">
						    <select 
						    	class="form-control" 
						    	id="exampleFormControlSelect1"
						    	onChange={ event => setUserPick(event.target.value)}>
						      <option value="nigeria">Select Country</option>
									{ countries.map(country => {
										return <option key={country.id} value={country.name}>{country.name}</option>
									})}
						    </select>
						  </div>
						</div>
						<div className="row">
							<div className="col text-center">											
								<h1 className="display-4 text-uppercase text-dark mb-0">
									<strong>{displayCountry}</strong>
								</h1>
								<div className="title-underline bg-danger"></div>
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
		);
}


export default CountryPicker;






