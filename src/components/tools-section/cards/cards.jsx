import styles from "./cards.module.css"
import LoadBtn from "../load-btn/load-btn"
import Card from "./card"
import slack from "../cards/icons/slack.svg"
import invision from "../cards/icons/in.svg"
import notion from "../cards/icons/notion.svg"
import sketch from "../cards/icons/sketch.svg"
import studio from "../cards/icons/stuio.svg"
import figma from "../cards/icons/figma.svg"

export default function Cards() {
  return (
    <>
      <div className={styles.container}>
        <Card
          logo={figma}
          header="Figma"
          subHeader="Free"
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />

        <Card
          logo={sketch}
          header="Sketch"
          subHeader="Trial & Paid"
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />

        <Card
          logo={studio}
          header="Visual Studio Code"
          subHeader="Free"
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />

        <Card
          logo={notion}
          header="Notion"
          subHeader="Free & Paid"
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />

        <Card
          logo={slack}
          header="Slack"
          subHeader="Free & Paid"
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />

        <Card
          logo={invision}
          header="Invision"
          subHeader="Free & Paid"
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
      <LoadBtn />
    </>
  )
}
