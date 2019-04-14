import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: rgba(204,144,135,0.8);
`;

const Text = ({ className, children }) => (
  <div 
    className={classnames('col-12', className)}
    style={{fontFamily: ''}}
  >
    {children}
  </div>
);

const Title = styled(Text)`
  font-size: 2rem;
  font-weight: bold;

  /* RWD */
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const Desc = styled(Text)`
  font-size: 1.25rem;
  text-align: left;
  color: rgba(0,0,0,.54)!important;

  /* RWD */
    @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

class Article extends Component {
  render() {
    const data = this.props.general.articleList;
    return (
      <div className='col-md'>
        <Image className='rounded'/>
        <div className='row'>
          <Title>{data[this.props.seq].title}</Title>
          <Desc>
          {data[this.props.seq].description}
          </Desc>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  general: PropTypes.shape({
    articleList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

const mapStateToProps = state => ({
  ...state,
 });

export default connect(mapStateToProps)(Article);