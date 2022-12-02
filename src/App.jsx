import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
//components
import { ReviewForm } from './components/ReviewForm'
import { Thanks } from './components/Thanks'
import { UserForm } from './components/UserForm'
//hooks
import { useForm } from './hooks/useForm'

import './App.css'

export function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />]

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto.
        </p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit">
                <span>Enviar</span>
                <FiSend />
                <GrFormNext />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
