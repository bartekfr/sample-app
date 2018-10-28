import {
  searchUsers,
} from './usersSelectors';

let mockState = {};

describe('Users selector', () => {
  beforeEach(() => {
    mockState = {
      users: {
        data: [{
          name: 'John',
          username: 'Doe',
          email: 'johndoe@test.com',
        }, {
          name: 'Alan',
          username: 'Kowalski',
          email: 'alankowalski@test.com',
        }, {
          name: 'John',
          username: 'Nowak',
          email: 'test@test.com',
        }, {
          name: 'Helen',
          username: 'Nowak',
          email: 'test2@test.com',
        }, {
          name: 'Mark',
          username: 'Zord',
          email: 'zord@test.com',
        }, {
          name: 'Megan',
          username: 'King',
          email: 'mk@test.com',
        }],
      },
    };
  });

  it('Searches users', () => {
    const users = mockState.users.data;

    let expectedData = [users[0]];
    expect(searchUsers(mockState.users.data, 'Doe')).toEqual(expectedData);

    expectedData = [users[2], users[3]];
    expect(searchUsers(mockState.users.data, 'nowak')).toEqual(expectedData);

    expectedData = [users[0], users[2]];
    expect(searchUsers(mockState.users.data, 'john')).toEqual(expectedData);

    expectedData = [];
    expect(searchUsers(mockState.users.data, 'jackson')).toEqual(expectedData);

    expectedData = [users[1]];
    expect(searchUsers(mockState.users.data, 'kowalski')).toEqual(expectedData);

    expectedData = [users[5]];
    expect(searchUsers(mockState.users.data, 'mk@test')).toEqual(expectedData);
  });
});
