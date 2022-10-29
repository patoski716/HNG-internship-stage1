import Head from './components/Head'
import Footer from './components/Footer'
import GitHub from './images/GitHub.png'
import Slack from './images/slack.png'

const links = [
  {id : "twitter", title : "Twiter Link", href : "https://twitter.com/patrick97856974"},
  {id : "btn_zuri", title : "Zuri Team", hidden: true, href : "https://training.zuri.team/"},
  {id : "books", title : "Zuri Book", hidden: true, href : "http://books.zuri.team"},
  {id : "book_python", title : "Python Books", href : "http://books.zuri.team/python-for-beginners?ref_id=patoski"},
  {id : "pitch", title : "Background Check for Coders", href : "https://background.zuri.team"},
  {id : "book_design", title : "Design Books", href : "https://books.zuri.team/design-rules"}
]

function App() {
  return (
    <div className="container">
      
      <Head/>
     
      {links.map((post)=>
        <div key={post.id} className="card rounded  text-center mt-3">
        <a href={post.href} type='button' id={post.id} style={{height:'50px',width:'100%',backgroundColor:'#EAECF0',textDecoration:'none',color:'black',border:'#EAECF0',justifyContent:'center'}}>
            <p className='mt-3'>{post.title}</p>
        </a>
      </div>
      )}
      
      <div className="row mb-5">
        <div className="col-md-4"></div>
          <div className="col-md-4 mx-5">
            <div className="mt-4 mx-5 px-5">
              <div className="port">
              <span className='point text-center mx-auto p-3'><img src={Slack} alt="github"  style={{height:'20px'}}/></span>
            <span className='point text-center mx-auto'><img src={GitHub} alt="github"  style={{height:'25px'}}/></span>

              </div>
              </div>
            </div>
          </div>
      <Footer/>
        

    </div>
  );
}

export default App;
