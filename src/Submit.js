import React, {Component} from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ChooseCategory from './ChooseCategory'
import './Submit.css'

class Submit extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title:'',
      description: '',
      category: this.props.categories[0]._id || '',
      image:'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
    }
  }
  

  setCategory = (id) => {
		this.setState({
			category: id
		})
	}

    //Render
    render() {
    return (
            <Form className="submitform" 
              onSubmit={(e) => {
                e.preventDefault();
                this.props.createProduct({
                  title: this.state.title, 
                  description: this.state.description, 
                  category: this.state.category,
                  image: this.state.image
                  })
                }
              }
            >

              <FormGroup row>
                <Label for="exampleEmail" sm={2}>Titel</Label>
                <Col sm={5}>
                  <Input type="text" name="Title" placeholder="Trag 'nen Titel ein" onChange={(e) => this.setState({title:e.target.value})}/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" sm={2}>Kategorie</Label>
                <Col sm={5}>
                 
                  <select>
                    {
                      this.props.categories && this.props.categories.map((c) => {  
                         return (<ChooseCategory setCategory={this.setCategory} categories={this.state.categories} category={c} key={c._id} />)
                       })
                    }
                  </select>


                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText"  sm={2}>Beschreibung</Label>
                <Col sm={5}>
                  <Input type="textarea" placeholder="Beschreibe, was du anzubieten hast" name="text" id="submitdescr" onChange={(e) => this.setState({description:e.target.value})} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={2}>Bild</Label>
                <Col sm={5}>
                  <Input type="textarea" placeholder="Link vom Bild einfügen" name="text" id="submitpic" onChange={(e) => this.setState({image:e.target.value})} />
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 5, offset: 2 }}>
                  <Button className="submitProductButton">Abschicken</Button>
                </Col>
              </FormGroup>
            </Form>
          );
  } 
}

export default Submit