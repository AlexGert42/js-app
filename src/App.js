import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { CreateCell } from './pages/CreateCell'
import { Table } from './pages/Table'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { AlertState } from './context/alert/AlertState'
import { TableState } from './context/tadleData/TableState'



export const App = () => {


  return (
    <TableState>
      <AlertState>
        <BrowserRouter>

          <Header />
          <div className="container">
            <Switch>
              <Route path={'/'} exact component={Table} />
              <Route path={'/createcell'} component={CreateCell} />
            </Switch>
          </div>
          <Footer />

        </BrowserRouter>
      </AlertState>
    </TableState>
  )
}


