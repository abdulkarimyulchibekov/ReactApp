import React from 'react'
import BoxBox from '../BoxBox/BoxBox'
import BoxItem from '../BoxItem/BoxItem'
import BoxList from '../BoxList/BoxList'
import "./box.scss"


function Box() {
  return (
    <>
    <div className="box">
      <BoxBox />
      <BoxList>
        <BoxItem number={449} text={"Resolved"}/>
        <BoxItem number={426} text={"Received"}/>
        <BoxItem number={"33m"} text={"Average first response time"}/>
        <BoxItem number={"3h 8m"} text={"Average response time"}/>
        <BoxItem number={"94%"} text={"Resolution within SLA"}/>
      </BoxList>
		</div>
    </>
  )
}

export default Box