import { Component } from 'react';

import './styles.css';

import { loadPosts } from '../../utils/load-posts'
import { Posts } from '../../components/Posts';

export class Home extends Component {

  state = {
    posts: []
  };


  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }


  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <Posts posts={posts} />
      </section>

    );
  }


};


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Olá mundo!
//         </p>
//         <p>
//           {1 + 1} Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>

//   );
// }

//export default Home;
