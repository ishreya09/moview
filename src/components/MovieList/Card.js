import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../index.css';
import "./MovieList.css"

class LongText extends React.Component 
{ 
    state = { showAll: false }
    showMore = () => this.setState({showAll: true}); 
    showLess = () => this.setState({showAll: false});
    render() {
        const {content, limit} = this.props.content;
        const {showAll} = this.state;
        if(content.length<=limit) {
            // there is nothing more to show
            return <div>{content}</div>
        }
        if(showAll) {
            // We show the extended text and a link to reduce it
            return <div>
                {content}
                <a onClick={this.showLess}>Read less</a>
            </div>
        }
        // In the final case, we show a text with ellipsis and a `Read more` button
        const toShow = content.substring(0,limit)+"...";
        return <div>
            {toShow}
            <span onClick={this.showMore}>Read more</span>
        </div>
    }
}




function Card(props) {
    return (
        <div className="MyCard">
            <div className="card" style={{ width: "20rem" ,height:"50rem"}}>
                <a href={props.link} className="">
                    <img src={props.imageUrl} className="CardImg card-img-top" alt="img" />
                </a>
                <div className="card-body">
                    <h5 className="card-title text-bold" style={{fontSize:"15px"}}>{props.title} ({props.rating})</h5>
                    <p className="card-text"  >{props.metades.substring(0,250)}</p>
                    {/* <LongText content={props.metades}/> */}
                    <a href={props.link} className="Button btn btn-primary">Review Movie</a>
                </div>
            </div>
        </div>
    );

}

export default Card;