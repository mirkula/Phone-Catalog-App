import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { List, Avatar } from 'antd';
import IconText from '../../components/IconText';
import './styles.css';


export class PhoneList extends Component {
    componentDidMount() {
        this.props.fetchPhoneList();
    }

    render() {
        const { list, loading, setRecord } = this.props;

        return (
            <List
                className="phone-list"
                itemLayout="vertical"
                loading={loading}
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={list}
                renderItem={item => (
                    <Link 
                        to={`/${item.id}`}
                        className="list-item"
                        onClick={() => setRecord(item)}
                    >
                    <List.Item
                        key={item.title}
                        actions={[<IconText type="star-o" text={item.stars} />]}
                        extra={<img style={{width: "210px", marginBottom: "10px" }} alt="logo" src={item.image} />}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}   
                            title={item.title}
                            description={item.content}
                        />
                        <p>Price: {item.price}</p>
                    </List.Item>
                    </Link>
                )}
            />
        );
    }
}
