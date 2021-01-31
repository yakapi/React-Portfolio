import React, { Component } from 'react'
import PageContactStyle from './contact.module.css'
import Menu from '../../Menu/menu'
import Navigation from '../../Navigation/nav'
import animopolis from './animopolis.jpg'
import bombermeuh_mock from './bombermeuh-all.png'
import wordpress from './wordpress.svg'
import javascript from './javascript.svg'
import arrow from './right.svg'
import bombermeuh from './bomber_affiche.jpg'
import BtnMore from '../../Button/button_more'


class PageContact extends Component {
  constructor(props){
    super(props)
    this.state = {
      showMenu: false,
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      arrowState: false,
      arrowCount: 0
    }
  }
  toggleMenu = (e)=>{
    if (this.state.showMenu === false) {
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
  arrowRight = (e) => {
      console.log('right');
      if (this.state.arrowState === false) {
        if (this.state.arrowCount !== 1) {
          this.setState({arrowCount: this.state.arrowCount + 1})
          this.setState({arrowState: true})
          setTimeout(()=>{
            this.setState({arrowState: false})
          },2000)
        }
      }
  }
  arrowLeft = (e) => {
    console.log('left');
    if (this.state.arrowState === false) {
      if (this.state.arrowCount !== 0) {
        this.setState({arrowCount: this.state.arrowCount - 1})
        this.setState({arrowState: true})
        setTimeout(()=>{
          this.setState({arrowState: false})
        },2000)
      }
    }
  }
  render() {
    return (
      <div className={PageContactStyle.body_view}>
        <Menu
        showMenu={this.state.showMenu}
        menu1={this.state.menu1} menu2={this.state.menu2}
        menu3={this.state.menu3} menu4={this.state.menu4}
        menuToggle={this.toggleMenu}/>
        <Navigation stateMenu={this.state.showMenu} toggleClick={this.toggleMenu}/>
        <ScreenView count={this.state.arrowCount}/>
          <Arrow side='left' eClick={this.arrowLeft}/>
          <Arrow side='right' eClick={this.arrowRight}/>
      </div>
    )
  }
}

export default PageContact

class ScreenView extends Component {
  componentDidMount(){

  }
  render(){
    let opacityP1 = 1
    let opacityP2 = 0
    if (this.props.count === 1) {
      opacityP1 = 0
      opacityP2 = 1
    }
    if (this.props.count === 0) {
      opacityP1 = 1
      opacityP2 = 0
    }
    const TableProjet = [
      {
        titre_projet: 'Animopolis',
        type_projet: 'Animalerie',
        role: 'Intégrateur',
        date: 'Juin-2020',
        describe: 'Site Vitrine construit en WordPress pour une animalerie',
        number: '01',
        image_affiche: animopolis,
        image_mockup: bombermeuh_mock,
        image_techno: wordpress,
        color: '#CCA841',
        opacity: opacityP1,
        concept: 'A partir d’un projet commandité par Animopolis, il m’a été demandé de réaliser un site-vitrine de son espace d’animalerie. L’objectif était de concevoir un site-vitrine moderne et respectant la charte graphique de son image de marque.'
      },
      {
        titre_projet: 'BomberMeuh',
        type_projet: 'Jeu Arcade',
        role: 'Développeur',
        date: 'Novembre-2019',
        describe: 'RunTime Game , pure javascript sans librairie',
        number: '02',
        image_affiche: bombermeuh,
        image_mockup: bombermeuh_mock,
        image_techno: javascript,
        color: '#6F0128',
        opacity: opacityP2,
        concept: 'A partir d’un projet de groupe, il m’a été demandé de réaliser un site-vitrine pour présenter un futur jeu mobile. L’objectif était de réaliser un site « One Page » permettant de présenter le jeu et les nouvelles mises à jour ainsi que d’avoir un aperçu démo du jeu.'
      }
    ]

    const AfficheProject = []
    for (var i = 0; i < TableProjet.length; i++) {
      AfficheProject.push(<ProjectCard affiche={TableProjet[i].image_affiche} key={i} type={TableProjet[i].type_projet}
                role={TableProjet[i].role} date={TableProjet[i].date}
                describe={TableProjet[i].describe} number={TableProjet[i].number}
                mockup={TableProjet[i].image_mockup} techno={TableProjet[i].image_techno}
                concept={TableProjet[i].concept} titre={TableProjet[i].titre_projet} color={TableProjet[i].color}
                opacity={TableProjet[i].opacity}
              />)
    }
    return(
      <div className={PageContactStyle.screen_view}>
        {AfficheProject}
      </div>
    )
  }
}


class ProjectCard extends Component {
  render(){

    let opacity = {
      opacity: ''+this.props.opacity+''
    }

    return(
      <div style={opacity} className={PageContactStyle.project_view}>
        <HeroProject affiche={this.props.affiche} titre={this.props.titre} type={this.props.type} />
        <Mockup role={this.props.role} number={this.props.number} concept={this.props.concept} mockup={this.props.mockup}
          color={this.props.color} describe={this.props.describe} techno={this.props.techno} date={this.props.date}  />
      </div>
    )
  }
}


class HeroProject extends Component {
  render(){
    let line2 = {
      transform: 'translateX(4vw)'
    }
    return(
      <div className={PageContactStyle.hero_container}>
        <div className={PageContactStyle.left_hero}>
        </div>
        <div className={PageContactStyle.right_hero}>
          <img className={PageContactStyle.image_project} alt={this.props.titre} width="100%" height="100%" src={this.props.affiche}/>
        </div>
        <div className={PageContactStyle.visite_zone}>
          <h2 className={PageContactStyle.titre_projet}>{this.props.titre}</h2>
          <div className={PageContactStyle.line_box}>
            <div className={PageContactStyle.line1}></div>
            <div style={line2} className={PageContactStyle.line1}></div>
          </div>
          <p className={PageContactStyle.type}>{this.props.type}</p>
          <BtnMore name='Visitez'/>
        </div>
      </div>
    )
  }
}


class Mockup extends Component{
  render(){
    let color_nb = {
      color: ''+this.props.color+''
    }
    return(
      <div>
        <div className={PageContactStyle.role_bar}>
          <div className={PageContactStyle.role_box}>
            <p className={PageContactStyle.role_titre} >ROLE</p>
            <h3 className={PageContactStyle.role_type} >{this.props.role}</h3>
          </div>
          <div className={PageContactStyle.role_box}>
            <p className={PageContactStyle.role_titre} >DATE</p>
            <h3 className={PageContactStyle.role_type} >{this.props.date}</h3>
          </div>
          <div className={PageContactStyle.role_box}>
            <p className={PageContactStyle.role_titre} >DESCRIPTIF</p>
            <h3 className={PageContactStyle.role_type} >{this.props.describe}</h3>
          </div>
        </div>
        <div  className={PageContactStyle.encard_mockup} >
          <img className={PageContactStyle.mockup} width='100%' height='100%' src={this.props.mockup} />
        </div>
        <div className={PageContactStyle.concept_box}>
          <div className={PageContactStyle.number_box}>
            <div className={PageContactStyle.line_nb}></div>
            <p style={color_nb} className={PageContactStyle.number}>{this.props.number}</p>
          </div>
          <h4 className={PageContactStyle.concept}>Concept</h4>
          <p className={PageContactStyle.story}>{this.props.concept}</p>
        </div>
        <div className={PageContactStyle.techno_box}>
          <div className={PageContactStyle.encard_techno}>
            <img width='100%' height='100%' src={this.props.techno} />
          </div>
        </div>
      </div>
    )
  }
}
 class Arrow extends Component{
   render(){
     let side = {}
     let rotate = {}

     if (this.props.side == 'right') {
       side = {
         right: '0'
       }
     }
     if (this.props.side == 'left') {
       rotate={
         transform: 'rotate(180deg)'
       }
     }

     return(
       <div style={side} className={PageContactStyle.arrow_zone}>
         <div onClick={this.props.eClick} className={PageContactStyle.encard_arrow}>
           <img style={rotate} src={arrow} height='100%' width='100%' />
         </div>
       </div>
     )
   }
 }
