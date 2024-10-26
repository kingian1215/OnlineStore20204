import '../App.css';
import Header from './Header';  
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <Header />

      <main role="main" className="container">
        <div className="starter-template">
          <h1>我的首頁</h1>
          <p className="lead">新專案.</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage;