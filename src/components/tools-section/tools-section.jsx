import Cards from "./cards/cards"
import styles from "./tools-section.module.css"

export default function ToolsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.title}>
          <h1>Most Popular Tools</h1>
          <p>
            Tools for the best Designers and Developers most popularly used in
            the world
          </p>
        </div>
        <Cards />
      </div>
    </section>
  )
}
