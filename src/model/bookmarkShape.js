import PropTypes from 'prop-types';

export const bookmarkShape = PropTypes.shape({
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.number,
  frequency: PropTypes.number,
  index: PropTypes.number
});
