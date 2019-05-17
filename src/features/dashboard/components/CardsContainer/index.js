import React, { Fragment } from "react";
import '../../../../main.css'
import Card from "../cardComp";

export default class CardsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardContent: ["Add Users", "Review Users", "Add Questions", "Review Questions", "Create Role", "Skill Matrix"]
        }
    }

    render() {
        const cardContentDisplay = this.state.cardContent.map(val => <Card key={val} cardLabel={val} />);
        return (
            <Fragment>
                <div className="container col s12 m8 l9">
                    <div data-component="Cards" className="row">
                        {cardContentDisplay}
                    </div>
                </div>
            </Fragment>
        )
    }
}
