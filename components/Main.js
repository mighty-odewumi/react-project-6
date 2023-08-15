export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark main-section-dark" : ""}>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Created by Facebook engineer Jordan Walke.</li>
        <li>Has over 100k stars on Github</li>
        <li>Used by a lotta enterprise apps and softwares</li>
        <li>Actively maintained by the data giant Facebook</li>
      </ul>
    </main>
  )
}