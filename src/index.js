import ReactDOM from 'react-dom/client';


var today = new Date()
var time = today.toLocaleDateString()
var x = 'test'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div style={{color : 'red'}} className="title" htmlFor="test">
    {time}
  </div>
);

const root2 = ReactDOM.createRoot(document.getElementById('epi'));
root2.render(
 <>
 test from root 2
 </>
);


