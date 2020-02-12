import React from 'react'

const Card = (props) => {
	let content = props.data.content.rendered.replace('<p>','').replace('</p>','');
	let cssString = 'url("' + props.data.jetpack_featured_media_url + '")';

	let styles = {
		backgroundImage: cssString
	}

	return (
		<section>
			<div>
				<h3>{props.data.title.rendered}</h3>
				<div className="img" style={styles}></div>
			</div>
			<div>
				{content}
			</div>
		</section>
	);
}

export default Card