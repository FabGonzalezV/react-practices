import * as React from 'react';


const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );
  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);
  return [value, setValue];
};
function App() {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'express',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 2,
    },
  ];

  const [searchTerm, setSearchTerm] = useStorageState(
    'search',
    'React');
  // A callback handler gets
  //   introduced as event handler(A), is passed as function in props to another component(B), is executed
  //   there as callback handler(C), and calls back to the place it was introduced(D):

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);
  //A
  const handleSearch = (event) => {
    //d
    setSearchTerm(event.target.value);
    
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Pruebas</h1>
      {/* //B */}
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <br />
      <span>{searchTerm}</span>
      <List list={searchedStories} />
    </div>



  );
}

// Variation 2: Spread and Rest Operators
const List = ({ list }) => (
  <ul>
    {list.map(({ objectID, ...item }) => (
      <Item key={objectID} {...item} />
    ))}
  </ul>
);
const Item = ({ title, url, author, num_comments, points }) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);
const Search = ({ search, onSearch }) => (
  <>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      value={search}
      onChange={onSearch}
    />
  </>
);
export default App;