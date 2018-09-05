import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Card } from "antd";
import IconText from '../../components/IconText';
import './styles.css';

export class PhoneDetail extends Component {
    render() {
        const { record } = this.props;
        return (
            <div>
                <p>
                    <Link to="/"><IconText type="double-left" text="Back" /></Link>
                </p>
                <Row gutter={32}>
                    <Col sm={8}>
                        <Card
                            className="image-wrap"
                            cover={<img alt="example" src={record.image} />}
                        >
                        </Card>
                    </Col>
                    <Col sm={14}>
                        <p><b>Model name:</b> {record.title}</p>
                        <p><b>Description:</b> {record.description}</p>
                        <p><b>More Information:</b> {record.content}</p>
                        <p><b>Price:</b> {record.price}</p>
                        <p><b>Available Color:</b> {record.color}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}
