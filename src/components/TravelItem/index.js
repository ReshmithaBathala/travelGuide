import './index.css'

const TravelItem = props => {
  const {travelDetails} = props
  const {description, imageUrl, name} = travelDetails
  return (
    <li className="travel-list-container">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="heading">{name}</h1>
      <p className="paragraph">{description}</p>
    </li>
  )
}

export default TravelItem
