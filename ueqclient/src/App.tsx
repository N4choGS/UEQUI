import DashboardPanel from './components/DashboardPanel/DashboardPanel';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';


function App() {
  return ( 
    <FluentProvider theme={teamsLightTheme}>
       <DashboardPanel/>
    </FluentProvider>
  );
}

export default App;
