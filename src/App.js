import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { CreateCell } from './pages/CreateCell'
import { Table } from './pages/Table'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Modal } from './components/Modal'

import { AlertState } from './context/alert/AlertState'
import { TableState } from './context/tadleData/TableState'
import { ModalState } from './context/modal/ModalState'



export const App = () => {


  return (
    <ModalState>
      <TableState>
        <AlertState>
          <BrowserRouter>

            <Header />

            <Modal />

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
    </ModalState>
  )
}


