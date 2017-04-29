import React from 'react';
import axios from 'axios';

export default class SingleRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props, {
            recipe: {}
        });
        this.onChangePlus = this.onChangePlus.bind();
        this.onChangeMinus = this.onChangeMinus.bind();
    }

    componentDidMount() {
        let recipe = this.props.params;
        axios.get(`/api/recipes/${recipe.id}`)
            .then(recipe => {
                recipe = recipe.data;
                this.setState({ recipe });
            });
    }

    onChangePlus(event) {
        console.log("i'm here:", this.state);

        let newRating = this.state.recipe.rating + 1;
        this.setState({
            recipe: update(this.state.recipe, {rating: newRating})
        })
    }

    onChangeMinus(event) {
        let newRating = this.recipe.rating - 1;
        this.setState({
            recipe: update(this.state.recipe, {rating: newRating})
        })
    }




    render() {
        const recipe = this.state.recipe;
        return (
            <div>
                <div className = "row">
                    <div className = "col m12">
                        <div className = "col m6">
                            <div className="section">
                                <h5>{ recipe.name }</h5>
                                <p>{ recipe.content }</p>
                                <p>{ recipe.rating }</p>
                            </div>
                        </div>
                        <div className = "col m6">
                            <div className = "container">
                                <img src = { recipe.image } />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className = "col m12">
                        <button onClick = { this.onChangePlus } className="btn waves-effect waves-light btn-block btn-primary">Like it!</button>
                        <button onClick = { this.onChangeMinus } className="btn waves-effect waves-light btn-block btn-primary">Meh.. </button>
                        <button className="btn waves-effect waves-light btn-block btn-primary">Save this recipe!</button>
                    </div>
                </div>
            </div>
        );
    }
}
