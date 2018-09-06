import { connect } from 'react-redux';
import { PhoneListContainer } from './PhoneListContainer';
import { fetchPhoneList } from '../redux/actions/phoneList';

const mapStateToProps = state => {
    return {
        list: state.phones.list,
        loading: state.phones.loading,
    };
}

const mapDispatchToProps = {
    fetchPhoneList
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);