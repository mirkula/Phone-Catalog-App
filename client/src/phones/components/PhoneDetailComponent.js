import React, { Component } from 'react';
import { Row, Col, Card, Modal } from "antd";

export class PhoneDetailComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            visible: false,
            item: {}
        }

        this.show = this.show.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    
    show(item) {
        this.setState({
            visible: true,
            item
        });
    }

    handleCancel() {
        this.setState({
            visible: false,
        });
    }

    render() {
        const { item } = this.state;
        return (
            <Modal
                title={item.title}
                visible={this.state.visible}
                footer={null}
                onCancel={this.handleCancel}
                width="90%"
            >
                <Row gutter={32}>
                    <Col sm={8}>
                        <Card
                            className="image-wrap"
                            cover={<img alt="example" src={item.image} />}
                            >
                        </Card>
                    </Col>
                    <Col sm={14}>
                        <p><b>Model name:</b> {item.title}</p>
                        <p><b>Description:</b> {item.description}</p>
                        <p><b>More Information:</b> {item.content}</p>
                        <p><b>Price:</b> {item.price}</p>
                        <p><b>Available Color:</b> {item.color}</p>
                    </Col>
                </Row>
            </Modal>
        );
    }
}
