import React, { useEffect, useState } from 'react'

function Main({ info }) {
	const { lat = 0, lng = 0 } = info.location || {}
	const [leafletMap, setLeaftletMap] = useState(null)

	useEffect(() => {
		const map = L.map('leaflet-map').setView([lat, lng], 14)
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(map)
		setLeaftletMap(() => map)
	}, [])

	useEffect(() => {
		leafletMap && leafletMap.panTo([lat, lng])
		leafletMap &&
			L.circle([lat, lng], {
				color: 'white',
				fillColor: 'green',
				fillOpacity: 0.3,
				radius: 500,
			}).addTo(leafletMap)
	})
	return (
		<main>
			<div id='leaflet-map' />
		</main>
	)
}

export default Main