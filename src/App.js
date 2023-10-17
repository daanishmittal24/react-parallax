import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textBlock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
        { <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer> }

        { <ParallaxLayer  offset={0} speed={0.5}>
        <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer> }

        <ParallaxLayer offset={0} speed={0.5}>
        <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1}>
          <div class="animation_layer parallax" id="right2_baloon"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <div class="animation_layer parallax" id="logo"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="cen_baloon"></div>
        </ParallaxLayer>

        <ParallaxLayer style={{float:"right"}} offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="right_baloon"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.25}>
        <div class="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
