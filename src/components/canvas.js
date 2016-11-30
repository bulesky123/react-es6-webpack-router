/**
 * Created by zhoufei on 2016/11/30.
 */
var React = require('react');
var ReactCanvas = require('react-canvas');

var Surface = ReactCanvas.Surface;
var Image = ReactCanvas.Image;
var Text = ReactCanvas.Text;
export default class Canvas extends React.Component{
    render(){
        var surfaceWidth = window.innerWidth;
        var surfaceHeight = window.innerHeight;
        var imageStyle = this.getImageStyle();
        var textStyle = this.getTextStyle();

        return (
            <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
                <Image style={imageStyle} src='...' />
                <Text style={textStyle}>
                    Here is some text below an image.
                </Text>
            </Surface>
        );
    }
    getImageHeight(){
        return Math.round(window.innerHeight / 2);
    }
    getImageStyle(){
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: this.getImageHeight()
        };
    }
    getTextStyle(){
        return {
            top: this.getImageHeight() + 10,
            left: 0,
            width: window.innerWidth,
            height: 20,
            lineHeight: 20,
            fontSize: 12
        };
    }
}