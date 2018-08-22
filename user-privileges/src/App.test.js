import List from './components/List';
import React from 'react';
import { shallow } from 'enzyme';


describe ('List',() => {
  const fakeState = {
    columns: ['id','person'],
    users: [{
      id:1234,
      first_name:'test',
      last_name:'person',
      admin:true,
      underwriter:false,
      sales:true,
      reviewer:false,
    }]

  }
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(
      <List
      columns={fakeState.columns}
      users={fakeState.users}
      />
    )
  })

  it('Should have a table with rows populated with user data', () => {
    expect(
      wrapper.containsMatchingElement(<td>{fakeState.users[0].id}</td>)).toBe(true);
  });

})
