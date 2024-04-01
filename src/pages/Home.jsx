import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { getUsers } from '../api';
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import Preloader from '../components/Preloader';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
    try {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleSortChange = useCallback((order) => {
    setSortOrder(order);
  }, []);

  const sortedAndFilteredUsers = useMemo(() => {
    return users
      .filter((user) => user.username.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => (sortOrder === 'asc' ? a.username.localeCompare(b.username) : b.username.localeCompare(a.username)));
  }, [users, searchTerm, sortOrder]);

  return (
    <section className='users'>
      <Helmet>
        <title>Home page</title>
        <meta name='description' content='Home page users description' />
      </Helmet>
      <div className='users__container'>
        <h1 className='users__title title title--l'>Users List</h1>
        <div className='users__controls'>
          <SearchBar onSearch={handleSearch} />
          <FilterBar onSortChange={handleSortChange} />
        </div>
        {isLoading ? (
          <Preloader />
        ) : users ? (
          <UserList users={sortedAndFilteredUsers} />
        ) : (
          <div>Unable to load users. Please try again later.</div>
        )}
      </div>
    </section>
  );
};

export default Home;
