import React, { Component } from 'react';
import { List } from 'antd';
import { PhoneListItem } from './components/PhoneListItem';
import { PhoneDetailComponent } from './components/PhoneDetailComponent';
import './styles.css';


export class PhoneListContainer extends Component {
    componentDidMount() {
        this.props.fetchPhoneList();
    }

    render() {
        const { list, loading } = this.props;

        return (
            <div>
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
                    renderItem={item => (<PhoneListItem showDetail={item => this.refs.phoneDetail.show(item)} item={item} />)}
                />
                
                <PhoneDetailComponent ref="phoneDetail" />
            </div>
        );
    }
}
