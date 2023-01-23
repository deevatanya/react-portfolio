import React, { useState } from 'react';
import './app.sass';
import '../profile-info/profile-info';
import ProfileInfo from '../profile-info/profile-info';
import ProfileTabs from '../profile-tabs/profile-tabs';
import Filter from '../content-filter/content-filter';


function App() {
  const [data, setData] = useState({
    portfolio: [
      {title: 'Kirill Lastovkin', description: 'aaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa', image:'', id: 1},
      {title: 'Tanya Deeva', description: 'aaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa', image:'', id: 2},
      {title: 'Ivan Ivanov', description: 'aaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa', image:'', id: 3},
      {title: 'Petya Petrov', description: 'aaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa', image:'', id: 4},
      {title: 'Bla Bla Bla', description: 'aaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa', image:'', id: 5}
    ],
    skills: []
  });
  const [term, setTerm] = useState('');

  const filterTitles = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.title.indexOf(term) > -1
    })
  }

  const visibleData = filterTitles(data, term);

  return (
    <div className='app'>
      <ProfileInfo />
      <div className='content-panel'>
        <Filter data={data}/>
        <ProfileTabs data={data} />
      </div>
    </div>
  )
}

export default App;
