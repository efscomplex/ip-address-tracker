import React, { useState, useEffect } from 'react'
import Main from '@/components/core/Main'
import Track from '@/components/base/Track'
import arrowSrc from '@/assets/images/icon-arrow.svg'

const API_URL = `https://geo.ipify.org/api/v1?apiKey=${process.env.API_KEY}`

export default function App() {
	const [inputValue, setInputValue] = useState('www.google.com')
	const [currentTrack, setCurrentTrack] = useState({})
	const setTrack = ({ target }) => setInputValue(() => target.value)
	const sendTrack = async () => {
		try {
			const resp = await fetch(`${API_URL}domain=${inputValue}`)
			const data = await resp.json()
			setCurrentTrack(() => data)
		} catch (err) {
			console.log('ups!! has an error:', err)
		}
   }
   const sendTrackIfEnter = (event) => {
		if (event.key === 'Enter') sendTrack()
	}
	useEffect(() => {
		sendTrack()
	}, [])

	return (
		<div id='app'>
			<small className='creator'>
				created by @easyDev <br /> Find me on Github - efscomplex
			</small>
			<header>
				<h1>IP Address Tracker</h1>
				<label>
					<input
						placeholder='Search for any IP address or domain'
						onChange={setTrack}
						onKeyUp={sendTrackIfEnter}></input>
					<img src={arrowSrc} className='arrow' onClick={sendTrack}></img>
				</label>
			</header>
			<div className='track-wrap'>
				<Track info={currentTrack} />
			</div>
			<Main info={currentTrack} />
		</div>
	)
}
