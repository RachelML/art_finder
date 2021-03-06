import React from 'react';
import { Route, Link } from 'react-router-dom'


class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            active: false
        })
    }

    toggleActive = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
    }

    favoriteClick = (detail, e) => {
        e.stopPropagation()
        this.props.onFaveToggle(detail)
        this.toggleActive()
    }

    

    render() {

        return (
            <div className="flex">
               { this.props.newLoad ? <div className="div-container"><img className="load-image" src={this.props.artDetail.primaryImage} /></div> : this.props.artDetail.map(detail =>
                    (
                        <div className="container">
                            <Link className="image" to={`/art/${detail.objectID}`} >
                                <img className="img" src={detail.primaryImage} />
                            </Link>
                            <div exact className="overlay" to="/favorite" >
                                <h1 to={`/favorite`} className={this.state.active ? "icon-click" : 'icon'} onClick={(e) => this.favoriteClick(detail, e)}> <i className='fa fa-heart' ></i>
                                </h1>
                            </div>
                        </div>
                    )) } 

            </div >
        );

    }
}
export default Detail;

