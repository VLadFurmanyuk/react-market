import React, {Component} from 'react';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'Раритетні автомобілі',
                    name: 'Раритетні автомобілі'
                },
                {
                    key: 'Нові автомобілі',
                    name: 'Нові автомобілі'
                },
                {
                    key: 'Автомобіль з пробігом',
                    name: 'Автомобіль з пробігом'
                },
                {
                    key: 'Універсал',
                    name: 'Універсал'
                },
                {
                    key: 'Міні бус',
                    name: 'Міні бус'
                },
            ]
        }
    }

    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        );
    }
}

export default Categories;