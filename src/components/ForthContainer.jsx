import React, { useState, useEffect } from 'react';
import '../styles/thirdContainer.scss';
import '../styles/forthContainer.scss';
import { Container, Row, Col, Card, CardGroup, Button, Form } from 'react-bootstrap';
import { importantPeopleData } from '../constants/constants';
import '@brainhubeu/react-carousel/lib/style.css';
import ModalComponent from '../common/ModalComponent';
import { ReactComponent as UserIcon } from '../assets/user.svg';
import { ReactComponent as DeleteIcon } from '../assets/garbage.svg';
import { ReactComponent as CancelIcon } from '../assets/cancel.svg';


const ForthContainer = () => {
    const [userIndex, setUserIndex] = useState(0);
    const [userState, setUserState] = useState({
        image: './assets/4-people/demo-user-avatar.jpeg',
        name: '',
        desination: '',
        discription: '',
    })
    const [state , setState] = useState([]);
    const [show, setShow] = useState(false);
    const [isView, setIsView] = useState(false);
    const [remove, setRemove] = useState([]);


    const handleShow = () => {
        setShow(true);
        setUserState({
            image: './assets/4-people/demo-user-avatar.jpeg',
            name: '',
            desination: '',
            discription: '',
        })
    }
    const handleClose = () => {
        setShow(false)
        setUserState({
            image: '',
            name: '',
            desination: '',
            discription: '',
        })
    };

    const handleHide = () => setIsView(false);
    const handleView = (data) => {
        console.log(data, "src={data.image}")
        setIsView(true)
        setUserState({
            ...userState,
            ...data,
        })
    }




    let peoples = JSON.parse(localStorage.getItem("peopleList"));
    const initialState = JSON.stringify(importantPeopleData.peopleList);


    useEffect(() => {
        if(!peoples){
            localStorage.setItem("peopleList", initialState);
        }
        setState(peoples)
    }, [])

    const handleSelectUsers = (selectedIndex) => {
        setUserIndex(selectedIndex);
    };

    const setUserData = (userList) => {
        setState(userList)
        const userDataList = JSON.stringify(userList);
        localStorage.setItem("peopleList", userDataList);
    }

    const handleEdit = (data, index) => {
        handleShow()
        setUserIndex(index)
        setUserState({ 
            ...userState,
            ...data,
        })
    }

    const onChangeInput = (e) => {
        const { value, name } = e.target;
        setUserState({
            ...userState,
            [name] : value
        })
    }

    const handleSelect = (index) => {
        if(remove.length){
            if(remove.includes(index)){
                const removeSelected = remove.filter(item => item !== index)
                setRemove(removeSelected)
            }else{
                setRemove(remove.concat([index]))
            }

        }else{
            setRemove(remove.concat([index]))
        }
    }

    const handleCancel = () => {
        setRemove([])
    }

    const handleDelete = ()=>{
		const myArray = state.filter((todo, todoIndex) => {
          return !remove.includes( todoIndex )
    	})
        setTimeout(() => {
            setRemove([])
        }, 100)
        setUserData(myArray)
	}

    const handleSave = () => {
        let newArrayState = state
        if(userIndex){
            newArrayState[userIndex] = userState
        } else {
            newArrayState.push(userState)
            setState(newArrayState);
        }
        setUserData(newArrayState)
        setTimeout(() => {
            handleClose();
        }, 200)
    }

    const cardItem = (data, index) => {
        return (
            <Card className="people-item-box noBorder" key={index} >
                <span className={`select-user ${remove.includes(index) ? '' : 'un-checked'}`} onClick={() => handleSelect(index)}>
                    {remove.includes(index) ? <img src={"./assets/7-icons/checked.svg"} /> : ""}
                </span>
                <span className="edit-info" onClick={() => handleEdit(data, index)}>
                    <img src={"./assets/7-icons/pencil.svg"} />
                </span>
                <span className="img-cover" onClick={() => handleView(data)}></span>
                <Card.Img variant="top" src={data.image} />
                <Card.Body onClick={() => handleView(data)}>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        {data.desination}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        <>
            <div className="third-container">
                <Container fluid="md">
                    <div className="third-container-label">
                        <Row>
                            <Col xs={12} md={6}>
                                <span>
                                    <img src={importantPeopleData.icon} />
                                </span>
                                <h1>
                                    {importantPeopleData.headerTitle}
                                </h1>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="twin-tabs">
                                    {remove && remove.length ? 
                                    <>
                                        <Button className="edit-tab" onClick={() => handleCancel()}>Cancel</Button> 
                                        <span className="delete-icon" onClick={() => handleDelete()}>
                                            <DeleteIcon />
                                        </span>
                                    </>
                                    : 
                                    <Button className="add-tab" onClick={() => handleShow()}>Add</Button>
                                    }
                                    
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="people-container">
                        <CardGroup>
                            {state && state.length && state.map((item, index) => {
                                return cardItem(item, index)
                            })}
                        </CardGroup>
                    </div>
                </Container>
            </div>
            <ModalComponent 
                show={show}
                header={"Add People"}
                handleClose={handleClose}
                handleShow={handleShow}
                hanndleSave={handleSave}
                content={
                    <div className="form-wrapper">
                        <div className="avater-image-box">
                            <span className="avatar-user">
                                {userState.image && (userState.image !== './assets/4-people/demo-user-avatar.jpeg') ? 
                                    <img src={userState.image} />
                                    :
                                    <UserIcon />
                                }
                            </span>
                        </div>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="name" onChange={onChangeInput} value={userState.name} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Position</Form.Label>
                                <Form.Control type="text" name="desination" placeholder="Enter position" onChange={onChangeInput} value={userState.desination} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Discription</Form.Label>
                                <Form.Control as="textarea" name="discription" rows={5} placeholder="Enter discription" onChange={onChangeInput} value={userState.discription}/>
                            </Form.Group>
                        </Form>
                    </div>
                }
            />
             <ModalComponent 
                show={isView}
                noHeader
                noFooter
                handleClose={handleHide}
                handleShow={() => setIsView(true)}
                modalClassName={"ViewModal-box"}
                content={
                    <div className="view-modal">
                        <div className="image-view">
                            <img src={userState.image} />
                        </div>
                        <div className="view-content">
                            <div className="header">
                                <h5>{userState.name}</h5>
                                <span onClick={() => handleHide()}><CancelIcon /></span>
                            </div>
                            <p>{userState.desination}</p>
                            <div className="discription-data">
                                <span>{userState.discription}</span>
                            </div>
                        </div>
                    </div>
                }
            />
        </>
    )
}

export default ForthContainer;