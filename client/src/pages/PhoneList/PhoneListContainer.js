import { connect } from 'react-redux';
import { PhoneList } from './PhoneList';
import { fetchPhoneList, setRecord } from '../../redux/actions/phoneList';

const mapStateToProps = state => {
    return {
        list: state.phones.list,
        loading: state.phones.loading,
    };
}

const mapDispatchToProps = {
    fetchPhoneList,
    setRecord
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);