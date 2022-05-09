import Marquee from 'react-double-marquee';
// import './Marquee.module.css';

export default function FooComponent() {
  
  return (
    <div className="marquee"
      style={{
        whiteSpace: 'nowrap',
      }}
    >
      <Marquee
      direction="left">
        Начать проект Начать проект Начать проект Начать проект 
      </Marquee>
    </div>
  );
}