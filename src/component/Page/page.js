import React, { Component } from 'react'
import PageProject from './Project/project'
import PageAbout from './About/about'
import PageContact from './Contact/contact'


function Page({PageName}) {
  if (PageName == 'project') {
    return (
      <div>
      <PageProject />
      </div>
    )
  }else if (PageName == 'about') {
    return (
      <div>
      <PageAbout />
      </div>
    )
  }else if (PageName == 'contact') {
    return (
      <div>
      <PageContact />
      </div>
    )
  }

}

export default Page
