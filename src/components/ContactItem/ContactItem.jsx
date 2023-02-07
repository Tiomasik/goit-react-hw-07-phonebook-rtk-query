import PropTypes from 'prop-types';

import { useDeleteContactMutation } from '../../redux/contactsSlice'
import { Item, IconSmile, IconPhone } from "./ContactItem.styled";

const ContactItem = ({ name, number, id }) => {
    const [deleteContact ] = useDeleteContactMutation();

    return (
        <>
            <div>
                <Item><IconSmile /><span>{name}</span></Item>
                <Item><IconPhone/><span>{number}</span></Item>
            </div>
            <button type="button" onClick={() => deleteContact(id)}>Delete contact</button>
        </>)
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default ContactItem