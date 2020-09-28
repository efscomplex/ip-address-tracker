import React, { useState, useEffect } from 'react'
import Main from '@/components/core/Main'
import Track from '@/components/base/Track'
import arrowSrc from '@/assets/images/icon-arrow.svg'

const API_URL = process.env.API_URL

export default function App() {
	const [inputValue, setInputValue] = useState('www.google.com')
	const [currentTrack, setCurrentTrack] = useState({})
	const setTrack = ({ target }) => setInputValue(() => target.value)
	const sendTrack = async () => {
		try {
			const resp = await fetch(`${API_URL}domain=${inputValue}`)
			const data = await resp.json()
			setCurrentTrack(() => data)
			console.log(data)
		} catch (err) {
			console.log('ups!! has an error:', err)
		}
	}
	useEffect(() => {
		sendTrack()
	}, [])

	return (
		<div id='app'>
			<header>
				<h1>IP Address Tracker</h1>
				<label>
					<input
						placeholder='Search for any IP address or domain'
						onChange={setTrack}></input>
					<img src={arrowSrc} className='arrow' onClick={sendTrack}></img>
				</label>
			</header>
			<div className='track-wrap'>
				<Track info={currentTrack} />
			</div>
			<Main />
		</div>
	)
}
