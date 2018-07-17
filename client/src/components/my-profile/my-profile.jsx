import * as React from "react"
import { Link } from 'react-router-dom'
import "./my-profile.css"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class MyProfile extends React.Component {
    render() {
      return (
            <div>
                <div>
                    NAVIGATION BAR
                </div>
                <h1>MY PROFILE PAGE</h1>
                <div className = "likedposts">
                    <h2>LIKED POSTS</h2>
                    <div>
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className = "myrecipes">
                    <h2>MY RECIPES</h2>
                </div>
                <div>
                    <Link to = "/">
                        <button type = "button">NEW POST</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default MyProfile

