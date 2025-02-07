
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Goods from './components/Goods';
import Nav from './components/Nav';


function App() {
  const description = [
    "This is a description of the accessory 1",
    "This is a description of the accessory 2",
    "This is a description of the accessory 3",
    "This is a description of the accessory 4",
    "This is a description of the accessory 5",
    "This is a description of the accessory 6",
    "This is a description of the accessory 7",
    "This is a description of the accessory 8",
    "This is a description of the accessory 9",

  ];
  return (
    <>
      <Nav/>
      <Goods/>
      <CardContainer>
      <Card titleName="Accessory For Autumn" text={description[0]} src="/img2.png"/>
      <Card titleName="Accessory For Winter" text={description[1]} src="/img3.png"/>
      <Card titleName="Accessory For Spring" text={description[2]} src="/img4.png"/>
      <Card titleName="Accessory For December" text={description[3]} src="/img5.png"/>
      <Card titleName="Accessory For January" text={description[4]} src="/img6.png"/>
      <Card titleName="Accessory For February" text={description[5]} src="/img7.png"/>
      <Card titleName="Accessory For October" text={description[6]} src="/img8.png"/>
      <Card titleName="Accessory For November" text={description[7]} src="/img9.png"/>
      <Card titleName="Accessory For September" text={description[8]} src="/img10.png"/>
      </CardContainer>
      <Footer/>

    </>
  );
}

export default App;
