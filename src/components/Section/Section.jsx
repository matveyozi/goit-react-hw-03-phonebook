import React from 'react'
import cssModule from './Section.module.css'
export default function Section({children}) {
  return (
	<section className={cssModule.section}>{children}</section>
  )
}
