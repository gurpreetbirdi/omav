import React from 'react';
//import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
//import { Button } from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.css';

class Lowerbar extends React.Component {
  render() {
    return (
      <Pagination size="lg">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}
export default Lowerbar;
