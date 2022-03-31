import styles from "./brand-section.module.css"
import Card from "../tools-section/cards/card"
import phpstorm from "./brand-icons/phpstorm.svg"
import procreate from "./brand-icons/procreate.svg"
import zeplin from "./brand-icons/zeplin.svg"
import toolbox from "./brand-icons/toolbox.svg"
import microsoft from "./brand-icons/microsoft.svg"
import google from "./brand-icons/google.svg"
import slack from "./brand-icons/slack.svg"
import wordpress from "./brand-icons/wordpress.svg"

export default function BrandSection() {
  return (
    <section>
      <div className="container">
        <div className={styles.brandsCover}>
          <div className={styles.brands}>
            <div className={styles.title}>
              <h1>Trusted more than 150+ brand</h1>
            </div>
            <div className={styles.brandIcons}>
              <img src={microsoft} alt="microsoft" />
              <img src={google} alt="google" />
              <img src={slack} alt="slack" />
              <img src={wordpress} alt="wordpress" />
            </div>
          </div>
        </div>
        <div className={styles.toolsContainer}>
          <div className={styles.newcomer}>
            <h1>Newcomer Tools</h1>
            <p>
              Wow! see the latest update of the most recommended tools from
              reliable designers and developers
            </p>
            <a href="/" className="btn">
              Explore more
            </a>
          </div>
          <div className={styles.cardSection}>
            <Card
              logo={zeplin}
              header="Zeplin"
              subHeader="Free & Paid"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              small
            />

            <Card
              logo={phpstorm}
              header="PHPStorm"
              subHeader="Free"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              small
            />

            <Card
              logo={toolbox}
              header="Toolbox"
              subHeader="Free"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              small
            />

            <Card
              logo={procreate}
              header="Procreate"
              subHeader="Paid"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              small
            />
          </div>
        </div>
      </div>
    </section>
  )
}
