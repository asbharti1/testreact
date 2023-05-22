import React, { useEffect, useState, } from "react";
import { Card, Modal } from 'antd';
import {
    GlobalOutlined,
    MailOutlined,
    PhoneOutlined,
    EditOutlined,
    DeleteOutlined,
    HeartTwoTone
} from "@ant-design/icons";
import FormModel from './form';
import {fetchingDetails, fetchDetailsSucceeded} from '../redux/details/action'
import {details} from '../redux/details/reducer'
import {useSelector, useDispatch, connect} from 'react-redux'


const About = () => {
    const [data, setData] = useState([]);
    
    const [error, setError] = useState([]);
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const [likeActive, setLikeActive] = useState(false)
    const [dislikeActive, setdisLikeActive] = useState(false)

    const [showForm, setShowForm] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
   // const data = useSelector(state => state.details.details);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const DislikeAct = () => {
        setdisLikeActive(!dislikeActive)
        setDislikes(dislikeActive ? dislikes - 1 : dislikes + 1)
    }
    const LikeAct = () => {
        setLikeActive(!likeActive)
        setLikes(likeActive ? likes - 1 : likes + 1)
    }

   

    const showFrm = () => {
        setShowForm(!showForm);
    }

     useEffect(() => {
        fetch('https://raw.githubusercontent.com/amans2k/amans2k.github.io/master/users.json')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => {
                setError(err.message);
                setData(null);
            })

    }, [data]);

    // useEffect(() => {
    //     dispatch(fetchingDetails());
    // },[])


    return (
        <div style={{ textAlign: 'left' }}>
            <h4 >Objectives</h4>
            <ul>
                <p>Create a listing page of 10 profiles like shown below </p>
            </ul>
        
            {data.map((product, i) => (
                <div className="row" key={i}>
                    
                    <Card >
                        <Card.Grid  >
                            <img src="https://avatars.dicebear.com/v2/avataaars/{{username}}.svg" alt="Mountain" style={{ width: '100px' }} />
                            <div> 
                                <ul>
                                    <h5>{product.name}</h5>
                                </ul>

                                <ul>
                                    <MailOutlined />
                                    {product.email}</ul>
                                <ul>
                                    <PhoneOutlined />
                                    {product.phone}</ul>
                                <ul>
                                    <GlobalOutlined />
                                    {product.website}</ul>
                            </div>
                            <div className="row row-cols-3" style={{ display: 'flex' }}>
                                <div className="col" style={{ marginLeft: '10%' }} onClick={LikeAct}><HeartTwoTone twoToneColor="#eb2f96" /></div>
                                <div className="col" style={{ marginLeft: '30%' }} onClick={showModal}><EditOutlined />
                                </div>
                                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                    <FormModel />
                                </Modal>

                                <div className="col" style={{ marginLeft: '30%' }}><DeleteOutlined /></div>
                            </div>
                            {/* {showForm && (
                                        <form>
                                        <Form/>
                                        </form>
                                    )} */}
                        </Card.Grid>

                    </Card>
                </div>)

            )};
        </div>
    );
};

const mapStateToProps = state => ({
    data: state.details.getDetails,
  
 });
 
 const mapDispatchToProps = {
    fetchingDetails
 };
 
 export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(About);

//export default About;