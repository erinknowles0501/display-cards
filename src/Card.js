import React from 'react'

const Card = (props) => {
	let content = props.data.content.rendered.replace('<p>','').replace('</p>','');
	return (
		<div>
			<div>
				<h3>{props.data.title.rendered}</h3>
				<img src={props.data.jetpack_featured_media_url} />
			</div>
			<div>
				{content}
			</div>
		</div>
	);
}

export default Card