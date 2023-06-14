import * as React from 'react';



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

  const [searchTerm, setSearchTerm] = React.useState("");
  // A callback handler gets
  //   introduced as event handler(A), is passed as function in props to another component(B), is executed
  //   there as callback handler(C), and calls back to the place it was introduced(D):

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
      <Search onSearch={handleSearch} />
      <hr />
      <br />
      <span>{searchTerm}</span>
      <List list={searchedStories} />
    </div>



  );
}

function List(props) {
  return (
    <ul>
      {props.list.map(function (item) {
        return (
          <Item key={item.objectID} item={item} />


        );
      })}
    </ul>
  );
}
const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

function Search(props) {


  return (
    <div>
      <label htmlFor="Search"></label>
      <input id="search" type="text" onChange={props.onSearch} />
    </div>
  );
}
export default App;