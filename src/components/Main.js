require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//  获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');
//  转换成实际路径
imageDatas = (function genImageURL(imageDataArr) {
	for (var i = 0, j = imageDataArr.length; i < j; i++) {
		var singleImageData = imageDataArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDataArr[i] = singleImageData;
	}

	return imageDataArr;
})(imageDatas);

var ImgFigure = React.createClass({
	render: function() {
		return (
			<figure className="img-figure">
				<img src={this.props.data.imageURL}
					 alt={this.props.data.title}/>
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>	
				</figcaption>
			</figure>		
		);
	}
});

class AppComponent extends React.Component {
  render() {

    var controllerUnits = [],
    	imgFigures = [];

    for (var i = 0, j = imageDatas.length; i < j; i++) {
    	imgFigures.push(<ImgFigure data={imageDatas[i]}/>);
    }
    return (
      <section className="stage">
      	<section className="img-sec">
      		{imgFigures}
      	</section>
      	<nav className="controller-nav">
      		{controllerUnits}
      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
