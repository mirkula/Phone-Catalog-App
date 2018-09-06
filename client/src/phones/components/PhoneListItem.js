import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';

export class PhoneListItem extends Component {
    render() {
        const { item, showDetail } = this.props;

        return (
            <div className="list-item" onClick={() => showDetail(item)}>
                <List.Item
                    key={item.title}
                    actions={[<span>
                        <Icon type="star-o" style={{ marginRight: 8 }} />
                        {item.stars}
                    </span>]}
                    extra={<img style={{ width: "210px", marginBottom: "10px" }} alt="logo" src={item.image} />}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={item.title}
                        description={item.content}
                    />
                        <p>Price: {item.price}</p>
                </List.Item>
            </div>
        );
    }
}