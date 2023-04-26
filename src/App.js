import React from 'react';
import logo from './img/logo.png';
import './styles/css/main.css';
import Card from './components/Card';
import TextBox from './components/TextBox';
import TextList from './components/TextList';
import Space from './components/Space';
import DonutChart from './components/DonutChart';
import data from './test.json';
import Button from './components/Button';

function App() {
  React.useEffect(() => {
    document.title = '3DMark Benchmark';
  }, []);

  const isoTime = data.runStart;
  const date = new Date(isoTime);
  const timeString = date.toLocaleTimeString([], { hour12: true, hour: 'numeric',minute:'2-digit'});
  const dateString = date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
  
  const maxScore = 3939;
  const result = data.results[0];
  const score = data.results[0].scores.overallScore.score;

  const cpuInfo = data.systemInfo.cpu;
  const gpuInfo = data.systemInfo.gpu;
  const storageInfo = data.systemInfo.storage;

/*   const parentRef = React.useRef(null);
  const [parentSize, setParentSize] = React.useState({
    width: 0,
    height: 0
  });

  React.useEffect(() => {
    if (parentRef.current) {
      setParentSize({
        width: parentRef.current.getBoundingClientRect().width,
        height: parentRef.current.getBoundingClientRect().height
      });
    }
  }, [parentRef]);
 */
  return (
    <div className="App">
      <header className="App-header">
        <img className='logo' src={logo} alt=''/>
        <h5 className='domain'>3DMark Benchmark</h5>
        <h5 className='solution'>Time Spy Extreme</h5>
        <div className='main-menu'>
          <h6 className='main-menu-item'>Home</h6>
          <h6 className='main-menu-item'>Benchmark</h6>
          <h6 className='main-menu-item'>Result</h6>
        </div>
      </header>
      <main>
        <div class="container">
          <div class="flex-grid">
            <div class="flex-column col-6">
              <Card className="orientation-horizontal inner-grid">
                <div className='chartScore'>
                  <h4 className='margin-clear'>Benchmark Score</h4>
                  <DonutChart percent={100*score/maxScore} text={score} evalution={((score/maxScore)>=0.8) && 'Excellent'}/>
                  <p>
                  <span style={{ 
                    fontWeight: 'bold',
                    color: '#2BBD77',
                  }}>+ 0.2%</span> increase since last test</p>
                </div>
                <div style={{flexGrow:'1'}}>
                <Space size="large"/>
                <div className="inner-grid">
                  <TextBox title='Average Score' value='3526'/>
                  <TextBox title='Best Score' value='3939'/>
                </div>
                <Space size="small"/>
                <div>
                  <TextList title="Time" value={`${dateString} ${timeString}`}/>
                  {/* <TextList title="Bench ID" value={'Some ID'}/> */}
                  <TextList title="CPU" value={cpuInfo[0].name}/>
                  <TextList title="GPU" value={gpuInfo[0].name}/>
                </div>
                <Space size="small"/>
                <div className='orientation-horizontal'>
                  <Button buttonType='primary' label='Compare Results'/>
                  <Button buttonType='secondary' label='Load'/>
                  <Button buttonType='secondary' label='Save'/>
                </div>
                </div>
              </Card>
            </div>
            <div class="flex-column col-3">
              <Card>
                <h4 className='margin-clear'>GPU Score</h4>
                <Space size="small"/>
                <h5 className='margin-clear thin'>{gpuInfo[0].name}</h5>
                <Space size="medium"/>
                
                <div className="inner-grid">
                  <TextBox value='3541' bigSize={true}/>
                </div>
                <Space size="small"/>
                <div className="inner-grid">
                  <TextBox  title='GT Test 1' value={`${result.scores.componentScores[0].subScores[1].score.toFixed(1)} fps`}/>
                  <TextBox  title='GT Test 2' value={`${result.scores.componentScores[0].subScores[0].score.toFixed(1)} fps`}/>
                </div>

                <Space size="medium"/>
                <TextList title="Average Frequency" value={`${gpuInfo[0].clockSpeed.gpu.averageMhz} Mhz`}/>
                <TextList title="Average Temperature" value={`${gpuInfo[0].averageTemperature} °C`}/>
              </Card>
            </div>
            <div class="flex-column col-3">
              <Card>
              <h4 className='margin-clear'>CPU Score</h4>
              <Space size="small"/>
              <h5 className='margin-clear thin'>{cpuInfo[0].name}</h5>
                <Space size="medium"/>

                <div className="inner-grid">
                  <TextBox value='2915' bigSize={true}/>
                </div>
                <Space size="small"/>
                <div className="inner-grid">
                  <TextBox  title='CPU Test Time' value={`${result.scores.componentScores[1].subScores[0].score.toFixed(2)} ms`}/>
                </div>
                <Space size="medium"/>
                <TextList title="Average Frequency" value={`${cpuInfo[0].averageFrequencyMhz} Mhz`}/>
                <TextList title="Average Temperature" value={`${cpuInfo[0].averageTemperature} °C`}/>
              </Card>
            </div>
          </div>
          <div class="flex-grid">
            <div class="flex-column col-12">
              <Card>
              <div className="inner-grid">
                <div className='card-content-session'>
                <h4 className='margin-clear section-title'>CPU Information</h4>
                  {cpuInfo.map( (cpu, index) => (
                  <div>
                      <TextList even={true} title="CPU" value={`${cpu.name}`} />
                      <TextList even={true} title="Codename" value={`${cpu.processorCodeName}`} />
                      <TextList tooltip={true} even={true} title="Clock Frequency" value={`${cpu.stockFrequencyMhz} MHz`} />
                      <TextList tooltip={true} even={true} title="Max Frequency" value={`${cpu.maxFrequencyMhz} MHz`}  />
                      <TextList tooltip={true} even={true} title="Cores" value={`${cpu.coreCount} (${cpu.threadCount})`}  />   
                      <TextList even={true} title="Package" value={`${cpu.processorPackage}`}  />  
                      <TextList tooltip={true} even={true} title="Core VID" value={`${cpu.voltageId}`}  />  
                      <TextList tooltip={true} even={true} title="Virtual Technology" value={`${cpu.virtualTechnologyCapable}`}  />                   </div>
                  ))} 
                </div>
                <div className='card-content-session'>
                <h4 className='margin-clear section-title'>GPU Information</h4>
                  {gpuInfo.map( (gpu, index) => (
                    <div>
                        <TextList even={true} title="GPU" value={`${gpu.name}`} />
                        <TextList even={true} title="Memory" value={`${gpu.memory.memoryAmountMb} MB ${gpu.memory.memoryType}`} />
                        <TextList tooltip={true} even={true} title="Available VRAM" value={`${gpu.memory.availableVram} MB`} />
                        <TextList even={true} title="Code Name" value={`${gpu.codeName}`}  />
                        <TextList even={true} title="Manufacturer" value={`${gpu.pciDeviceId.vendorName} / ${gpu.pciDeviceId.subvendorName}`}  />    
                        <TextList even={true} title="Driver Version" value={`${gpu.driverInfo.driverVersion}`}  />  
                        <TextList tooltip={true} even={true} title="Clock frequency" value={`${gpu.clockSpeed.gpu.currentMhz} MHz`}  />
                        <TextList tooltip={true} even={true} title="Boost" value={`${gpu.clockSpeed.boost.currentMhz} MHz`}  />
                        <TextList tooltip={true} even={true} title="Memory clock frequency" value={`${gpu.clockSpeed.memory.currentMhz} MHz`}  />                 
                    </div>
                  ))} 
                </div>
                <div className='card-content-session'>
                <h4 className='margin-clear section-title'>Drive Information</h4>
                  {storageInfo.map( (storage, index) => (
                    <div>
                      <TextList even={true} title="Drive Name" value={`${storage.driveName}`} />
                      <TextList even={true} title="Drive Model" value={`${storage.driveModel}`} />
                      <TextList even={true} title="Drive Type" value={`${storage.driveType}`} />                
                    </div>
                  ))} 
                </div>
              </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
