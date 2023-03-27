import React from 'react';

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="footer">
        <p>
          Created by
          <a href="https://github.com/abenaTenkorang">
            {' '}
            <i> Abigail Boateng</i>
          </a>
          . The source code is licensed
          <a href="https://github.com/abenaTenkorang/MIT/blob/main/MIT.md"> MIT</a>
        </p>
        <p> &copy; 2023 - Todo-App || All rights all reserved</p>
      </footer>
    );
  }
}

export default Footer;
