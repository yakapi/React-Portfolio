import React, { Component } from 'react'
import PageProjectStyle from './project.module.css'
import Menu from '../../Menu/menu'
import Navigation from '../../Navigation/nav'

import BtnMore from '../../Button/button_more'

import ContactForm from './ContactForm/contact'
// init("user_UCJ5x8NfybIfSzO3bupff");


class PageProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      showMenu: false,
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false

    }
  }
  toggleMenu = (e)=>{
    if (this.state.showMenu == false) {
      this.setState({showMenu: !this.state.showMenu})
      setTimeout(()=>{
        this.setState({menu1: !this.state.menu1})
        setTimeout(()=>{
          this.setState({menu2: !this.state.menu2})
          setTimeout(()=>{
            this.setState({menu3: !this.state.menu3})
            setTimeout(()=>{
              this.setState({menu4: !this.state.menu4})
            },200)
          },200)
        },200)
      },600)
    }else{
      this.setState({menu4: !this.state.menu4})
      setTimeout(()=>{
        this.setState({menu3: !this.state.menu3})
        setTimeout(()=>{
          this.setState({menu2: !this.state.menu2})
          setTimeout(()=>{
            this.setState({menu1: !this.state.menu1})
            setTimeout(()=>{
              this.setState({showMenu: !this.state.showMenu})
            },200)
          },200)
        },200)
      },200)
    }
  }
  render() {


    return (
      <div className={PageProjectStyle.page_content}>
        <Menu
        showMenu={this.state.showMenu}
        menu1={this.state.menu1} menu2={this.state.menu2}
        menu3={this.state.menu3} menu4={this.state.menu4}
        menuToggle={this.toggleMenu}/>
        <Navigation stateMenu={this.state.showMenu} toggleClick={this.toggleMenu}/>
        <ScreenContact />
      </div>
    )
  }
}

export default PageProject

class ScreenContact extends Component{
  componentDidMount(){
  }

  render(){
    return(
      <div className={PageProjectStyle.screen_view}>
        <ContactForm />
      </div>
    )
  }
}
