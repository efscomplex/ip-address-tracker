import React from 'react'

function Track({ info }) {
	return (
		<div className='track'>
			<div className='ip-address'>
				<p className='heading'>ip address</p>
				<p className='info'>{info?.ip}</p>
			</div>
			<div className='separator'></div>
			<div className='location'>
				<p className='heading'>location</p>
				<p className='info'>
					<span>{info.location?.city}, </span>
					<span>{info.location?.country}</span>
					<br />
					<span>{info.location?.postalCode}</span>
				</p>
			</div>
			<div className='separator'></div>
			<div className='timezone'>
				<p className='heading'>timezone</p>
				<p className='info'>{info.location?.timezone}</p>
			</div>
			<div className='separator'></div>
			<div className='isp'>
				<p className='heading'>isp</p>
				<p className='info'>{info?.isp}</p>
			</div>
		</div>
	)
}

export default Track
