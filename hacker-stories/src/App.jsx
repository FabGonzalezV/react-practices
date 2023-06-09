import * as React from 'react';

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
];

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
  ];
  // A callback handler gets
  //   introduced as event handler(A), is passed as function in props to another component(B), is executed
  //   there as callback handler(C), and calls back to the place it was introduced(D):

  //A
  const handleSearch = (event) => {
    //d
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Pruebas</h1>
      {/* //B */}
      <Search onSearch={handleSearch} />
      <hr />
      <br />

      <List list={stories} />
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
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    //C
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="Search"></label>
      <input id='Search' type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
}
export default App;