import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                id: 1,
                title: 'Golf MK-1',
                img: 'golf_1.jpg',
                desc: 'Реставрація самої першої моделі Golf MK-1. Підійде для тих, кому подобається швидкість, та все рівно на комофрт',
                category: 'Раритетні автомобілі',
                price: '15000'
                },
                {
                    id: 2,
                    title: 'Golf 9',
                    img: 'golf_2.jpg',
                    desc: 'Новий та сучасний Golf 9 моделі не залишить байдужими ні одного водія, данний автомобіль вразить вас на всі 100%',
                    category: 'Нові автомобілі',
                    price: '150000'
                },
                {
                    id: 3,
                    title: 'Golf 5',
                    img: 'golf_3.jpg',
                    desc: 'Автомобіль бувший у використанні, відремонтований, замінені всі важливі компоненти та в тому числі двигун, ідеальний кандидант для першого автомобіля',
                    category: 'Автомобіль з пробігом',
                    price: '30000'
                },
                {
                    id: 4,
                    title: 'Caddy 5',
                    img: 'caddy_1.jpg',
                    desc: 'Легендарний VW Caddy 5, ідеальна машина для повсякдення: поїздки на природу, перевезення речей та багато іншого стане легше завдяки цьому автомобілю',
                    category: 'Універсал',
                    price: '190000'
                },
                {
                    id: 5,
                    title: 'Transporter',
                    img: 'vw_transporter.jpg',
                    desc: 'Легенда серед бусиків у всьому світі. Один із перших VW Transporter, данний автомобіль підійде як для поїздки на море великою компанією, так і для створення свого перщого дому на колесах',
                    category: 'Міні бус',
                    price: '51000'
                },

            ],
            showFullItem: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }
    render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

          {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} item={this.state.fullItem} />}
        <Footer />
      </div>
  )
    }

    onShowItem(item){
        this.setState({fullItem: item})
        this.setState( {showFullItem: !this.state.showFullItem} )
    }

    chooseCategory(category){
        if (category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id) })
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })
        if(!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;
