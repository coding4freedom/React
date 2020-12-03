import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Directory from './DirectoryComponents';
import About  from './AboutComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import CampsiteInfo from './CampsiteInfoComponent';

const mappropsToProps = state => {
    return{
        campsites: state.campsites,
        comments: state. comments,
        partners: state.partners,
        promotions: state.promotions
    }
}

class Main extends Component {

    // on line 33 the explanation for filter
    render() {

        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.props.campsites.filter(campsite => campsite.id ===
                     +match.params.campsiteId)[0]}
                    comments={this.props.comments.filter(comment => comment.campsiteId ===
                        +match.params.campsiteId)}
                />
            );
        }

        const HomePage = () => {
            return(
                <Home
                    campsite={this.props.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}                    
                />
            );
        }
        return (
            <div>
                <Header />
                 <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites}
                    />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/aboutus'render={() => <About partners={this.props.partners} />} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to='/home' />                                     
                </Switch>              
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mappropsToProps)(Main));
