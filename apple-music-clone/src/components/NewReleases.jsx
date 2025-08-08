import { Col, Card } from "react-bootstrap"
import { useEffect, useState } from "react"
import "./NewReleases.css"

const endPoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

const arrayOfArtists = [
  "eminem",
  "metallica",
  "infected mushroom",
  "avenged sevenfold",
  "limp bizkit",
  "zhu",
  "korn",
  "boris brejcha",
]

const getRandomArtist = () => {
  const indexOfArraOfArtists = Math.floor(Math.random() * arrayOfArtists.length)
  return arrayOfArtists[indexOfArraOfArtists]
}

function NewReleases() {
  const [releases, setReleases] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const query = getRandomArtist()

    fetch(endPoint + query)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(`An error has occured during API call`)
        }
      })
      .then((data) => {
        setReleases(data.data)
      })
      .catch((err) => {
        console.log(`An error has occured: `, err)
        setError(`Failed to load New Releases`)
      })
  }, [])

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {releases.slice(0, 12).map((track, index) => (
        <Col key={index} sm={6} md={2} className="mt-2">
          <Card className="newReleasesCard">
            <Card.Img
              className="rounded-3"
              variant="top"
              src={track.album.cover_medium}
              alt={track.title}
            />
            <Card.Body className="cardBody d-flex flex-row justify-content-between p-0 pt-1">
              <div>
                <Card.Text className="mb-1">
                  {track.artist.name.length > 12
                    ? track.artist.name.slice(0, 11) + "..."
                    : track.artist.name}
                </Card.Text>
                <Card.Text>
                  {track.title.length > 16
                    ? track.title.slice(0, 15) + "..."
                    : track.title}
                </Card.Text>
              </div>
              <i class="bi bi-explicit-fill"></i>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default NewReleases
