import { connect } from 'react-redux';
import { PhoneDetail } from './PhoneDetail';

const mapStateToProps = state => {
    return {
        record: state.phones.record,
    };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneDetail);