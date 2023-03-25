import { FilterInput, FilterLabel } from "./Filter.styled"
import PropTypes from 'prop-types';

export const Filter = ({filter, OnChange}) => {
    return (
            <FilterLabel>
                Find contacts by name
                 <FilterInput type="text" value={filter} onChange={OnChange} />
            </FilterLabel>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
}