import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {Image, Title, Desc} from '../Common/Common';

const Container =  ({ className, children }) => (
  <div
    className={classnames('col-md-6 col-lg-4', className)}
    style={{marginBottom: '2rem'}}
    >
    {children}
  </div>
);

class Article extends Component {
  render() {
    const data = this.props.general.articleList;
    return (
      <Container>
        <Image className='rounded'/>
        <div className='row'>
          <div className='col-md-12'>
            <Title>{data[this.props.seq].title}</Title>
            <Desc>
              {data[this.props.seq].description}
            </Desc>
          </div>
        </div>
      </Container>
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