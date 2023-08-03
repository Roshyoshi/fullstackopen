import Header from "./components/Header";
import Total from "./components/Total";
import Content from "./components/Content"
const App = () => {
  

  return (
    <div>
      <Header course="Half Stack application development"/>
      <Content />
      <Total arr={[10, 7, 14]}/>
    </div>
  )
};

export default App;
